import Image from 'next/image';
import SliderToggle from './components/Slider.jsx';
import ScrollDownIndicator from './components/ScrollDownIndicator.jsx';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import * as fonts from './fonts';
import { FaLocationDot } from "react-icons/fa6";

// TO Make: ADD a slight gradient follow the user's cursor for a cool effect

export default function Home() {


  return (
      
    <div className="flex flex-col items-center px-6 scroll-smooth">


      <div
  className="w-screen h-screen transition-colors duration-500 fixed top-0 left-0 pointer-events-none z-0"
  style={{
    background: `radial-gradient(
      circle at 0px 0px,
      hsl(0, 0%,100%,0.2) 0%,
      transparent 40%
    )`,
  }}
></div>



      
      <section className="mt-24 flex justify-center px-4 p-1 rounded-3xl">
  <div className="w-full max-w-3xl rounded-2xl border border-border bg-background/40 p-8 shadow-md flex flex-col gap-4">

    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className={`text-2xl md:text-[2rem] font-bold ${fonts.lilitaOne.className} font-lilita`}>
          Ritesh Kharal
        </h1>

        <div className="mt-2 flex items-center gap-2 text-muted-foreground text-l font-normal">
          <span className="text-lg"><FaLocationDot /></span>
          <span className="text-lg ">Lumbini, Nepal</span>
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

    <p className="text-base md:text-lg leading-relaxed text-foreground/90">
      I am a 15-year-old full-stack web developer, Currently learning and improving every day. 
    </p>
  </div>
</section>


  <SliderToggle></SliderToggle>


      <ScrollDownIndicator />
    </div>

  );
}
