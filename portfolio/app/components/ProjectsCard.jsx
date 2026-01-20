"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { useState } from "react";

// Global Josefin Sans font
export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
});

// Sample projects array
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

export function ProjectCard({ title, description, image, tech, live, github }) {
  return (
    <a
      href={live || "#"}
      className={`w-full max-w-xs sm:max-w-sm border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-3xl transition overflow-hidden group relative ${josefin.className}`}
    >
      {/* Image wrapper */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 p-0 group-hover:p-2 transition-all duration-300">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>

        <div className="absolute inset-0 bg-background/50 pointer-events-none transition duration-300 group-hover:bg-background/70" />

        {/* Content inside image */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300 group-hover:translate-y-[-5px] group-hover:scale-105">
          <h2 className="text-xl font-semibold text-foreground mb-1 transition-all duration-300 group-hover:text-2xl">
            {title}
          </h2>

          <p className="text-foreground/80 text-sm mb-3 transition-all duration-300 group-hover:text-base">
            {description}
          </p>

          <div className="mb-3 flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-background/10 text-foreground text-xs rounded-md border border-white/20 backdrop-blur transition-all duration-300 group-hover:scale-110"
              >
                {item}
              </span>
            ))}
          </div>

          <span className="inline-block mt-2 text-primary font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            ➡️ Learn More!
          </span>
        </div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  live: PropTypes.string,
  github: PropTypes.string,
};

export default function ManageProjectCardsShown() {
  const [showTill, setShowTill] = useState(4);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {ProjectsDetails.slice(0, showTill).map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          description={project.description}
          image={project.image}
          tech={project.tech}
          live={project.live}
          github={project.github}
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
  );
}
