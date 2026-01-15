"use client";

import { useEffect, useState } from "react";

export default function FallingFlames({ amount = 60 }) {
  const [dots, setDots] = useState([]);

  // Generate flames
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

  // Only run in browser: set --DocumentHeight dynamically
  useEffect(() => {
    const setDocHeight = () => {
      document.documentElement.style.setProperty(
        "--DocumentHeight",
        document.body.scrollHeight + "px"
      );
    };

    setDocHeight(); // initial
    window.addEventListener("resize", setDocHeight); // update on resize

    return () => window.removeEventListener("resize", setDocHeight);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      <style>{`
        :root {
          --DocumentHeight: 0px;
        }

        @keyframes flameFall {
          0% {
            transform: translateY(-15vh);
            opacity: 0.4;
          }
          10% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(calc(var(--DocumentHeight) + 15vh));
            opacity: 0;
          }
        }

        .flame {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 0, 0, 1);
          filter: blur(1px);
          box-shadow: 0 0 10px 3px rgba(0,0,0,0.5);
        }

        .dark .flame {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 0 10px 3px rgba(255,255,255,0.5);
        }

        .flame::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-100%);
          bottom: 100%;
          width: 2px;
          height: 26px;
          background: linear-gradient(to top, rgba(0,0,0,0.9));
          border-radius: 999px;
          filter: blur(4px);
        }

        .dark .flame::before {
          background: linear-gradient(to top, rgba(255,255,255,0.9));
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
          }}
        />
      ))}
    </div>
  );
}
