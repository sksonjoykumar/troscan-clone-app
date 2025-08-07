'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
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
            Where Vision <br /> Meets Design
          </motion.h1>

          {/* project card */}
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
