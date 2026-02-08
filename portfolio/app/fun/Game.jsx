'use client';

import { useEffect, useRef, useState } from "react";
import FunProjectCard from "./funcomponents/FunCard";
import { FaRegBookmark } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export default function Game() {
  const canvasRef = useRef(null);

  // X = wall,empty = food or blank
  //  b = blue ghost, o = orange ghost, r =red ghost, p = pink ghost
  // P = pacman,  I = project S = about, 

  const tileMap = [
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "X        X      S      X     X",
  "X XX XXX X XXX XX  XXX X XX  X",
  "X                  I         X",
  "X XX X XXXXX X XXXXX X XX  X X",
  "X    X       X       X     X X",
  "XXXX XXXX XXXX XXXX XXXX     X",
  "X                          XXX",
  "XXXX X XXrXX X XXrXX X XXX XXX",
  "X       b               XX   X",
  "XXXX X X   X X XXXXX X XX    X",
  "X   I       X       X       XX",
  "XXXX X XXXXX   XXr X X XXXXXXX",
  "X                       X   XX",
  "X XX XXX X XXXX XXXXX X XX XXX",
  "X  S          X  PX     I  X X",
  "XX X X XXXXX XXXXXXX X X XX  X",
  "X    X o X       X   X      XX",
  "X XXXXXX X X X X X XXXXXX XXXX",
  "X  S           I       p    XX",
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
];

  const rowCount = tileMap.length;
  const columnCount = tileMap[0].length;
  const tileSize = 28;
  const boardWidth = columnCount * tileSize;
  const boardHeight = rowCount * tileSize + 50;

  const directions = ["U", "D", "L", "R"];

  const walls = useRef(new Set());
  const foods = useRef(new Set());
  const AboutFood = useRef(new Set());
  const ProjectFood = useRef(new Set());
  
  const ghosts = useRef(new Set());
  const pacman = useRef(null);

  const score = useRef(0);
  const lives = useRef(3);
  const gameOver = useRef(false);

  const [cardShown, setCardShown] = useState('info'); // CHANGE TS TO NONE BTW

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
    AboutFood.current.clear();

    for (let r = 0; r < rowCount; r++) {
      for (let c = 0; c < columnCount; c++) {
        const ch = tileMap[r][c];
        const x = c * tileSize;
        const y = r * tileSize + 50;

        if (ch === "X") {
          walls.current.add(
            new Block("wall", x, y, tileSize, tileSize, "foreground")
          );
        } else if (ch === "b") {
          const g = new Block("ghost", x, y, tileSize, tileSize, "#00c3ff");
          g.updateDirection("R");
          ghosts.current.add(g);
        } else if (ch === "o") {
          const g = new Block("ghost", x, y, tileSize, tileSize, "#ff9f1c");
          g.updateDirection("L");
          ghosts.current.add(g);
        } else if (ch === "p") {
          const g = new Block("ghost", x, y, tileSize, tileSize, "#ff7eb9");
          g.updateDirection("U");
          ghosts.current.add(g);
        } else if (ch === "r") {
          const g = new Block("ghost", x, y, tileSize, tileSize, "#ff3b3b");
          g.updateDirection("D");
          ghosts.current.add(g);
        } else if (ch === "P") {
          pacman.current = new Block(
            "pacman",
            x,
            y,
            tileSize,
            tileSize,
            "#ffe600"
          );
        } else if (ch === "S") {
          AboutFood.current.add(
            new Block(
              "specialFood",
              x + tileSize / 4,
              y + tileSize / 4,
              tileSize / 2,
              tileSize / 2,
              "#41d2a2"
            )
          );
        } else if (ch === "I") {
          ProjectFood.current.add(
            new Block(
              "projectFood",
              x + tileSize / 4,
              y + tileSize / 4,
              tileSize / 2,
              tileSize / 2,
              ""
            )
          );
        }else if (ch === " ") {
          if (Math.random() < 0.6) {
            foods.current.add(
              new Block("food", x + tileSize / 2 - 2, y + tileSize / 2 - 2, 4, 4, "white")
            );
          }
        }
      }
    }
  }

  function draw(ctx) {
    ctx.clearRect(0, 0, boardWidth, boardHeight);

    const uiHeight = tileSize;

    const uiGrad = ctx.createLinearGradient(0, 0, 0, uiHeight);
    ctx.fillStyle = uiGrad;
    ctx.fillRect(0, 0, boardWidth, uiHeight);

    const neon = ctx.createLinearGradient(0, 0, boardWidth, 0);

    ctx.strokeStyle = neon;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, uiHeight);
    ctx.lineTo(boardWidth, uiHeight);
    ctx.stroke();

    ctx.fillStyle = "#2effff";
    ctx.font = "bold 16px Orbitron, monospace";
    ctx.fillText(`SCORE: ${score.current}`, 16, 30);

    ctx.fillStyle = "#41d2a2";
    ctx.font = "16px Orbitron, monospace";
    ctx.fillText('Green: About', boardWidth / 2 - 80, 30);

    ctx.fillStyle = "hsl(273 71.5% 74.8%)";
    ctx.fillText('Purple: Projects', boardWidth / 2 + 50, 30);


    ctx.fillStyle = "#ff3b3b";
    ctx.font = "16px Orbitron, monospace";
    ctx.fillText(`${"♥️".repeat(lives.current)}`, boardWidth - 170, 30);

    if (gameOver.current) {
      ctx.fillStyle = "white";
      ctx.font = "bold 20px Orbitron, monospace";
      const text = "GAME OVER — PRESS ANY KEY";
      const w = ctx.measureText(text).width;
      ctx.fillText(text, boardWidth / 2 - w / 2, 30);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = document.documentElement.classList.contains("dark") ? "hsla(195 59.6% 82.9% / 0.3) " : "hsla(195 100% 15.8% / 0.4)";
    for (let wall of walls.current.values()) {
      ctx.strokeRect(wall.x+2 , wall.y+2 , wall.width-4  , wall.height-4   );
    }

    const t = Date.now() * 0.005;
    for (let food of foods.current.values()) {
      ctx.save();
      ctx.translate(
        food.x + food.width / 2,
        food.y + food.height / 2
      );
      ctx.rotate(Math.sin(t) * Math.PI);

      ctx.fillStyle = document.documentElement.classList.contains("dark") ? "hsla(205 0% 93.6%)" : "hsla(201 0% 1%)"  ;
      ctx.beginPath()
      ctx.ellipse(0, 0, 2.7, 2, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    for (let food of AboutFood.current.values()){
      const centerX = food.x + food.width / 2;
      const centerY = food.y + food.height / 2;
      const time = Date.now() * 0.002;

      const glow = ctx.createRadialGradient(
        centerX, centerY, 2,
        centerX, centerY, 18
      );

      glow.addColorStop(0, "rgba(65, 210, 162, 0.9)");
      glow.addColorStop(1, "rgba(65, 210, 162, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
      ctx.fill();

      const grad = ctx.createRadialGradient(
        centerX - 3, centerY - 3, 2,
        centerX, centerY, 8
      );
      grad.addColorStop(0, "#eafff6");
      grad.addColorStop(0.5, "#41d2a2");
      grad.addColorStop(1, "#1f8f6b");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();

      if (collision(pacman.current, food)) {
        // AboutFood.current.delete(food);
        resetPositions();
        setCardShown('about');
        score.current += 50;

      }
    }

    for (let food of ProjectFood.current.values()){
      const centerX = food.x + food.width / 2;
      const centerY = food.y + food.height / 2;
      const time = Date.now() * 0.002;

      const glow = ctx.createRadialGradient(
        centerX, centerY, 2,
        centerX, centerY, 18
      );

      glow.addColorStop(0, "rgba(65, 21, 162, 0.9)");
      glow.addColorStop(1, "rgba(65, 210, 162, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 14, 0, Math.PI * 2);
      ctx.fill();

      const grad = ctx.createRadialGradient(
        centerX - 3, centerY - 3, 2,
        centerX, centerY, 8
      );
      grad.addColorStop(0, "#eafff6");
      grad.addColorStop(0.5, "rgba(65, 21, 162, 0.5)");
      grad.addColorStop(1, "rgba(65, 21, 162, 0.9)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();

      if (collision(pacman.current, food)) {
        // AboutFood.current.delete(food);
        resetPositions();
        setCardShown('project');
        score.current += 50;

      }
    }

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
    }


const p = pacman.current;
ctx.save();
ctx.translate(p.x + tileSize / 2, p.y + tileSize / 2); 

if (p.direction === "R") ctx.rotate(0);
if (p.direction === "L") ctx.rotate(Math.PI);
if (p.direction === "U") ctx.rotate(-Math.PI / 2);
if (p.direction === "D") ctx.rotate(Math.PI / 2);

ctx.fillStyle = p.color;
ctx.beginPath();

const Ptime = Date.now() * 0.008;
const mouth = Math.abs(Math.sin(Ptime)) * 0.7;

const startAngle = mouth;
const endAngle = Math.PI * 2 - mouth;

ctx.moveTo(0, 0);
ctx.arc(0, 0, tileSize / 2 - 2, startAngle, endAngle);
ctx.closePath();
ctx.fill();

ctx.restore();

  }

  function move() {
    const p = pacman.current;

    p.x += p.velocityX;
    p.y += p.velocityY;

    if (p.x < 0) p.x = boardWidth - tileSize;
    if (p.x > boardWidth) p.x = 0;

    for (let wall of walls.current.values()) {
      if (collision(p, wall)) {
        p.x -= p.velocityX;
        p.y -= p.velocityY;
        break;
      }
    }

    for (let ghost of ghosts.current.values()) {
      if (Math.random() < 0.02) {
        if (ghost.x < p.x) ghost.updateDirection("R");
        else if (ghost.x > p.x) ghost.updateDirection("L");
        else if (ghost.y < p.y) ghost.updateDirection("D");
        else ghost.updateDirection("U");
      }

      ghost.x += ghost.velocityX;
      ghost.y += ghost.velocityY;

      if (ghost.x < 0) ghost.x = boardWidth - tileSize;
      if (ghost.x > boardWidth) ghost.x = 0;

      for (let wall of walls.current.values()) {
        if (collision(ghost, wall)) {
          ghost.x -= ghost.velocityX;
          ghost.y -= ghost.velocityY;
          ghost.updateDirection(
            directions[Math.floor(Math.random() * 4)]
          );
        }
      }

      if (collision(ghost, p)) {
        lives.current -= 1;
        if (lives.current === 0) {
          gameOver.current = true;
          return;
        }
        resetPositions();
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
      ghost.updateDirection(
        directions[Math.floor(Math.random() * 4)]
      );
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
    resetPositions();

    document.addEventListener("keyup", handleKey);

    const loop = setInterval(() => {
      if (!gameOver.current && !cardShown) {
        move();
      }

      draw(ctx);
    }, 40);

    return () => {
      clearInterval(loop);
      document.removeEventListener("keyup", handleKey);
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }} className="">
        <canvas
          ref={canvasRef}
          width={boardWidth}
          height={boardHeight}
          style={{}}
        />
      </div>

      <div className="flex justify-end translate-x-10 pr-4 text-primary font-semibold flex-col gap-4 text-[2rem]">

  <button 
    className="
      relative
      text-foreground p-5 rounded-[20px] tracking-wider
      hover:text-blue-300 transition hover:scale-110
      cursor-pointer
    " 
    onClick={()=>{
      setCardShown('info')
    }}
  >
    <FaCircleInfo />
  </button>

  <button 
    className="
      relative
      text-foreground p-5 rounded-[20px]  tracking-wider
      transition text-center hover:text-red-300 hover:scale-110 cursor-pointer
    " 
    onClick={() => setCardShown('quickaccess')}
  >
    {/* Quick Access */} <FaRegBookmark />
  </button>
</div>



      {cardShown && <FunProjectCard onClose={()=>{setCardShown(false);}} item={cardShown}/>}
    </>
  );
}
