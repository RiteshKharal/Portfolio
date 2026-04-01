import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeToggle from "./components/ThemeToggle.tsx";
import BackgroundAnimation from "./components/BackgroundAnimation.jsx";
import { Smooch_Sans } from "next/font/google";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Loader from "./components/Loading.jsx";
import MouseFollower from "./components/MouseFollower.tsx";
import NavigationDropDown from "./components/NavigationDropDown.tsx";

const smooch = Smooch_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: {
    default: "Ritesh Kharal | Full-Stack Web Developer",
    template: "%s | Ritesh Kharal",
  },
  description:
    "Portfolio of Ritesh Kharal, a full-stack web developer from Lumbini, Nepal. Projects, skills, and contact info.",
  keywords: [
    "Ritesh Kharal",
    "portfolio",
    "full-stack web developer",
    "web developer",
    "frontend developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "UI/UX",
    "Figma",
    "Git",
    "Portfolio Website",
    "TudorTODO",
    "CSSStorage",
    "Lumbini",
    "Nepal",
  ],
  authors: [{ name: "Ritesh Kharal", url: "https://riteshkharal.vercel.app" }],
  creator: "Ritesh Kharal",
  publisher: "Ritesh Kharal",
  metadataBase: new URL("https://riteshkharal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ritesh Kharal | Full-Stack Web Developer",
    description:
      "Portfolio of Ritesh Kharal, a full-stack web developer from Lumbini, Nepal. Projects, skills, and contact info.",
    url: "https://riteshkharal.vercel.app",
    siteName: "Ritesh Kharal",
    images: [
      {
        url: "/Portfolioimg.png",
        alt: "Ritesh Kharal portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh Kharal | Full-Stack Web Developer",
    description:
      "Portfolio of Ritesh Kharal, a full-stack web developer from Lumbini, Nepal. Projects, skills, and contact info.",
    images: ["/Portfolioimg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/PortfolioICON.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head></head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden">
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <BackgroundAnimation />
          <MouseFollower/>

          <header className="flex pt-5 text-lg font-medium pl-10 pr-10">
            <nav className="flex gap-6 items-center justify-between w-full ">
              <div></div>
              <div className="flex flex-row text-center justify-center gap-10">
                <div>
                  <NavigationDropDown />
                </div>

                <div className="flex items-center">
                  <ThemeToggle />
                </div>
              </div>
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
