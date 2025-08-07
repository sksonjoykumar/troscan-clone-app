'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const OverlayCopy = ({ heading, serial, text }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white text-center"
    >
      <p className="text-sm tracking-widest mb-2 md:mb-4">{serial}</p>
      <h1 className="text-4xl font-semibold md:text-6xl">{heading} </h1>
      <p className="text-lg ">{text}</p>
      <Link
        href="/projects"
        className="mt-5 bg-white text-textPrimary text-md font-semibold  cursor-pointer px-6 py-3  rounded-lg hover:bg-[#f5e9de] transition-all duration-300"
      >
        View Project
      </Link>
    </motion.div>
  );
};

export default OverlayCopy;
