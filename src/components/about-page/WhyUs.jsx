import { motion } from 'framer-motion';
import { whyUsData } from './whyUsData';

export default function WhyUs() {
  return (
    <>
      <section>
        <div className="mt-5">
          {/* title  */}
          <div className="flex items-center justify-center gap-1">
            <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
            <h5 className="text-[14px] text-textPrimary font-semibold">
              Why Us?
            </h5>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-1 text-center text-5xl lg:text-6xl  text-textPrimary"
          >
            Elevate Your Space with <br /> Expertise & Elegance
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-14"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 ">
              {/* news Card */}
              {whyUsData.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm p-12 text-center "
                >
                  <p className="flex justify-center items-center ">
                    <span className="bg-[#FAF2EB] p-2 shadow-sm rounded-sm text-textPrimary">
                      {item.icon}
                    </span>
                  </p>
                  <p className="mt-7 text-xl text-hoverColor  ">{item.title}</p>
                  <p className="mt-2 text-hoverColor text-sm ">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
