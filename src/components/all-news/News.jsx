'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NewsCard from './NewsCard';

export default function News() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="px-14 bg-[#F8EDE3] py-[150px]"
      >
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end gap-6">
          <div className="">
            <div className="flex items-center gap-1">
              <span className="bg-textPrimary w-1.5 h-1.5 rounded-full" />
              <h5 className="text-[14px] text-textPrimary font-semibold">
                News
              </h5>
            </div>
            <h2 className="mt-6 text-center sm:text-left text-4xl lg:text-6xl  text-textPrimary">
              Stay Inspired with <br /> Interior Trends
            </h2>
          </div>
          <Link
            href="/news"
            className="lg:h-12 bg-textPrimary text-white text-md font-semibold px-6 py-3 m-1.5 rounded-lg hover:bg-hoverColor transition-all duration-300"
            type="button"
          >
            View All News
          </Link>
        </div>

        {/* news Card */}
        <NewsCard />
      </motion.div>
    </>
  );
}
