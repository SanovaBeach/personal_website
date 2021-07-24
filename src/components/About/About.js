import React from "react";
import "./about.css";

const About = ({ about }) => {
  return (
    <div className="Terminal">
      <div className="Terminal_header">
        <div className="Terminal_headerContainer">
          <span className="Terminal_about">About Me</span>
          <ul className="Terminal_ui">
            <li className="Terminal_item line"></li>
            <li className="Terminal_item box"></li>
            <li className="Terminal_item">X</li>
          </ul>
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
    </div>
  );
};

export default About;
