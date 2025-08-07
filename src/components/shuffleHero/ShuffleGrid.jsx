'use client';
import { useEffect, useRef, useState } from 'react';
import { generateSquares } from './data';

export default function ShuffleGrid() {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  grid-rows-3 md:grid-rows-2 w-full h-[400px] md:h-[600px] gap-6">
      {squares.map(sq => sq)}
    </div>
  );
}
