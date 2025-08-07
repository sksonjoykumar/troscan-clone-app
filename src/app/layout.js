import { Archivo } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata = {
  title: 'Troscán',
  description: 'Troscán App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {/* Navbar Component */}
        <Navbar />
        {children}
        {/* Footer Component*/}
        <Footer />
      </body>
    </html>
  );
}
