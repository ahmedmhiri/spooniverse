import Footer from './footer';
import './globals.css';
import Header from './Header';
import { Playfair_Display, Dancing_Script, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'], variable: '--font-playfair' });
const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400'], variable: '--font-dancing' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Spooniverse',
  description: 'Explore global recipes by country',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
      <Footer/>
    </html>
  );
}
