"use client";

import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';

// Sample projects array
const ProjectsDetails = [
  {
    title: "Portfolio Website",
    description: "A clean minimal portfolio with modern UI.",
    image: '/Portfolioimg.png',
    tech: ['React', 'Tailwind', 'next.js'],
    live: "https://riteshkharal.vercel.app/",
    github: "https://github.com/RiteshKharal/Portfolio-Files",
  },
];

export function ProjectCard({ title, description, image, tech, live, github }) {
  return (
    <div className="max-w-sm border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition grid gap-4 min-[90vw]:max-w-full">
      <div className="w-full h-full overflow-hidden rounded-lg mb-4">
        <Image 
          src={image} 
          alt={title} 
          width={800} 
          height={800} 
          className="w-full h-full object-cover" 
        />
      </div>

      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700">Tech Used:</p>
        <div className="flex gap-2 mt-1 flex-wrap">
          {tech.map((item, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <a
          href={live}
          target="_blank"
          className="w-full text-center py-2 border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition"
        >
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          className="w-full text-center py-2 border border-gray-800 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
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

// Default export for the grid manager
export default function ManageProjectCardsShown() {
  const [showTill, setShowTill] = useState(4);

  return (
    <>
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
          className="mt-7 px-4 py-2 bg-black text-white rounded-lg w-100 ml-47 cursor-pointer hover:opacity-80"
        >
          Show More
        </button>
      )}
      </>
  );
  
}
