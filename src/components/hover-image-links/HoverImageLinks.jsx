'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { links } from './links';
import RightText from './RightText';

export const HoverImageLinks = () => {
  const [hoveredImage, setHoveredImage] = useState(links[0].imgSrc);

  return (
    <div className=" pt-44">
      {/*  RightText  Container */}
      <RightText />

      <section className="py-16">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left image display */}
          <motion.div
            key={hoveredImage}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="w-full h-full "
          >
            <img
              src={hoveredImage}
              alt="Hovered preview"
              className="w-full h-[450px] xl:h-[600px] rounded-lg object-cover  "
            />
          </motion.div>

          {/* Right text links */}
          <div className="flex flex-col">
            {links.map((link, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                key={idx}
                onMouseEnter={() => setHoveredImage(link.imgSrc)}
                className="group flex items-center justify-between border-b-2 transition-colors duration-500 border-[#b3836a]"
              >
                {/* Outer container with pseudo-background */}
                <div className="relative w-full overflow-hidden rounded-sm">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-textPrimary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-in-out z-0" />

                  {/* Foreground content */}
                  <div className="relative z-10 flex gap-4 items-start w-full py-2.5 px-1 group-hover:px-4 transition-all duration-300">
                    <p className="block text-base text-textPrimary group-hover:text-white transition-colors duration-300">
                      {link.id}
                    </p>
                    <h2 className="block text-xl lg:text-[1.6rem] text-textPrimary group-hover:text-white transition-colors duration-300">
                      {link.heading}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
