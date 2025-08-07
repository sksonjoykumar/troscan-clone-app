'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projectData } from './projectData';

export default function ProjectCard() {
  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12 ">
            {/* news Card */}
            {projectData.map(item => (
              <Link href={`/projects/${item.id}`} key={item.id} className="">
                <Image
                  src={item.img}
                  alt="img"
                  width={400}
                  height={400}
                  className="w-full h-auto md:h-[500px] rounded-xl hover:scale-105 transition-all duration-300 ease-out "
                />
                <div className="py-5">
                  <p className="text-2xl text-hoverColor ">{item.title}</p>

                  <p className=" text-hoverColor text-base ">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
