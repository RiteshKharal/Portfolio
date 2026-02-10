'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function FunProjectCard({ item, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(true);

  let GetResult = ()=>{
    if (item === 'project') {
      return <ProjectCard/>;
    }else if(item === 'about') {
      return <AboutCard/>;
    }    else if(item === 'quickaccess') {
      return <QuickAccessCard/>;
    }    else if(item === 'info') {
      return <InfoCard/>;
    }
  }

  const handleClose = () => {
    setClosing(true);
    onClose();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);


  return (
    <div
      onClick={handleClose}
      className={`
        fixed inset-0 z-50
        flex items-center justify-center

        backdrop-blur-sm

        transition-all duration-300 ease-out

      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-[80vw] max-w-5xl
          overflow-auto
          rounded-3xl
          flex flex-col
          bg-transparent
          backdrop-blur-xl
          transform transition-all duration-300 ease-out
          
          ${
            mounted && !closing
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }
        `}
      >

        <div className="
          flex items-center gap-3
          px-6 py-4
          text-[#2effff]
          font-mono
          tracking-wider
          transition-all duration-300
        ">
          <CloseButton onClose={handleClose}/>

        </div>

        <div className=" text-xl bg-background/50 text-yellow-400 mt-5 p-6 rounded-lg font-mono relative mx-8">
        {
          GetResult()
        }

        </div>


            <div className="px-8 py-4 text-center text-lg rounded-lg mt-10 transition-all duration-300">
          <button className="inline-block px-4 py-2 border text-gray-800 border-red-500 dark:border-red-300 dark:text-gray-400 font-mono tracking-wide rounded-md transition-all duration-300 hover:text-red-400 hover:border-red-400 hover:scale-110 cursor-pointer" onClick={onClose}>
          Close
        </button>
      </div>


        </div>
    </div>
  );
}



function CloseButton({ onClose }) {
  const [eating, setEating] = useState(false);
  const [mouth, setMouth] = useState(0);
  const [pacmanPos, setPacmanPos] = useState(20); 
  const requestRef = useRef();

  useEffect(() => {
    const animateMouth = () => {
      const Ptime = Date.now() * 0.01; 
      setMouth(Math.abs(Math.sin(Ptime)) * 0.5 + 0.1);
      requestRef.current = requestAnimationFrame(animateMouth);
    };
    requestRef.current = requestAnimationFrame(animateMouth);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Handle eating animation
  const handleEat = () => {
    setEating(true);
    const start = pacmanPos;
    const end = 100; 
    const duration = 900;
    const startTime = performance.now();

    const move = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setPacmanPos(start + (end - start) * progress);

      if (progress < 1) {
        requestAnimationFrame(move);
      } else {
        onClose();
      }
    };
    requestAnimationFrame(move);
  };

  const startDeg = mouth * 45; 
  const endDeg = 360 - startDeg;

  const pacmanClip = `polygon(
    50% 50%,
    ${50 + 50 * Math.cos((startDeg * Math.PI) / 180)}% ${50 + 50 * Math.sin((startDeg * Math.PI) / 180)}%,
    100% 50%,
    ${50 + 50 * Math.cos((endDeg * Math.PI) / 180)}% ${50 + 50 * Math.sin((endDeg * Math.PI) / 180)}%
  )`;

  const totalDots = 18;

  return (
    <div className="w-full h-[120px] flex items-center px-5 relative overflow-hidden">
      {/* {<button
        onClick={handleEat}
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-5xl z-20 cursor-pointer transition-transform duration-300 hover:scale-110 text-rose-400"
      >
        <IoClose />
      </button>

      <div
        className="absolute transition-all duration-300 ease-in-out"
        style={{
          right: `${pacmanPos}px`,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #ffeb3b, #fbbc05 80%)", // subtle 3D look
        }}
      >
        <div
          className="w-full h-full rounded-full absolute"
          style={{
            clipPath: pacmanClip,
            transform: "rotate(180deg)",
            background: "#0000", 
          }}
        />
        <div
          className="absolute w-[6px] h-[6px] bg-black rounded-full"
          style={{ top: "12px", right: "14px" }}
        />
      </div>

      <div className="absolute left-[80px] right-[80px] flex items-center justify-between">
        {[...Array(totalDots)].map((_, i) => {
          const dotProgress = (pacmanPos - 20) / 80; // 20 → 100
          const visible = i / totalDots > dotProgress ? 1 : 0;
          return (
            <div
              key={i}
              className={`w-2 h-2 bg-gray-300 rounded-full transition-all duration-300`}
              style={{
                opacity: visible,
                transform: `scale(${visible})`,
                transitionDelay: `${i * 20}ms`,
              }}
            />
          );
        })}
      </div>} */}
    </div>
  );
} // Not used currently, but can be added as a fun close button in the future





function ProjectCard({ pr}) {
  return (
    <div className="w-full h-64   rounded-xl p-4">
      Project
    </div>
  )
}

function AboutCard(){
  return(
    <div>
      About
    </div>
  )
}


function QuickAccessCard() {
  const [activeCard, setActiveCard] = useState(null);

  const buttons = [
    { label: "About Me", component: <AboutCard /> },
    { label: "Projects", component: <ProjectCard /> },
    { label: "Info", component: <InfoCard /> },
  ];

  const content = () => {
    if (!activeCard) {
      return (
        <div className="flex items-center flex-col gap-4 w-full">
          <h2 className="text-xl font-semibold mb-5 ">Quick Access</h2>

          <div className="grid grid-cols-2 w-full gap-10">
            {buttons.map((btn, i) => {
              let alignment = i % 2 === 0 ? "justify-self-start" : "justify-self-end";
              if (i === buttons.length - 1 && buttons.length % 2 !== 0) {
                alignment = "justify-self-center col-span-2";
              }

              return (
                <button
                  key={i}
                  onClick={() => setActiveCard(btn.component)}
                  className={`py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${alignment} border border-border p-5`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex flex-col justify-between min-h-[300px]">
        {/* Back button top-left */}
        <button
          onClick={() => setActiveCard(null)}
          className="absolute top-0 left-0 text-4xl font-semibold 
                     transition-all duration-200 
                     hover:opacity-70 hover:-translate-x-1 active:scale-95 cursor-pointer"
        >
          <IoIosArrowRoundBack />
        </button>

        <div className="flex flex-1 items-center justify-center mt-8">
          {activeCard}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-6 rounded-xl relative ">
        {content()}
      </div>
    </div>
  );
}



function InfoCard() {
  return (
    <div className=" p-6 rounded-lg font-mono relative">
      <p className="leading-relaxed">
        Welcome to my Pac-Man portfolio! 🎮  <br /><br />
        Navigate the maze to collect foods: <br />
        <span className="text-green-400">Green orb</span> for <b>Info</b> about me, <br />
        <span className="text-purple-400">Purple</span> for my <b>Projects</b>.  <br /> <br />
        Have fun exploring and learning more about my work!
      </p>

      <ul className="mt-4 space-y-2 list-disc list-inside text-blue-300">
        <li>
          Use arrow keys to move Pac-Man
        </li>
        <li className="text-red-300">Do not Collide with the Ghosts.</li>
      </ul>
    </div>
  );
}




