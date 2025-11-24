import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Caveat } from 'next/font/google';
import './globals.css';
import  Navbar  from './components/Navbar';
import Footer  from './components/Footer';


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OpenCount - Visitor Widget',
  description: 'Privacy-first, open-source visitor analytics widget',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth dark ${inter.variable} ${spaceGrotesk.variable} ${caveat.variable}`}>
      <body className="bg-dark-950 text-gray-100 antialiased">
           <Navbar/>
        {children}
         <Footer />
      </body>
    </html>
  );
}

