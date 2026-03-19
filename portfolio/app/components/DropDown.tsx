
"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Ubuntu, Nunito } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '900'],
  variable: '--font-nunito',
});

type CompoenentTypes = {
  title: string;
  options: {
    OptionName: string,
    OptionCallBack: ()=> void ,
  }[];
};

// interface OptionTypes{
  
// }

export default function Component({ title, options }: CompoenentTypes) {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setFilterOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-fit h-fit">
      <div
        className={`
        ${ubuntu.className} flex flex-wrap gap-4 rounded-2xl p-2
        overflow-visible z-10
      `}
      >
        <div ref={containerRef} className="relative ">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`
            ${nunito.className}
            flex items-center gap-2
            px-4 py-2 rounded-lg
            border border-[hsla(240_5.9%_47%/0.4)] dark:border-[hsla(240_3.7%_20.9%/0.4)]
            bg-[hsla(0_0%_100%/0.6)] dark:bg-[hsla(240_10%_3%/0.6)]
            hover:bg-[hsla(240_10%_3.9%/0.1)] dark:hover:bg-[hsla(0_0%_98%/0.1)]
            transition text-sm
          `}
          >
            <span
              className={
                filterOpen
                  ? "text-[hsla(240_10%_3.9%/0.8)] dark:text-[hsla(0_0%_98%/0.8)]"
                  : "text-[hsla(240_10%_3.9%/0.6)] dark:text-[hsla(0_0%_98%/0.6)]"
              }
            >
              <span className="text-[hsla(240_10%_3.9%/0.9)] dark:text-[hsla(0_0%_98%/0.9)] font-bold mr-3">
                {title}
              </span>
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""} text-[hsla(240_10%_3.9%/0.8)] dark:text-[hsla(0_0%_98%/0.8)]`}
            />
          </button>

          {filterOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-[hsla(0_0%_100%/0.9)] dark:bg-[hsla(240_10%_3%/0.9)] rounded-xl shadow-md z-99">
              <ul className="py-1 text-sm text-[hsla(240_10%_3.9%/1)] dark:text-[hsla(0_0%_98%/1)] text-center p-1">
                {options.map((opt, i) => {
                  return (
                    <li
                      className="px-4 py-2 hover:bg-[hsla(240_10%_3.9%/0.1)] dark:hover:bg-[hsla(0_0%_98%/0.1)] cursor-pointer transition"
                      onClick={() => {
                        opt.OptionCallBack();
                        setFilterOpen(false);
                      }}
                      key={i}
                      
                    >
                      {opt.OptionName}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
