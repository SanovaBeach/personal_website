import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const terminalVariants = {
  initial: { x: "200vw" },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 3,
      delay: 1,
    },
  },
};

const About = ({ about }) => {
  return (
    <motion.div
      className="Terminal"
      variants={terminalVariants}
      initial="initial"
      animate="animate"
    >
      <div className="Terminal_header">
        <div className="Terminal_headerContainer">
          <motion.span className="Terminal_about" pathLength={{ length: 1 }}>
            About Me
          </motion.span>
        </div>
      </div>
      <div className="Terminal_aboutContainer">
        {about.map((item, index) => {
          return (
            <div className="Terminal_aboutContent" key={index}>
              <h3 className="Terminal_input">{item.input}</h3>
              <p
                className="Terminal_return"
                dangerouslySetInnerHTML={{ __html: item.return }}
              ></p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default About;
