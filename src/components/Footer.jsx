'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="bg-[#8D493A]">
        <div className="px-14 py-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-center flex justify-center text-white"
          >
            Troscán
          </Link>
        </div>

        <div className="flex justify-center  gap-3 sm:gap-12 md:gap-24 pb-20 border-b border-gray-400">
          <ul className="">
            <p className="text-gray-300">Sitemap</p>
            <li className="mt-5 text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/about">About</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/news">News</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 ">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="">
            <p className="text-gray-300">Social</p>
            <li className="mt-5 text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/">Facebook</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/">Instagram</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/">LinkedIn</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 ">
              <Link href="/contact">Twitter</Link>
            </li>
          </ul>
          <ul className="">
            <p className="text-gray-300">More</p>
            <li className="mt-5 text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/">License</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/">Grainient</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 py-1">
              <Link href="/">Inspirux</Link>
            </li>
            <li className="text-2xl text-white  hover:text-gray-300 transition-all duration-150 ">
              <Link href="/contact">Store</Link>
            </li>
          </ul>
        </div>
        {/* Copyright */}
        <div className="py-10">
          <p className="text-center text-gray-300">
            © 2025, All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
