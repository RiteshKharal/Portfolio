'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

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

        bg-[#0b0f1a]/80
        backdrop-blur-sm

        transition-all duration-300 ease-out

      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-[80vw] max-w-5xl
          h-[95vh] mt-7
          max-h-[90vh]
          overflow-auto
          rounded-3xl
          flex flex-col

          bg-foreground/8
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
          <button
            onClick={handleClose}
            className="
              flex items-center gap-2 
              cursor-pointer font-bold
              hover:text-[#ffe600]
              transition-all
            "
          >
            ← BACK TO MAZE
          </button>

        </div>

        <div className="px-10 pt-10 text-xl">
        {
          GetResult()
        }

        </div>


          {/* <div className="text-3xl animate-bounce float-end">
            🟡
          </div> */}


        </div>
    </div>
  );
}

function ProjectCard({ pr}) {
  return (
    <div className="w-full h-64 bg-background/10 backdrop-blur-lg rounded-xl p-4">
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

function QuickAccessCard(){
  return(
    <div> 
      Quick Access
      </div >
    )
}

function InfoCard() {
  return (
    <div className="bg-neutral-800 text-yellow-400 p-6 rounded-lg font-mono relative">
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




