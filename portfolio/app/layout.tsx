import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeToggle from './components/ThemeToggle.tsx';
import FallingFlames from './components/BackgroundAnimation.jsx';
import { Smooch_Sans } from 'next/font/google';
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Loader from "./components/Loading.jsx";

const smooch = Smooch_Sans({
  subsets:['latin'],
  weight:['500'],
})


export const metadata: Metadata = {
  title: "Ritesh Kharal",
  description: "Portfolio of Ritesh Kharal — Developer, Learner, Builder",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased ">
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <FallingFlames />
          <header className="flex justify-between items-center px-6 py-4 text-lg font-medium">
            <a className={` ${smooch.className} font-semibold text-4xl text-primary`} href=""></a>
            <nav className="flex gap-6 margin-19px  items-center">
              <ThemeToggle ></ThemeToggle>

            </nav>

          </header>

          <main>
            <Loader></Loader>
            
            {children}
            
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


            </main>

          <footer className="mt-20 py-10 text-center text-sm opacity-70 justify-center">

            

            © {new Date().getFullYear()} Ritesh Kharal. All rights reserved.

            
          </footer>
        </NextThemesProvider>
      </body>
    </html>
  );
}
