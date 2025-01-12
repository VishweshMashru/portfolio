'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const gridRows = 20; // Number of rows
  const gridCols = 20; // Number of columns
  const snakeLength = 5; // Length of the snake
  const animationSpeed = 150; // Speed of the snake movement in ms

  const [snake, setSnake] = useState([
    { row: Math.floor(gridRows / 2), col: Math.floor(gridCols / 2) }, // Start in the center
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[prevSnake.length - 1];

        // Generate a random direction
        const directions = [
          { row: -1, col: 0 }, // Up
          { row: 1, col: 0 }, // Down
          { row: 0, col: -1 }, // Left
          { row: 0, col: 1 }, // Right
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];

        // Calculate new head position
        const newHead = {
          row: (head.row + randomDirection.row + gridRows) % gridRows, // Wrap around vertically
          col: (head.col + randomDirection.col + gridCols) % gridCols, // Wrap around horizontally
        };

        const newSnake = [...prevSnake, newHead]; // Add new head
        if (newSnake.length > snakeLength) {
          newSnake.shift(); // Remove the tail to maintain length
        }
        return newSnake;
      });
    }, animationSpeed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative bg-orange-200 text-white min-h-screen overflow-hidden">
      {/* Animated Snake Background */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        }}
      >
        {Array.from({ length: gridRows * gridCols }).map((_, index) => {
          const row = Math.floor(index / gridCols);
          const col = index % gridCols;
          const isSnake = snake.some((segment) => segment.row === row && segment.col === col);

          return (
            <motion.div
              key={`${row}-${col}`}
              className="w-full h-full rounded-lg"
              style={{
                backgroundColor: isSnake ? 'rgba(220, 20, 60, 0.5)' : 'transparent', // Dark gray for snake
              }}
              initial={false}
              animate={{
                backgroundColor: isSnake ? 'rgba(220, 20, 60, 0.5)' : 'transparent',
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>

      {/* Content Section */}
      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-center h-[80vh] text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 px-4 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* Image Section */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
        >
          <img
            src="/Image.png" // Replace with the correct path to your image
            alt="Vishwesh"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-red-400">Vishwesh</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            A passionate software engineer and curious problem solver. I enjoy building innovative projects and exploring the latest technologies.
          </p>
          <motion.a
            href="#about"
            className="mt-8 px-6 py-3 bg-red-400 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-fuchsia-400 inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More About Me
          </motion.a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        className="py-16 px-8 bg-orange-300 text-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-red-400">About Me</h2>
        <p className="mt-6 text-lg max-w-4xl mx-auto">
          I’m currently a junior at San Jose State University, majoring in Computer Science. My projects range from building AI-driven applications to working on image processing and computer vision. 
          I love collaborating with others, learning new things, and contributing to meaningful projects.
        </p>
      </motion.div>
    </div>
  );
}
