import { Archivo } from 'next/font/google';
import HeroSection from '../HeroSection';

// Font
const archivo = Archivo({ subsets: ['latin'] });

export default function Background() {
  return (
    <main className={archivo.className}>
      <div className="relative w-full  ">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-70"
          style={{ backgroundImage: `url('/bg-img/bg-img.avif')` }}
        />

        {/* Gradient overlay (bottom to top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#9e4c166a] to-transparent" />

        {/* Content */}
        <div className="relative z-10 min-h-screen ">
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
