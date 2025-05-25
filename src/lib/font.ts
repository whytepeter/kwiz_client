import {
    Inter,
    Poppins,
    Roboto_Slab,
    Open_Sans,
    Playfair_Display,
    Lora as LoraFont,
    Montserrat,
    Orbitron,
} from 'next/font/google';

// Initialize each font as individual constants
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins'
});

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-roboto-slab'
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800',],
    variable: '--font-open-sans'
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-playfair'
});

const lora = LoraFont({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-lora'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    variable: '--font-montserrat'
});

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-orbitron'
});

// Now combine them into an export object
export const fonts = {
    Inter: inter,
    Poppins: poppins,
    'Roboto Slab': robotoSlab,
    'Open Sans': openSans,
    'Playfair Display': playfair,
    Lora: lora,
    Montserrat: montserrat,
    Orbitron: orbitron,
};