"use client";

import { useEffect, useState } from "react";

export default function FallingFlames({ amount = 60 }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < amount; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
      });
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(arr);
  }, [amount]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">

      <style>{`
        @keyframes flameFall {
          0% {
            transform: translateY(-15vh);
            opacity: 1;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        .flame {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 0, 0, 1);
          filter: blur(1px);
        }

        .flame::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-100%);
          bottom: 100%;
          width: 2px;
          height: 26px;
          background: linear-gradient(to top, rgba(255,160,70,0.9));
          border-radius: 999px;
          filter: blur(4px);
        }
      `}</style>

      {dots.map((d) => (
        <div
          key={d.id}
          className="flame"
          style={{
            left: `${d.left}%`,
            top: "-10vh",
            width: `${d.size}px`,
            height: `${d.size}px`,
            animation: `flameFall ${d.duration}s linear ${d.delay}s infinite`,
            boxShadow: "0 0 10px 3px rgba(255,120,30,0.5)",
          }}
        />
      ))}
    </div>
  );
}
