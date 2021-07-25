import React from "react";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const linkVariants = {
  hover: {
    scale: 0.99,
    textShadow: "0px 0px 8px rgb(255, 255,255)",
    boxShadow: "0px 0px 8px rgb(0, 0,0)",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="Contact_title">Contact Me</h1>
      <div className="Contact_container">
        <div className="Contact_info">
          <motion.a
            variants={linkVariants}
            whileHover="hover"
            href="mailto:laurencebalazo@gmail.com"
            className="Contact_type"
          >
            <SiGmail className="Contact_logo" />
            laurencebalazo@gmail.com
          </motion.a>
        </div>
        <div className="Contact_info">
          <motion.a
            variants={linkVariants}
            whileHover="hover"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/laurence-balazo-51a782216/"
            className="Contact_type"
          >
            <FaLinkedin className="Contact_logo" />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
