'use client';
import { motion } from 'framer-motion';
import Form from './Form';

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#F8EDE3]">
        <div className="px-14 py-44">
          {/* title  */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className=" text-center text-5xl lg:text-8xl  text-textPrimary"
          >
            Let's Bring Your <br /> Vision to Life
          </motion.h1>

          {/* Form */}
          <Form />
        </div>
      </section>
    </>
  );
}
