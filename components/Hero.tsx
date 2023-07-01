"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <motion.div
        className="flex-1 pt-36 padding-x"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </motion.div>
      <div className="hero__image-container">
        <motion.div
          className="hero__image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/hero3.png" alt="hero" fill className="object-contain" />
        </motion.div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
