'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.7, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        top: 0,
        transformOrigin: 'center',
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 top-0 overflow-hidden will-change-transform "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export default StickyImage;
