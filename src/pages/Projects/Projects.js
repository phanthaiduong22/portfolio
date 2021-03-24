import React from "react";
import "./Projects.css";
import { animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";

const Projects = ({ style }) => {
  return (
    <animated.div className="mainRoute" style={{ ...style }}>
      <div>hello from project</div>
      <Link to="projects/terminal" className="button">
        Terminal
      </Link>
    </animated.div>
  );
};

export default Projects;
