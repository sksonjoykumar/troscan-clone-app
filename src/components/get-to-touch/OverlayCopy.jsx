'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const OverlayCopy = ({ heading }) => {
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
      className=" absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center  "
    >
      <div className="bg-[#F8EDE3] p-10 px-[6rem] max-w-2xl h-auto md:h-[400px] rounded-md flex  items-center justify-center flex-col">
        <h1 className=" text-textPrimary text-2xl md:text-3xl text-center">
          {heading}{' '}
        </h1>

        <Link
          href="/contact"
          className="mt-10 bg-textPrimary text-white text-md font-semibold px-6 py-3 m-1.5 rounded-lg hover:bg-hoverColor transition-all duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
};

export default OverlayCopy;
