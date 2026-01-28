"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaGithub,FaArrowRight } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
// Global Josefin Sans font
export const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin",
});

// Sample projects array


// ---------------- Project Card ----------------

export function ProjectCard({ title, description, image, tech, onOpen }) {
  return (
    <button
      type="button"
      className={`w-full max-w-xs sm:max-w-sm border border-white/20 bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-xl shadow-2xl hover:shadow-3xl transition overflow-hidden group relative cursor-pointer ${josefin.className}`}
      onClick={onOpen}
    >
      <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 p-0 group-hover:p-2 transition-all duration-300">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>

        <div className="absolute inset-0 bg-background/50 pointer-events-none transition duration-300 group-hover:bg-background/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-5 transition-all duration-300 group-hover:translate-y-[-5px] group-hover:scale-105">
          <h2 className="text-2xl font-semibold text-foreground mb-1 transition-all duration-300 group-hover:text-2xl">
            {title}
          </h2>
          <p className="text-foreground/80 text-l mb-3 transition-all duration-300 group-hover:text-base">
            {description}
          </p>
          <div className="mb-3 flex flex-wrap justify-center gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-background/10 text-foreground text-xs rounded-md border border-white/20 backdrop-blur transition-all duration-300 group-hover:scale-110"
              >
                {item}
              </span>
            ))}
          </div>
          <span
  className="
    mt-2
    text-foreground font-semibold

    flex items-center gap-2

    transform translate-y-4 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100

    transition-all duration-300 ease-out
  "
>
  View
  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
</span>
        </div>
      </div>
    </button>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  onOpen: PropTypes.func,
};

// ---------------- Projects Modal ----------------


export function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // ESC to close with animation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <div
      onClick={handleClose}
      className={`
        fixed inset-0 z-50
        flex items-center justify-center

        bg-background/70
        backdrop-blur-sm

        transition-all duration-300 ease-out
        ${mounted && !closing ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-[80vw] max-w-5xl
          max-h-[90vh]
          rounded-3xl
          shadow-2xl
          flex flex-col
          overflow-scroll

          bg-card/90
          backdrop-blur-xl
          border border-border

          transform transition-all duration-300 ease-out
          ${
            mounted && !closing
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }
        `}
      >

        {/* Header */}
        <div className="
          flex items-center gap-3
          px-6 py-4
          text-foreground/80
          hover:text-slate-950
          hover:text-[1.05rem]
          transition-all duration-300
        ">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 transition cursor-pointer font-medium"
          >
            <FaArrowLeft  />
            Back
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-12 py-8 gap-12">

          {/* Image */}
          <div className="
            relative w-[50%] max-w-4xl
            h-[40vh]
            rounded-2xl
            flex items-center justify-center
            overflow-hidden
            border border-border
            shadow-xl
            bg-zinc-100 dark:bg-zinc-800
            transition-transform duration-500
            hover:scale-[1.02]
          ">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            ) : (
              <span className="text-2xl font-serif text-gray-500 dark:text-gray-400">
                IMAGE
              </span>
            )}
          </div>

          <div className="flex gap-8">

                        {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-8 py-3
                    rounded-xl
                    bg-black text-white
                    dark:bg-white dark:text-black
                    font-semibold
                    shadow-lg
                    transition-all
                    hover:-translate-y-1 hover:shadow-xl hover:opacity-90
                    active:scale-95
                  "
                >
                  <HiOutlineExternalLink />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-8 py-3
                    rounded-xl
                    bg-zinc-200 dark:bg-zinc-800
                    text-gray-900 dark:text-white
                    font-medium
                    shadow-md
                    transition-all
                    hover:-translate-y-1 hover:shadow-lg hover:opacity-90
                    active:scale-95
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              )}

          </div>

          <div className="text-center space-y-6 text-foreground leading-relaxed w-[70%] text-lg">
              {project.LongDesc}
          </div>
        </div>
      </div>
    </div>
  );
}


ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func,
};