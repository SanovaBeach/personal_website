import React from "react";
import "./header.scss";
import { motion } from "framer-motion";

const headerVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 3,
      delay: 0.5,
    },
  },
};

const titleVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { yoyo: Infinity, duration: 0.5, delay: 3 },
  },
};

const Header = () => {
  return (
    <motion.header
      className="Header"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="Header_title">
        Laurence Balazo
        <motion.div
          variants={titleVariants}
          className="Header_span"
        ></motion.div>
      </h1>
      <p className="Header_description">
        Im a Frontend Developer. Self motivated person, who has passion for
        reading and learning.
      </p>
    </motion.header>
  );
};

export default Header;
