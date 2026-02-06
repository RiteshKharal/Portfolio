'use client';

import { useEffect, useRef } from "react";

export default function Game() {
  const canvasRef = useRef(null);

  
  
  const tileMap = [
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "X        X             X     X",
  "X XX XXX X XXX XX  XXX X XX  X",
  "X                            X",
  "X XX X XXXXX X XXXXX X XX  X X",
  "X    X       X       X     X X",
  "XXXX XXXX XXXX XXXX XXXX     X",
  "X                          XXX",
  "XXXX X XXrXX X XXrXX X XXX XXX",
  "X       b               XX   X",
  "XXXX X X   X X XXXXX X XX    X",
  "X           X       X       XX",
  "XXXX X XXXXX   XXr X X XXXXXXX",
  "X                       X   XX",
  "X XX XXX X XXXX XXXXX X XX XXX",
  "X  X          X P X        X X",
  "XX X X XXXXX XXXXXXX X X XX  X",
  "X    X o X       X   X      XX",
  "X XXXXXX X X X X X XXXXXX XXXX",
  "X                      p    XX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
];


  const rowCount = tileMap.length;
  const columnCount = tileMap[0].length;
  const tileSize = 27;
  const boardWidth = columnCount * tileSize;
  const boardHeight = rowCount * tileSize + 40; // extra space for UI

  const directions = ["U", "D", "L", "R"];

  const walls = useRef(new Set());
  const foods = useRef(new Set());
  const ghosts = useRef(new Set());
  const pacman = useRef(null);

  const score = useRef(0);
  const lives = useRef(3);
  const gameOver = useRef(false);

  // eslint-disable-next-line react-hooks/unsupported-syntax
  class Block {
    constructor(type, x, y, width, height, color) {
      this.type = type;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color || "white";

      this.startX = x;
      this.startY = y;

      this.direction = "R";
      this.velocityX = 0;
      this.velocityY = 0;
    }

    updateDirection(direction) {
      const prev = this.direction;
      this.direction = direction;
      this.updateVelocity();

      this.x += this.velocityX;
      this.y += this.velocityY;

      for (let wall of walls.current.values()) {
        if (collision(this, wall)) {
          this.x -= this.velocityX;
          this.y -= this.velocityY;
          this.direction = prev;
          this.updateVelocity();
          return;
        }
      }
    }

    updateVelocity() {
      const s = tileSize / 4;
      if (this.direction === "U") {
        this.velocityX = 0;
        this.velocityY = -s;
      } else if (this.direction === "D") {
        this.velocityX = 0;
        this.velocityY = s;
      } else if (this.direction === "L") {
        this.velocityX = -s;
        this.velocityY = 0;
      } else if (this.direction === "R") {
        this.velocityX = s;
        this.velocityY = 0;
      }
    }

    reset() {
      this.x = this.startX;
      this.y = this.startY;
    }
  }

  function collision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  function loadMap() {
    walls.current.clear();
    foods.current.clear();
    ghosts.current.clear();

    for (let r = 0; r < rowCount; r++) {
      console.log(tileMap[r].length);
      for (let c = 0; c < columnCount; c++) {
        const ch = tileMap[r][c];
        const x = c * tileSize;
        const y = r * tileSize + 40; // shift down for UI

        if (ch === "X") {
          walls.current.add(
            new Block("wall", x, y, tileSize, tileSize, "#2effff")
          );
        } else if (ch === "b") {
          ghosts.current.add(
            new Block("ghost", x, y, tileSize, tileSize, "#00c3ff")
          );
        } else if (ch === "o") {
          ghosts.current.add(
            new Block("ghost", x, y, tileSize, tileSize, "#ff9f1c")
          );
        } else if (ch === "p") {
          ghosts.current.add(
            new Block("ghost", x, y, tileSize, tileSize, "#ff7eb9")
          );
        } else if (ch === "r") {
          ghosts.current.add(
            new Block("ghost", x, y, tileSize, tileSize, "#ff3b3b")
          );
        } else if (ch === "P") {
          pacman.current = new Block(
            "pacman",
            x,
            y,
            tileSize,
            tileSize,
            "#ffe600"
          );
        } else if (ch === " ") {
          foods.current.add(new Block("food", x + 14, y + 14, 4, 4, "white"));
        }
      }
    }
  }

  function draw(ctx) {
    ctx.clearRect(0, 0, boardWidth, boardHeight);

    // ----- UI PANEL -----
    ctx.fillStyle = "#0b0f1a";
    ctx.fillRect(0, 0, boardWidth, 40);

    ctx.fillStyle = "#2effff";
    ctx.font = "16px monospace";
    ctx.fillText(`SCORE: ${score.current}`, 16, 26);

    ctx.fillStyle = "#ff3b3b";
    ctx.fillText(`LIVES: ${`💥`.repeat(lives.current)}`, boardWidth - 140, 26);

    if (gameOver.current) {
      ctx.fillStyle = "white";
      ctx.font = "20px monospace";
      ctx.fillText("GAME OVER — PRESS ANY KEY", boardWidth / 2 - 120, 26);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#3a97df";

    for (let wall of walls.current.values()) {
      ctx.strokeRect(wall.x + 2, wall.y + 2, wall.width - 4, wall.height - 4);
    }

    // ----- FOOD (DOTS) -----
    for (let food of foods.current.values()) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(
        food.x + food.width / 2,
        food.y + food.height / 2,
        3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // ----- GHOSTS -----
    for (let ghost of ghosts.current.values()) {
      ctx.fillStyle = ghost.color;

      ctx.beginPath();
      ctx.arc(
        ghost.x + tileSize / 2,
        ghost.y + tileSize / 2,
        tileSize / 2 - 2,
        Math.PI,
        0
      );
      ctx.lineTo(ghost.x + tileSize - 2, ghost.y + tileSize);
      ctx.lineTo(ghost.x + 2, ghost.y + tileSize);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(ghost.x + 10, ghost.y + 14, 4, 0, Math.PI * 2);
      ctx.arc(ghost.x + 22, ghost.y + 14, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(ghost.x + 11, ghost.y + 15, 2, 0, Math.PI * 2);
      ctx.arc(ghost.x + 23, ghost.y + 15, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // ----- PACMAN -----
    const p = pacman.current;
    ctx.fillStyle = p.color;

    ctx.beginPath();
    let startAngle = 0.2;
    let endAngle = Math.PI * 2 - 0.2;

    if (p.direction === "L") {
      startAngle = Math.PI + 0.2;
      endAngle = Math.PI * 2 - 0.2 + Math.PI;
    } else if (p.direction === "U") {
      startAngle = -Math.PI / 2 + 0.2;
      endAngle = Math.PI * 1.5 - 0.2;
    } else if (p.direction === "D") {
      startAngle = Math.PI / 2 + 0.2;
      endAngle = Math.PI * 2.5 - 0.2;
    }

    ctx.moveTo(p.x + tileSize / 2, p.y + tileSize / 2);
    ctx.arc(
      p.x + tileSize / 2,
      p.y + tileSize / 2,
      tileSize / 2 - 2,
      startAngle,
      endAngle
    );
    ctx.closePath();
    ctx.fill();
  }

  function move() {
    const p = pacman.current;
    p.x += p.velocityX;
    p.y += p.velocityY;

    for (let wall of walls.current.values()) {
      if (collision(p, wall)) {
        p.x -= p.velocityX;
        p.y -= p.velocityY;
        break;
      }
    }

    for (let ghost of ghosts.current.values()) {
      if (collision(ghost, p)) {
        lives.current -= 1;
        if (lives.current === 0) {
          gameOver.current = true;
          return;
        }
        resetPositions();
      }

      ghost.x += ghost.velocityX;
      ghost.y += ghost.velocityY;

      for (let wall of walls.current.values()) {
        if (
          collision(ghost, wall) ||
          ghost.x <= 0 ||
          ghost.x + ghost.width >= boardWidth
        ) {
          ghost.x -= ghost.velocityX;
          ghost.y -= ghost.velocityY;
          const nd = directions[((Math.floor(Math.random() * 160))) % 4];
          ghost.updateDirection(nd);
        }
      }
    }

    let eaten = null;
    for (let food of foods.current.values()) {
      if (collision(p, food)) {
        eaten = food;
        score.current += 10;
        break;
      }
    }
    foods.current.delete(eaten);

    if (foods.current.size === 0) {
      loadMap();
      resetPositions();
    }
  }

  function resetPositions() {
    pacman.current.reset();
    pacman.current.velocityX = 0;
    pacman.current.velocityY = 0;

    for (let ghost of ghosts.current.values()) {
      ghost.reset();
      const nd = directions[Math.floor(Math.random() * 4)];
      ghost.updateDirection(nd);
    }
  }

  function handleKey(e) {
    if (gameOver.current) {
      loadMap();
      resetPositions();
      lives.current = 3;
      score.current = 0;
      gameOver.current = false;
      return;
    }

    if (e.code === "ArrowUp" || e.code === "KeyW") {
      pacman.current.updateDirection("U");
    } else if (e.code === "ArrowDown" || e.code === "KeyS") {
      pacman.current.updateDirection("D");
    } else if (e.code === "ArrowLeft" || e.code === "KeyA") {
      pacman.current.updateDirection("L");
    } else if (e.code === "ArrowRight" || e.code === "KeyD") {
      pacman.current.updateDirection("R");
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    loadMap();
    resetPositions()


    document.addEventListener("keyup", handleKey);

    const loop = setInterval(() => {
      if (!gameOver.current) {
        move();
        draw(ctx);

      } else {
        draw(ctx);
      }
    }, 50);

    return () => {
      clearInterval(loop);
      document.removeEventListener("keyup", handleKey);
    };
  });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <canvas
        ref={canvasRef}
        width={boardWidth}
        height={boardHeight}
        style={{
          background:'#0b0f1a',
          borderRadius: "14px",
        }}
      />
    </div>
  );
}
