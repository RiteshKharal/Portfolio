import Animatedbtn1 from './components/AnimatedBtn.jsx'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ManageProjectCardsShown from './components/ProjectsCard.jsx';
// import PortfolioImage from 'app/media/Portfolioimg.png'

export default function Home() {


  return (
      
    <div className="flex flex-col items-center px-6 scroll-smooth">
      
      {/* HERO */}
      <section className="mt-22 text-center max-w-2xl h-140 flex flex-col justify-center items-center mx-auto">
  <h1 className={` text-5xl font-bold mb-3 cursor-pointer`} title='[GOD]' >Ritesh Kharal.</h1>

  <p className="text-lg opacity-80 mb-8 ">
    Yo! I chase whatever I&apos;m curious about, and coding might be at the top of that list.
  </p>

  <div className="relative top-[140px] flex gap-20 justify-center text-2xl">

        <Animatedbtn1 btntext='My Skills' sendto={'#skills'}/>
        <Animatedbtn1 btntext='My Projects' sendto={'#projects'}/>
        <Animatedbtn1 btntext='About Me' sendto={'#about'}/>

        <p className='text-2.5 translate-x-[620px] translate-y-36 inline-block absolute opacity-80 font-mono cursor-pointer' title='Barely rememberd the theme But Liked the blurry pic in my head'>Inspired By a video online</p>

  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="mt-32 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="opacity-80 leading-relaxed">
          I&apos;m Ritesh, a curiosity-driven developer exploring web and mobile technologies.
          I enjoy building clean UI, learning new frameworks, and turning ideas into working projects.
          I&apos;m currently in the grind to become a full-stack developer.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-32 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

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
              <SkillTag text="UI/UX Basics" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Back-End</h3>
            <p className="opacity-80">
              Experience creating APIs, authentication systems, and server-side logic.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <SkillTag text="Django" />
              <SkillTag text="REST APIs" />
              <SkillTag text="Node.js (basic)" />
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
      </section>

      {/* PROJECTS */}
 <section id="projects" className="mt-32 max-w-3xl w-full">
  <h2 className="text-3xl font-bold mb-10">Projects</h2>

  {/* Your projects array */}
  

  <div className="grid grid-cols-2 gap-10">
    
      <ManageProjectCardsShown></ManageProjectCardsShown>

  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="mt-32 max-w-3xl w-full mb-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <form className="flex flex-col gap-4 max-w-md">
          <input className="border p-3 rounded-lg" placeholder="First name" />
          <input className="border p-3 rounded-lg" placeholder="Last name" />
          <input className="border p-3 rounded-lg" placeholder="Email" />
          <textarea className="border p-3 rounded-lg" rows={4} placeholder="Message"></textarea>
          <a className="bg-black text-white py-3 rounded-lg hover:opacity-80 transition text-center" href='mailto@kharalritesh@gmail.com'>
            Submit
          </a>
        </form>

        <section className='float-right translate-y-[-30px] gap-5 flex m-[-3%] font-bold text-2xl '>
          <a href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/" className='hover:text-blue-600' target='_blank'><FaLinkedin/></a>
          <a href="" className='underline hover:text-blue-800 underline-offset-2 '><FaFacebookSquare/></a>
          <a href="" className='underline underline-offset-2 hover:text-red-900 '><FaYoutube/></a>

        </section>
      </section>

    </div>

  );
}

function SkillTag({ text }: { text: string }) {
  return (
    <span className="px-3 py-1 text-sm bg-neutral-200 rounded-xl shadow hover:opacity-60 cursor-pointer">
      {text}
    </span>
  );
}

