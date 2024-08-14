import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const FaqItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="faq">
      <p className="www" onClick={handleToggle}>
        {question} <IoIosArrowDown className={isVisible ? "upside" : ""} />
      </p>
      <motion.div
        initial={false}
        animate={isVisible ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
        className="answer"
      >
        <p className="xxx">{answer}</p>
        <div className="logos">
          <IoLogoFacebook />
          <FaLinkedin />
        </div>
      </motion.div>
      <hr />
    </div>
  );
};

export default FaqItem;
