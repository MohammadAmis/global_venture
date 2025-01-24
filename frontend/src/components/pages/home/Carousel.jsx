import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide1 from "./Slide/Slide_1";
import Slide2 from "./Slide/Slide_2";
import Slide3 from "./Slide/Slide_3";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

const slides = [<Slide1/>, <Slide2 />, <Slide3 />];



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Variants for animations
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[calc(100vh-5rem)] max-w-7xl mx-auto mt-2 overflow-hidden z-10">
      <AnimatePresence custom={1}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          custom={1}
        >
          {slides[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full z-20"
      >
        <FaRegArrowAltCircleLeft className="text-4xl text-gray-600 hover:text-white " />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full z-20"
      >
        <FaRegArrowAltCircleRight className="text-4xl text-gray-600 hover:text-white " />
      </button>
    </div>

  );
};

export default Carousel;