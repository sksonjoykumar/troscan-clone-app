'use client';

import aboutImg from '@/public/about-us/about-us.avif';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="py-[130px] px-14 bg-[#F8EDE3]">
      <div className="flex flex-col lg:flex-row gap-10 2xl:gap-36 xl:h-[600px]">
        {/* Text content */}
        <div className="flex gap-6 flex-col justify-between w-11/12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center gap-1">
              <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
              <h5 className="text-[14px] text-textPrimary font-semibold">
                About us
              </h5>
            </div>
            <h1 className="mt-5 text-4xl xl:text-6xl font-semibold text-textPrimary">
              Where Spaces <br /> Inspire, and Design <br /> Comes Alive
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-base text-hoverColor font-semibold">
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
            </p>
            <p className="text-base text-hoverColor font-semibold mt-10">
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you're looking to reimagine your living
              room.
            </p>
            <button
              className="mt-4 bg-textPrimary text-white text-md font-semibold px-6 py-3  rounded-lg hover:bg-hoverColor transition-all duration-300"
              type="button"
            >
              <Link href="/about">More About us</Link>
            </button>
          </motion.div>
        </div>

        {/* Scroll-triggered animation on image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full h-full"
        >
          <Image
            className="w-full h-full object-cover rounded-lg shadow-md border"
            src={aboutImg}
            alt="about us"
            quality={100}
            placeholder="blur"
          />
        </motion.div>
      </div>
    </section>
  );
}
