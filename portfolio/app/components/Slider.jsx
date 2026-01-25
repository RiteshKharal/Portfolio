"use client";

import { Josefin_Sans, Righteous, Smooch_Sans } from 'next/font/google';
import { useState } from "react";
import {ProjectCard} from "./ProjectsCard";
import {ProjectModal} from "./ProjectsCard";
const smooch = Smooch_Sans({ subsets: ['latin'], weight: ['100','900'] });


export default function SliderToggle() {
  const [active, setActive] = useState("skills");
  const [openProject, setOpenProject] = useState(null);

  const [showTill, setShowTill] = useState(4);

  const ProjectsDetails = [
    {
      title: "Portfolio Website",
      description: "A clean minimal portfolio with modern UI.",
      image: "/Portfolioimg.png",
      tech: ["React", "Tailwind", "Next.js"],
      live: "https://riteshkharal.vercel.app/",
      github: "https://github.com/RiteshKharal/Portfolio-Files",
    },
  ];

  const skillsContent = (
    <div className="rounded-xl bg-background/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
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

  const ProjectsContent = (
    <div className="flex flex-wrap gap-6 justify-center">
        {ProjectsDetails.slice(0, showTill).map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            onOpen={(() => setOpenProject(project))} 
          />
        ))}

        {ProjectsDetails.length > showTill && (
          <button
            onClick={() => setShowTill(showTill + 4)}
            className="mt-7 px-4 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:opacity-80"
          >
            Show More
          </button>
        )}
      </div>
  )

  const outputSlider =
    active === "skills" ? skillsContent : ProjectsContent;


    


  return (
    <>

    {openProject ? (
  <ProjectModal
    project={openProject}
    onClose={() => setOpenProject(null)}
  />
) : null}

<section
  id="SliderSection"
  className="mt-25 w-full max-w-3xl rounded-2xl bg-background/60 backdrop-blur-md"
>

    <div className="w-full max-w-3xl space-y-6 h-10 border border-border/80 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg ">
      <div className="h-10 rounded-md p-1 bg-accent grid grid-cols-2 gap-1">
        <button
          onClick={() => setActive("skills")}
          className={`h-full rounded-md text-sm font-semibold transition-all
            ${active === "skills"
              ? "bg-neutral-700 text-white shadow"
              : "text-foreground hover:bg-neutral-400/10"}`}
        >
          Skills
        </button>

        <button
          onClick={() => setActive("projects")}
          className={`h-full rounded-md text-sm font-semibold transition-all
            ${active === "projects"
              ? "bg-neutral-700 text-white shadow"
              : "text-foreground hover:bg-neutral-400/10"}`}
        >
          Projects
        </button>
      </div>

      
    </div>
    <div className={`transition-all duration-300 mt-5`}>
        {outputSlider}
      </div>
      </section>
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