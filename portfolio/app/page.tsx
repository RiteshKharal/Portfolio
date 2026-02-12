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

      


      
          <section className="mt-24 flex justify-center rounded-3xl">
      <div className="w-full max-w-3xl rounded-2xl border border-border/80 bg-background/40 p-6 shadow-md flex flex-col gap-4">

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
              className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition hover:scale-110"
            >
              <IoIosMail />
            </a>
            <a
              href="https://github.com/RiteshKharal"
              target="_blank"
              className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/"
              target="_blank"
              className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition hover:scale-110"
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


<a className="mt-10 mb-10 bg-foreground/6 p-4 rounded-md text-[14px] w-max transition hover:bg-foreground/10 absolute top-5 z-999 backdrop-blur-2xl font-medium font-mono text-foreground " href="./Game" >
    🎮 Enter the fun zone
</a>


        <SliderToggle></SliderToggle>


      <ScrollDownIndicator />


      <section
              className="
                fixed bottom-5 right-5
                flex flex-col gap-2
                font-bold text-30
                z-50 hover:text-xl
              "
            >
              <a
                href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/"
                target="_blank"
                className="
                bg-background
                  shadow-2xl p-3 rounded-full
                  hover:bg-[#0A66C2] hover:text-white
                  transition-all
                   hover:drop-shadow-[0_0_21px_#0A66C2]
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:kharalritesh@gmail.com"
                target="_blank"
                className="
                  bg-background p-3 rounded-full
                  hover:bg-[#D14836] hover:text-white
                  hover:drop-shadow-[0_0_21px_red]
                  transition-all
                "
              >
                <IoIosMail />
              </a>  

              <a
                href="https://github.com/RiteshKharal"
                target="_blank"
                className="
                  bg-background p-3 rounded-full
                  hover:bg-[#6ec497] hover:text-white
                  transition-all
                  hover:drop-shadow-[0_0_21px_#6ec497]
                "
              >
                <FaGithub />
              </a>

              
      </section>
            
    </div>

  );
}
