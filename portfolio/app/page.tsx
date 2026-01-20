// import Animatedbtn1 from './components/AnimatedBtn.jsx'
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import ManageProjectCardsShown from './components/ProjectsCard.jsx';
import Image from 'next/image';
import { Josefin_Sans, Righteous, Smooch_Sans } from 'next/font/google';
import SliderToggle from './components/Slider.jsx';
import ScrollDownIndicator from './components/ScrollDownIndicator.jsx';

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['100','400','700'] });
// const righteous = Righteous({ subsets: ['latin'], weight: ['400'] });
// const smooch = Smooch_Sans({ subsets: ['latin'], weight: ['100','900'] });

export default function Home() {


  return (
      
    <div className="flex flex-col items-center px-6 scroll-smooth">
      
      {/* HERO */}
      <section className="mt-22 text-center max-w-2xl h-140 flex flex-col justify-center items-center mx-auto">
  <a className={` text-xl font-bold mb-3 cursor-pointer md:text-5xl ${josefin.className}`} title='[GOD]' href='#about'>Ritesh Kharal.</a>

  {/* <Image src={'/BackgroundImage.jpg'} alt='Image' width={500} height={500} className='absolute rounded-full -rotate-12 opacity-10 bg-blend-color select-none pointer-events-none' loading="eager"></Image>    */}

  <p className="text-lg opacity-80 mb-8 w-[50%] md:w-full">
    📍Lumbini, Nepal
  </p>

  <p className="opacity-80 leading-relaxed top-5 text-[1.2rem]">
          I&apos;m Ritesh, a developer currently exploring web and mobile technologies.
          I enjoy building clean UI, learning new frameworks, and turning ideas into working projects.
          I&apos;m currently in the grind to become a full-stack developer.
        </p>

  <div className="relative top-45 flex gap-20 justify-center text-2xl flex-col md:flex-row">

        {/* <Animatedbtn1 btntext='My Skills' sendto={'#skills'}/> */}
        {/* <Animatedbtn1 btntext='My Projects' sendto={'#projects'}/> */}
        {/* <Animatedbtn1 btntext='About Me' sendto={'#about'}/> */}

  </div>

  </section>
{/*    

      
      <section id="about" className="mt-32 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        
      </section>  */}
      

      <section
  id="skills"
  className="mt-32 w-full max-w-3xl rounded-2xl bg-background/60 backdrop-blur-md"
>


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
      </section>

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

function SkillTag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 text-sm bg-background rounded-xl shadow hover:opacity-60 cursor-pointer ">
      {text}
    </span>
  );
}

