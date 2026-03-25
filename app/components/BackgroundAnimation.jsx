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
        horizontalDrift: (Math.random() - 0.5) * 40,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(arr);
  }, [amount]);

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
      <div className="relative w-full h-full">
        <style>{`
        :root {
          --DocumentHeight: 0px;
        }

        @keyframes BgAnim {
          0% {
            box-shadow: 0 0 12px 4px hsla(255 100% 80% / 0.4);
          }

          25% {
            box-shadow: 0 0 20px 6px hsla(255 40% 30% / 0.5);
          }

          50% {
            box-shadow: 0 0 28px 10px hsla(255 100% 90% / 0.6);
          }

          75% {
            box-shadow: 0 0 20px 6px hsla(25 100% 60% / 0.5);
          }

          100% {
            box-shadow: 0 0 12px 4px hsla(25 100% 40% / 0.4);
          }
        }

        .dots {
          position: absolute;
          border-radius: 50%;
          background: white;
          filter: blur(1px);
          will-change: transform, box-shadow;
          transition: all 0.2s
        }

        .dark .dots {
          background: rgba(255, 255, 255, 0.6);
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
              animation: `BgAnim ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
}