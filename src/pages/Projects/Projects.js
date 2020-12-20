import React from "react";
import "./Projects.css";
import { animated } from "react-spring/renderprops";

const Projects = ({ style }) => {
  return (
    <animated.div className="mainRoute" style={{ ...style }}>
      <div>hello from project</div>
      <a href="http://localhost:3000/projects/terminal" className="button">
        Terminal
      </a>
    </animated.div>
  );
};

export default Projects;
