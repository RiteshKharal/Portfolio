import { Josefin_Sans, Righteous, Smooch_Sans } from 'next/font/google';
import { Lilita_One } from 'next/font/google';

const AllFonts = [
    'josefin',
    'righteous',
    'smooch',
    'lilitaOne'
]


export const lilitaOne = Lilita_One({
  subsets: ['latin'], // adjust if needed
  weight: ['400'],      // default weight
  variable: '--font-lilita', // optional, if you want CSS variable
});


export const josefin = Josefin_Sans({
     subsets: ['latin'],
      weight: ['100','400','700'] 
});


const righteous = Righteous({
     subsets: ['latin'],
      weight: ['400']     
});

const smooch = Smooch_Sans({
     subsets: ['latin'],
      weight: ['100','900'] 
});