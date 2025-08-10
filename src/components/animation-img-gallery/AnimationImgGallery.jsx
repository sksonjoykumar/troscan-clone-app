'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function AnimationImgGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagePaths = [
    { id: 1, src: '/imgs/img-1.avif' },
    { id: 2, src: '/imgs/img-2.avif' },
    { id: 3, src: '/imgs/img-3.avif' },
    { id: 4, src: '/imgs/img-4.avif' },
    { id: 5, src: '/imgs/img-5.avif' },
    { id: 6, src: '/imgs/img-6.avif' },
  ];

  // Spread factors
  const horizontalSpread = isMobile ? 150 : 350;
  const verticalSpread = isMobile ? 250 : 300;

  // Initial positions (tight cluster)
  const initialPositions = [
    { x: -80, y: -80 },
    { x: 80, y: -80 },
    { x: -160, y: 0 },
    { x: 160, y: 0 },
    { x: -80, y: 80 },
    { x: 80, y: 80 },
  ];

  // Final spread positions
  const finalPositions = [
    { x: -horizontalSpread, y: -verticalSpread },
    { x: horizontalSpread, y: -verticalSpread },
    { x: 0, y: -verticalSpread - 50 },
    { x: 0, y: verticalSpread + 50 },
    { x: -horizontalSpread, y: verticalSpread },
    { x: horizontalSpread, y: verticalSpread },
  ];

  const moveProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const textProgress = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  return (
    <div className="w-full mx-auto">
      <div
        className="relative min-h-screen h-[600vh] bg-[#f8ede3]"
        ref={containerRef}
      >
        {/* Sticky container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* 6 Images */}
          {imagePaths.map((path, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                x: useTransform(
                  moveProgress,
                  [0, 1],
                  [initialPositions[i].x, finalPositions[i].x]
                ),
                y: useTransform(
                  moveProgress,
                  [0, 1],
                  [initialPositions[i].y, finalPositions[i].y]
                ),
                zIndex: 10,
              }}
            >
              <div className="w-[120px] h-[160px] sm:w-[150px] sm:h-[180px] md:w-[280px] md:h-[220px] relative shadow-xl border rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src={path.src}
                  alt={`Design ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 280px"
                />
              </div>
            </motion.div>
          ))}

          {/* Text Reveal */}
          <motion.div
            className="absolute text-center px-6 max-w-2xl mx-auto"
            style={{
              opacity: textProgress,
              scale: textProgress,
              zIndex: 20,
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 text-textPrimary leading-tight">
              Transforming spaces with style
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-textPrimary opacity-90">
              Through Troscán's exquisite design expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
