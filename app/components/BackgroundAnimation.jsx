"use client";

import { useEffect, useState } from "react";

export default function FallingFlames({ amount = 10 }) {
  const [dots, setDots] = useState([]);

  // Generate flames
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
        horizontalDrift: (Math.random() - 0.5) * 20,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(arr);
  }, [amount]);

  // Set document height CSS var
  useEffect(() => {
    const setDocHeight = () => {
      document.documentElement.style.setProperty(
        "--DocumentHeight",
        document.body.scrollHeight + "px"
      );
    };

    setDocHeight();
    window.addEventListener("resize", setDocHeight);

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
            transform: translateY(0vh) translateX(0px);
            opacity: 0.5;
            filter: blur(1px);
          }
          25% {
            transform: translateY(-1vh) translateX(5px);
            opacity: 1;
            filter: blur(1px);
          }
          50% {
            transform: translateY(0vh) translateX(0px);
            opacity: 0.8;
            filter: blur(1px);
          }
          75% {
            transform: translateY(1vh) translateX(-5px);
            opacity: 1;
            filter: blur(1px);
          }
          100% {
            transform: translateY(0vh) translateX(0px);
            opacity: 0.5;
            filter: blur(1px);
          }
        }

        /* Base flame (LIGHT MODE) */
        .flame {
          position: absolute;
          border-radius: 50%;
          background: rgba(60, 60, 60, 0.9); /* soft dark gray instead of pure black */
          filter: blur(18px);
          box-shadow:
            0 0 12px 4px rgba(60, 60, 60, 0.7),
            0 0 24px 10px rgba(255, 180, 80, 0); /* subtle warm glow */
        }

        /* DARK MODE OVERRIDE */
        .dark .flame {
          background: rgba(255, 255, 255, 0.95);
          box-shadow:
            0 0 12px 4px rgba(255, 255, 255, 0.4),
            0 0 26px 12px rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {dots.map((d) => (
        <div
          key={d.id}
          className="flame"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            "--horizontalDrift": `${d.horizontalDrift}px`,
            animation: `flameFall ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
