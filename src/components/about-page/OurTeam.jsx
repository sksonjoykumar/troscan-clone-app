'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { peopleData } from './peopleData';

export default function OurTeam() {
  return (
    <>
      <section>
        <div className="mt-20">
          {/* title  */}
          <div className="flex items-center justify-center gap-1">
            <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
            <h5 className="text-[14px] text-textPrimary font-semibold">
              Our Team
            </h5>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-1 text-center text-5xl lg:text-6xl  text-textPrimary"
          >
            Meet the Visionaries <br /> Behind Troscán
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 ">
              {/* news Card */}
              {peopleData.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm">
                  <Image
                    src={item.img}
                    alt='img'
                    width={400}
                    height={300}
                    className="w-full h-auto md:h-[370px] rounded-t-lg "
                  />
                  <div className="p-5">
                    <p className="text-2xl text-hoverColor ">{item.name}</p>

                    <p className=" text-hoverColor text-base ">
                      {item.profession}
                    </p>
                    <button
                      type="button"
                      className="mt-4 px-6 py-2.5 bg-[#F8EDE3] hover:bg-[#f8f0eb] rounded-md text-textPrimary transition-all duration-200 cursor-pointer"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
