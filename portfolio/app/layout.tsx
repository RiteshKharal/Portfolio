import type { Metadata } from "next";
import "./globals.css";
// import DragonFollower from './components/MouseFollower'
import { Smooch_Sans } from 'next/font/google';

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

    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-100 text-neutral-900 antialiased">
        <header className="flex justify-between items-center px-6 py-4 text-lg font-medium">
          <div className={` ${smooch.className} font-semibold text-4xl`}>Ritesh</div>
          <nav className="flex gap-6">
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
            
          </nav>
        </header>

        {/* <DragonFollower></DragonFollower> */}

        <main>{children}</main>

        <footer className="mt-20 py-10 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Ritesh Kharal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
