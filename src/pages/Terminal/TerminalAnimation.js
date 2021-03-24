import React from "react";
import Terminal from "./Terminal";
import { animated } from "react-spring/renderprops";
import "./TerminalAnimation.css";
const TerminalAnimation = ({ style }) => {
  return (
    <animated.div className="mainRoute" style={{ ...style }}>
      <Terminal />
    </animated.div>
  );
};

export default TerminalAnimation;
