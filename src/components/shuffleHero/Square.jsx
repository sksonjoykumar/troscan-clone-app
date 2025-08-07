'use client';
import { motion } from 'framer-motion';

export default function Square({ id, src }) {
  return (
    <motion.div
      key={id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className="w-full h-full rounded-lg shadow-md bg-cover bg-center"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
