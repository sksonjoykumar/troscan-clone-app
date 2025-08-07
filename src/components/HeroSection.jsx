'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-[89vh]  flex items-center justify-center overflow-hidden">
        {/* Gradient overlay (bottom to top) */}
        <div className="absolute  inset-0 bg-gradient-to-t from-[#a15f3434] to-transparent" />
        {/* Gradient overlay (bottom to top) */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#6c53423b] to-transparent"
          // style={{ backgroundImage: `url('/bg-img/bg-img.avif')` }}
        />
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-white text-center p-8 "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[48px] md:text-[60px] xl:text-[84px] leading-tight font-semibold"
          >
            Timeless Comfort & <br /> Endless Luxury
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 gap-4 flex flex-col md:flex-row items-center justify-center"
          >
            <Link
              href={'/about'}
              className="bg-white w-full md:w-auto text-textPrimary text-md font-semibold  cursor-pointer px-6 py-3  rounded-lg hover:bg-[#f5e9de] transition-all duration-300"
            >
              Our Vision
            </Link>
            <Link
              href={'/expertise'}
              className="bg-transparent w-full md:w-auto hover:bg-white border hover:text-textPrimary text-white text-md font-semibold  cursor-pointer px-6 py-3  rounded-lg  transition-all duration-300"
              type="button"
            >
              Explore Expertise
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
