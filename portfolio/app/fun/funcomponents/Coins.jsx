"use client";
import { useState } from "react";

const coins = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: 2 + i,
  y: 10,
  info: {
    title: "Skill Unlocked",
    text: "Smooth animations + game loops",
  },
}));

export default function Coins({ onCollect }) {
  const [active, setActive] = useState(coins);

  return (
    <>
      {active.map((c) => (
        <button
          key={c.id}
          className="absolute w-4 h-4 bg-yellow-500 rounded-full animate-pulse"
          style={{ transform: `translate(${c.x * 32}px, ${c.y * 32}px)` }}
          onClick={() => {
            setActive((p) => p.filter((x) => x.id !== c.id));
            onCollect(c.info);
          }}
        />
      ))}
    </>
  );
}
