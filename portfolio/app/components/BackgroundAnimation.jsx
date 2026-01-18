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
        top: Math.random() * 100, // Random vertical position
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
        horizontalDrift: (Math.random() - 0.5) * 20, // Smaller horizontal movement for hovering
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

        .flame {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 0, 0, 1);
          filter: blur(20px);
          box-shadow: 0 0 10px 3px rgba(0,0,0,0,0.5);
        }

        .dark .flame {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 0 10px 3px rgba(255,255,255);
          opacity:1;
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
