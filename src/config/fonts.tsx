import { Archivo_Black, Bebas_Neue, Roboto, Montserrat, Cabin_Sketch } from 'next/font/google'

// din-2014 and proxima-nova(montserrat); get a licence

export const cabinSketch = Cabin_Sketch({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin-sketch'
})

export const archivoBlack = Archivo_Black({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-black'
})

export const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue'
})

export const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})
