/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Josefin_Sans,
  Righteous,
  Smooch_Sans,
  Kalam,
  Roboto,
  Open_Sans,
  Lato,
  Poppins,
  Montserrat,
  Merriweather,
  Inconsolata,
  Oswald,
  Source_Sans_3,
  Ubuntu,
  Playfair_Display,
  Nunito,
  Quicksand,
  PT_Sans,
  Fira_Sans,
  Comfortaa,
  Cabin,
  Inter,
  Exo_2,
  Merriweather_Sans,
  Red_Hat_Display,
  Work_Sans,
  Space_Mono,
  Pacifico,
  Indie_Flower
} from 'next/font/google';

import { Lilita_One } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";
import { Major_Mono_Display } from 'next/font/google';


export const majorMono = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-major-mono',
});

export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lilita',
});

export const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
});

export const smooch = Smooch_Sans({
  subsets: ['latin'],
  weight: ['100', '900'],
});

export const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kalam',
});

// Additional Fonts
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-roboto',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '600', '700', '900'],
  variable: '--font-poppins',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700', '900'],
  variable: '--font-montserrat',
});

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inconsolata',
});

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-oswald',
});

export const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-source-sans-pro',
});

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
});

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700', '900'],
  variable: '--font-nunito',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-quicksand',
});

export const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira-sans',
});

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-comfortaa',
});

export const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '700', '900'],
  variable: '--font-inter',
});

export const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
  variable: '--font-exo-2',
});

export const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather-sans',
});

export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-red-hat',
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-work-sans',
});

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
});

export const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-indie-flower',
});