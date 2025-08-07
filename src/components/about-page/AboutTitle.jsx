
import img from '@/public/about-img/img-1.avif';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutTitle() {
  return (
    <>
      {/* title  */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className=" text-center text-5xl lg:text-8xl  text-textPrimary"
      >
        Crafting Timeless <br /> Spaces with Style
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full mt-14"
      >
        <Image
          src={img}
          alt="img"
          title="img"
          className="w-full h-full rounded-xl"
          quality={100}
          placeholder="blur"
        />
      </motion.div>
    </>
  );
}
