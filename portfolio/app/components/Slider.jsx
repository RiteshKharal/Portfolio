"use client";

import { Josefin_Sans, Righteous, Smooch_Sans } from 'next/font/google';
import { useState } from "react";
import {ProjectCard} from "./ProjectsCard";
import {ProjectModal} from "./ProjectsCard";
const smooch = Smooch_Sans({ subsets: ['latin'], weight: ['100','900'] });
import {
  FaReact,
  FaGitAlt,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const ProjectsDetails = [
    {
      title: "Portfolio Website",

      description: "A clean minimal portfolio with modern UI.",

      LongDesc: (
  <section>
    A space where I share the projects and progress I’ve been working on and the ideas I enjoy building. It’s designed to be clean and easy to explore.
    <br /><br />
    This portfolio is meant to showcase my work, and document my progress along the way. Feel free to explore the projects, look around, and get a sense of what I’ve been building recently.
  </section>
),


      image: "/Portfolioimg.png",

      tech: ["React", "Tailwind", "Next.js"],

      live: "https://riteshkharal.vercel.app/",
      
      github: "https://github.com/RiteshKharal/Portfolio-Files",
    },
  ];


export default function SliderToggle() {
  const [active, setActive] = useState("skills");
  const [openProject, setOpenProject] = useState(null);

  const [showTill, setShowTill] = useState(4);

//   const ProjectsDetails = [
//     {
//       title: "Portfolio Website",

//       description: "A clean minimal portfolio with modern UI.",

//       LongDesc: (
//   <section>
//     A space where I share the projects and progress I’ve been working on and the ideas I enjoy building. It’s designed to be clean and easy to explore.
//     <br /><br />
//     This portfolio is meant to showcase my work, and document my progress along the way. Feel free to explore the projects, look around, and get a sense of what I’ve been building recently.
//   </section>
// ),


//       image: "/Portfolioimg.png",

//       tech: ["React", "Tailwind", "Next.js"],

//       live: "https://riteshkharal.vercel.app/",
      
//       github: "https://github.com/RiteshKharal/Portfolio-Files",
//     },
//   ];

  const skillsContent = (
    <div className="rounded-xl bg-background/1 border border-white/10 shadow-lg p-6 grid grid-cols-2 gap-4">
  <SkillTag
    text="React"
    subtext="UI library"
    icon={<FaReact />}
    color="#61DAFB"
  />
  <SkillTag
    text="Next.js"
    subtext="React framework"
    icon={<SiNextdotjs />}
    color="#ffffff"
  />
  <SkillTag
    text="TailwindCSS"
    subtext="CSS framework"
    icon={<SiTailwindcss />}
    color="#38BDF8"
  />
  <SkillTag
    text="UI / UX"
    subtext="Design principles"
    icon={<FaFigma />}
    color="#A259FF"
  />
  <SkillTag
    text="Git"
    subtext="Version control"
    icon={<FaGitAlt />}
    color="#F1502F"
  />
  <SkillTag
    text="VS Code"
    subtext="Code editor"
    icon={<VscCode />}
    color="#007ACC"
  />
  <SkillTag
    text="Figma"
    subtext="Design tool"
    icon={<FaFigma />}
    color="#A259FF"
  />
  <SkillTag
    text="Node.js"
    subtext="Backend runtime"
    icon={<FaNodeJs />}
    color="#68A063"
  />
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
  className="mt-25 w-full max-w-3xl rounded-2xl bg-background/60"
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


function SkillTag({ icon, text, subtext, color }) {
  return (
    <div
      style={{ "--hover-color": color }}
      className="
        group
        flex items-center gap-4
        rounded-xl
        bg-foreground/2
        px-5 py-4
        backdrop-blur
        transition
        border border-transparent
        hover:border-[color-mix(in_srgb,var(--hover-color)_10%,transparent)]
        /* hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--hover-color)_10%,transparent),0_8px_15px_color-mix(in_srgb,var(--hover-color)_20%,transparent)] */
        hover:bg-foreground/4
        text-foreground
        hover:scale-[1.02]
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-lg
          bg-foreground/7
          text-xl
          transition
          group-hover:text-[color-mix(in_srgb,var(--hover-color)_60%,currentColor)]
          group-hover:bg-foreground/6
          text-[color-mix(in_srgb,var(--hover-color)_60%,currentColor)]
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div className="leading-tight">
        <p className="text-sm font-semibold">{text}</p>
        <p className="text-xs opacity-70">{subtext}</p>
      </div>
    </div>
  );
}
