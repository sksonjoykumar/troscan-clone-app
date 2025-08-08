'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 w-full z-50  px-4 md:px-0">
      <motion.div
        initial={{ y: -75 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-md shadow-md border border-gray-300 bg-[#F8EDE3] max-w-[702px] mx-auto p-2 md:p-0 md:pl-6"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className=" text-xl font-bold text-textPrimary">
            Troscán
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            <li className="text-textPrimary text-md font-semibold hover:text-hoverColor transition-all duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="text-textPrimary text-md font-semibold hover:text-hoverColor transition-all duration-300">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-textPrimary text-md font-semibold hover:text-hoverColor transition-all duration-300">
              <Link href="/news">News</Link>
            </li>
          </ul>

          {/* Contact Button */}
          <Link href={'/contact'}>
            <button
              className="hidden md:block bg-textPrimary text-white text-md font-semibold px-6 py-3 m-1.5 rounded-lg hover:bg-hoverColor transition-all duration-300"
              type="button"
            >
              Contact us
            </button>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden text-white bg-textPrimary p-2 rounded-md hover:bg-hoverColor transition-all duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="flex justify-center items-center py-3">
            <ul className="flex flex-col items-center gap-4">
              <li className="text-textPrimary text-md font-semibold hover:text-hoverColor transition-all duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="text-textPrimary text-md font-semibold hover:text-hoverColor transition-all duration-300">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="text-textPrimary text-md font-semibold hover:text-hoverColor transition-all duration-300">
                <Link href="/news">News</Link>
              </li>
              <Link href={'/contact'}>
                <button
                  className=" bg-textPrimary text-white text-md font-semibold px-6 py-3 m-1.5 rounded-lg hover:bg-hoverColor transition-all duration-300"
                  type="button"
                >
                  Contact us
                </button>
              </Link>
            </ul>
          </div>
        )}
      </motion.div>
    </nav>
  );
}
