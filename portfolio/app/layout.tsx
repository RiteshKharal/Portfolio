import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeToggle from './components/ThemeToggle.tsx';
import FallingFlames from './components/BackgroundAnimation.jsx';
import { Smooch_Sans } from 'next/font/google';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Loader from "./components/Loading.jsx";
import MouseFollower from "./components/MouseFollower.tsx";

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
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >

          <FallingFlames />
          <MouseFollower />


          <header className="flex justify-between items-center px-6 py-4 text-lg font-medium">
            <a className={` ${smooch.className} font-semibold text-4xl text-primary`} href=""></a>
            <nav className="flex gap-6 items-center">
              <ThemeToggle ></ThemeToggle>

            </nav>

          </header>

          <main>
            <Loader></Loader>
            
            {children}

            </main>
        </NextThemesProvider>
      </body>
    </html>
  );
}
