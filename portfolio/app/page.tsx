import Animatedbtn1 from './components/AnimatedBtn.jsx'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ManageProjectCardsShown from './components/ProjectsCard.jsx';
// import PortfolioImage from 'app/media/Portfolioimg.png'
import Image from 'next/image.js';

export default function Home() {


  return (
      
    <div className="flex flex-col items-center px-6 scroll-smooth">
      
      {/* HERO */}
      <section className="mt-22 text-center max-w-2xl h-140 flex flex-col justify-center items-center mx-auto">
  <h1 className={` text-xl font-bold mb-3 cursor-pointer md:text-5xl`} title='[GOD]' >Ritesh Kharal.</h1>

  <Image src={'/BackgroundImage.jpg'} alt='PortolioImage' width={500} height={500} className='absolute rounded-full -rotate-12 opacity-10 bg-blend-color select-none pointer-events-none'></Image>   

  <p className="text-lg opacity-80 mb-8 w-[50%] md:w-full">
    Yo! I like what i like.
  </p>

  <div className="relative top-[115px] flex gap-20 justify-center text-2xl flex-col md:flex-row">

        <Animatedbtn1 btntext='My Skills' sendto={'#skills'}/>
        <Animatedbtn1 btntext='My Projects' sendto={'#projects'}/>
        <Animatedbtn1 btntext='About Me' sendto={'#about'}/>

  </div>

        <p className='text-2.5 translate-y-50 block opacity-0 font-mono cursor-pointer md:opacity-80' title='Barely remembered the theme But Liked the blurry pic in my head'>Inspired From a video online</p>

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
              {/* <SkillTag text="Django" /> */}
              {/* <SkillTag text="REST APIs" /> */}
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
  

  <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
    
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
          <a className="bg-black text-white py-3 rounded-lg hover:opacity-80 transition text-center" href='mailto:kharalritesh@gmail.com'>
            Submit
          </a>
        </form>

        <section className='flex gap-5 font-bold text-xl -translate-y-10 justify-center md:justify-start md:translate-x-140 m-15 md:m-0 w-fit'>
          <a href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/" className='hover:bg-blue-200 bg-gray-300 p-3 rounded-full' target='_blank'><FaLinkedin/></a>
          <a href="" className=' hover:bg-blue-300 bg-gray-300 p-3 rounded-full'><FaFacebookSquare/></a>
          <a href="" className=' hover:bg-red-900 bg-gray-300 p-3 rounded-full '><FaYoutube/></a>

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

