"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  const handleScroll = () => {};

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between w-full h-screen px-6 sm:px-12">
      {isLoading ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          exit={{ display: "none" }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-gray-300 border-t-primary-blue rounded-full animate-spin"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </motion.div>
      ) : (
        <div className="flex-1 pt-24 sm:pt-36 text-center sm:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            Find, book, or rent a car quickly and easily!
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Streamline your car rental experience with our effortless booking
            process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <CustomButton
              title="Explore Cars"
              containerStyles="bg-primary-blue text-white rounded-full mt-10 py-3 px-8 text-lg transform transition-all duration-300 hover:scale-105"
              handleClick={handleScroll}
            />
          </motion.div>
        </div>
      )}

      <div className="relative flex-1 w-full h-full sm:h-auto mt-10 sm:mt-0">
        <motion.div
          className="relative w-full h-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/images/hero.png"
            alt="hero"
            width={1200}
            height={800}
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>
        <motion.div
          className="hero__image-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
