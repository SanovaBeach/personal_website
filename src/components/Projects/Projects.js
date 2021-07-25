import React from "react";
import "./projects.scss";
import { projects } from "../../content/projects";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { motion } from "framer-motion";

const linkVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255,255)",
    boxShadow: "0px 0px 8px rgb(0, 0,0)",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="Projects_heading">Projects</h1>
      <div className="Projects_container">
        {projects.map((project, index) => {
          const { image, title, description, skills, links } = project;
          return (
            <div className="Projects_content" key={index}>
              <img src={image} alt="" className="Projects_image" />
              <div className="Projects_right">
                <h3 className="Projects_title">{title}</h3>
                <p className="Projects_desc">{description}</p>
                <ProjectSkills skills={skills} />
                <ProjectLinks links={links} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProjectLinks = ({ links }) => {
  return (
    <div className="Projects_linksContainer">
      <motion.a
        variants={linkVariants}
        whileHover="hover"
        target="_blank"
        rel="noreferrer"
        href={links.live}
        className="Projects_live"
      >
        Live <MdLiveTv className="Projects_logo" />
      </motion.a>
      <motion.a
        variants={linkVariants}
        whileHover="hover"
        target="_blank"
        rel="noreferrer"
        href={links.github}
        className="Projects_github"
      >
        <FaGithub className="Projects_logo" /> Github
      </motion.a>
    </div>
  );
};

const ProjectSkills = ({ skills }) => {
  return (
    <div className="Projects_skillContainer">
      {skills &&
        skills.map((skill, index) => {
          return <ProjectSkill key={index} skill={skill} />;
        })}
    </div>
  );
};

const ProjectSkill = ({ skill }) => {
  return <span className="Projects_skill">{skill}</span>;
};

export default Projects;
