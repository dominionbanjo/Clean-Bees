import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonials from "../utils/Testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <div className="top-tt">
        <FaArrowLeft className="nav-icon nav-left" onClick={handlePrev} />

        <div className="testimonial-slider">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, i) =>
                i === index && (
                  <motion.div
                    key={i}
                    className="testimonial"
                    initial={{ x: direction * 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -direction * 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <h1>{testimonial.name}</h1>
                    <p>{testimonial.text}</p>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <FaArrowRight className="nav-icon nav-right" onClick={handleNext} />
      </div>

      <div className="bullet-container">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`bullet ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
