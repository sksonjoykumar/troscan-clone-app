import img2 from '@/public/about-img/img-2.avif';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurApproach() {
  return (
    <>
      {/* Our Approach */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full mt-14"
      >
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
                  Our Approach
                </h5>
              </div>
              <h1 className="mt-5 text-4xl xl:text-6xl text-textPrimary">
                A Vision Shaped <br /> by Elegance and <br /> Expertise
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-base text-hoverColor font-semibold">
                We believe every space should tell a story that reflects its
                unique personality and the people who inhabit it.
              </p>
              <p className="text-base text-hoverColor font-semibold mt-10">
                With a thoughtful and intentional approach, we design spaces
                that exude balance, harmony, and authenticity. Our process is
                collaborative and meticulous, grounded in the philosophy that
                true beauty lies in the subtle details that make a space feel
                like home.
              </p>
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
              className="w-full h-full object-cover rounded-xl shadow-md border"
              src={img2}
              alt="img-2"
              quality={100}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
