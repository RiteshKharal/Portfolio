'use client';
import { useState } from 'react';
// import Animatedbtn1 from './components/AnimatedBtn.jsx'
import {ProjectCard} from './components/ProjectsCard.jsx';
import Image from 'next/image';
import { Josefin_Sans, Righteous, Smooch_Sans } from 'next/font/google';
import SliderToggle from './components/Slider.jsx';
import ScrollDownIndicator from './components/ScrollDownIndicator.jsx';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ProjectModal } from './components/ProjectsCard.jsx';
// import { ProjectsModal } from './components/ProjectsCard.jsx';
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['100','400','700'] });
// const righteous = Righteous({ subsets: ['latin'], weight: ['400'] });
// const smooch = Smooch_Sans({ subsets: ['latin'], weight: ['100','900'] });


export default function Home() {
  
  const [openProject, setOpenProject] = useState(null);


  return (
      
    <div className="flex flex-col items-center px-6 scroll-smooth">

      {openProject && (
        <ProjectModal
          project={openProject}
          onClose={() => setOpenProject(null)}
        />
      )}
      
      {/* HERO */}
      <section className="mt-24 flex justify-center px-4 p-1 rounded-3xl">
  <div className="w-full max-w-3xl rounded-2xl border border-border bg-background/40 backdrop-blur-xl p-6 shadow-md flex flex-col gap-4">

    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className={`text-3xl md:text-4xl font-bold ${josefin.className}`}>
          Ritesh Kharal
        </h1>

        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
          <span className="text-lg">📍</span>
          <span className="text-lg">Lumbini, Nepal</span>
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href="mailto:kharalritesh@email.com"
          className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
        >
          <IoIosMail />
        </a>
        <a
          href="https://github.com/RiteshKharal"
          target="_blank"
          className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/"
          target="_blank"
          className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* Description */}
    <p className="text-base md:text-lg leading-relaxed text-foreground/90">
      I am a 15-year-old full-stack web developer, Currently learning and improving every day. 
    </p>
  </div>
</section>




{/*    

      



      <section id="about" className="mt-32 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        
      </section>  */}
      

      {/* <section
  id="skills"
  className="mt-25 w-full max-w-3xl rounded-2xl bg-background/60 backdrop-blur-md"
> */}


  {/* <div className="mb-10 flex rounded-xl bg-muted p-1 text-center just-space-between">
    <button className="flex-1 rounded-lg bg-background py-2 text-xl font-semibold tracking-tight shadow-sm transition">
      Skills
    </button>

    <button className="flex-1 rounded-lg py-2 text-xl font-semibold text-muted-foreground transition hover:text-foreground">
      Projects
    </button>
  </div> */}

  <SliderToggle></SliderToggle>







        {/* <h2 className="text-3xl font-bold mb-6">Skills</h2>

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
        </div> */}
      {/* </section> */}

      {/* PROJECTS */}
 {/* <section id="projects" className="mt-32 max-w-3xl w-full">
  <h2 className="text-3xl font-bold mb-10">Projects</h2>


  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
    
      <ManageProjectCardsShown></ManageProjectCardsShown>

  </div>
</section> */}
      <ScrollDownIndicator />
    </div>

  );
}

