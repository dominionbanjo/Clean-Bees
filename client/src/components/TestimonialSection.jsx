import React, { useState, useEffect } from "react";
import testimonials from "../utils/Testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
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

        {testimonials.map((testimonial, i) => (
          <div key={i} className={`testimonial ${i === index ? "" : "hidden"}`}>
            <h1>{testimonial.name}</h1>
            <p>{testimonial.text}</p>
          </div>
        ))}

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
