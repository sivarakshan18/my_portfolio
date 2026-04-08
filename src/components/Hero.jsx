import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion"; // use 'framer-motion' instead of 'motion/react'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <motion.div
      className="text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating image */}
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        src={hero}
        alt="Hero"
className="mx-auto w-40 h-40 rounded-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="container mx-auto text-center"
      >
        {/* Main heading with extra fade and bounce */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="text-4xl md:text-6xl flex flex-col gap-4 font-bold mb-4"
        >
          Welcome To My
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-purple-500"
          >
            Portfolio Website
          </motion.span>
        </motion.h1>

        {/* Description with fade up */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-gray-400 text-lg mb-8"
        >
          Crafting my personal portfolio through hands-on learning and real-world development experience.
        </motion.p>

        {/* Buttons with hover effects and entrance animation */}
        <div className="flex justify-center space-x-4 mb-10">
          <motion.button
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Hire Me
            </Link>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white border border-white px-6 py-3 rounded-full"
          >
            <Link to="about" smooth={true} duration={500} offset={-70}>
              My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

