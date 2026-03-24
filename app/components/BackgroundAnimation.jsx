"use client";

import { useEffect, useState } from "react";

export default function BackgroundAnimation({ amount = 20 }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.6 + 0.6,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
        horizontalDrift: (Math.random() - 0.5) * 20,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(arr);
  }, [amount]);

  useEffect(() => {
    const setDocHeight = () => {
      document.documentElement.style.setProperty(
        "--DocumentHeight",
        document.body.scrollHeight + "px",
      );
    };

    setDocHeight();
    window.addEventListener("resize", setDocHeight);

    return () => window.removeEventListener("resize", setDocHeight);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] ">
      <div className="relative w-full h-full">
        <style>{`
        :root {
          --DocumentHeight: 0px;
        }

        @keyframes BgAnim {
          0% {
            transform: translateY(0vh) translateX(0px);
            opacity: 0.5;
            filter: blur(2px);
          }
          25% {
            transform: translateY(-1vh) translateX(5px);
            opacity: 1;
            filter: blur(2px);
          }
          50% {
            transform: translateY(0vh) translateX(0px);
            opacity: 0.8;
            filter: blur(2px);
          }
          75% {
            transform: translateY(1vh) translateX(-5px);
            opacity: 1;
            filter: blur(2px);
          }
          100% {
            transform: translateY(0vh) translateX(0px);
            opacity: 0.5;
            filter: blur(2px);
          }
        }

        .dots {
          position: absolute;
          border-radius: 50%;
          background: rgba(60, 60, 60, 0.9); 
          filter: blur(1px);
          box-shadow:
            0 0 12px 4px rgba(60, 60, 60, 0.7),
            0 0 24px 10px rgba(255, 180, 80, 0);

          transition: all 0.2s ease  ;
        }

        .dark .dots {
          background: rgba(255, 255, 255, 0.5);

          box-shadow:
            0 0 12px 4px rgba(255, 255, 255, 0.4),
            0 0 26px 12px rgba(255, 255, 255, 0.2);

        }
      `}</style>

        {dots.map((d) => (
          <div
            key={d.id}
            className="dots"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              "--horizontalDrift": `${d.horizontalDrift}px`,
              // animation: `BgAnim ${d.duration}s ease-in-out ${d.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
