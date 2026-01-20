"use client";

import { Josefin_Sans, Righteous, Smooch_Sans } from 'next/font/google';
import { useState } from "react";
import ManageProjectCardsShown from "./ProjectsCard";
const smooch = Smooch_Sans({ subsets: ['latin'], weight: ['100','900'] });


export default function SliderToggle() {
  const [active, setActive] = useState("skills");

  const skillsContent = (
    <div className="rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6">
      {/* <h2 className="text-3xl font-bold mb-6">Skills</h2> */}

      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">Front-End</h3>
          <p className="opacity-80">
            Skilled in building responsive, clean, and dynamic user interfaces using modern frameworks.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <SkillTag text="React" />
            <SkillTag text="Next.js" />
            <SkillTag text="TailwindCSS" />
            <SkillTag text="UI/UX" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Back-End</h3>
          <p className="opacity-80">
            Experience creating APIs, authentication systems, and server-side logic.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
            <SkillTag text="Node.js" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <div className="flex flex-wrap gap-3 mt-1">
            <SkillTag text="Git" />
            <SkillTag text="VS Code" />
            <SkillTag text="Figma" />
          </div>
        </div>
      </div>
    </div>
  );

  const outputSlider =
    active === "skills" ? skillsContent : <ManageProjectCardsShown />;

  return (
    <>
    <div className="w-full max-w-3xl space-y-6 h-10 border border-white/20 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg shadow-2xl">
      <div className="h-10 rounded-md p-1 bg-accent grid grid-cols-2 gap-1">
        <button
          onClick={() => setActive("skills")}
          className={`h-full rounded-md text-sm font-semibold transition-all
            ${active === "skills"
              ? "bg-neutral-700 text-white shadow"
              : "text-foreground hover:bg-neutral-800/40"}`}
        >
          Skills
        </button>

        <button
          onClick={() => setActive("projects")}
          className={`h-full rounded-md text-sm font-semibold transition-all
            ${active === "projects"
              ? "bg-neutral-700 text-white shadow"
              : "text-foreground hover:bg-neutral-800/40"}`}
        >
          Projects
        </button>
      </div>

      
    </div>
    <div className={`transition-all duration-300 mt-5`}>
        {outputSlider}
      </div>
    </>
  );
}


function SkillTag({ text }) {
  return (
    <span className="px-3 py-1 text-sm bg-background rounded-xl shadow hover:opacity-60 cursor-pointer ">
      {text}
    </span>
  );
}