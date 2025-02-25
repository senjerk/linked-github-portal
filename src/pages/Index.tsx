
import React, { useEffect, useState } from 'react';

interface NyanCat {
  id: number;
  x: number;
  y: number;
  speed: number;
  direction: 'left' | 'right';
}

const Index = () => {
  const [nyans, setNyans] = useState<NyanCat[]>([]);

  useEffect(() => {
    // Create initial nyan cats
    const initialNyans = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 2 + Math.random() * 3,
      direction: Math.random() > 0.5 ? 'left' : 'right'
    }));
    setNyans(initialNyans);

    // Animation loop
    const animate = () => {
      setNyans(prevNyans => prevNyans.map(nyan => {
        let newX = nyan.direction === 'right' 
          ? nyan.x + nyan.speed 
          : nyan.x - nyan.speed;

        // Wrap around screen
        if (newX > window.innerWidth + 100) newX = -100;
        if (newX < -100) newX = window.innerWidth + 100;

        return {
          ...nyan,
          x: newX,
        };
      }));
    };

    const intervalId = setInterval(animate, 16);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 overflow-hidden">
      {nyans.map(nyan => (
        <div
          key={nyan.id}
          className="absolute transition-transform duration-100"
          style={{
            transform: `translate(${nyan.x}px, ${nyan.y}px) scaleX(${nyan.direction === 'left' ? -1 : 1})`,
          }}
        >
          <div className="relative w-24 h-24">
            {/* Rainbow trail */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-32 h-8 flex">
              <div className="w-full h-full bg-red-500 animate-pulse" />
              <div className="w-full h-full bg-orange-500 animate-pulse" />
              <div className="w-full h-full bg-yellow-500 animate-pulse" />
              <div className="w-full h-full bg-green-500 animate-pulse" />
              <div className="w-full h-full bg-blue-500 animate-pulse" />
              <div className="w-full h-full bg-purple-500 animate-pulse" />
            </div>
            
            {/* Nyan cat */}
            <div className="absolute inset-0 bg-gray-800 rounded-3xl overflow-hidden">
              <div className="absolute inset-2 bg-gray-400 rounded-2xl">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-t-full" />
                <div className="absolute top-2 left-2 w-4 h-4 bg-black rounded-full" />
                <div className="absolute top-2 right-2 w-4 h-4 bg-black rounded-full" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-2 bg-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
