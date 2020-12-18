import Typist from "react-typist";
import React from "react";
import "./AboutMe.css";
import { animated } from "react-spring/renderprops";

const AboutMe = ({ style }) => {
  return (
    <animated.div className="mainRoute" style={{ ...style }}>
      <div className="info">
        <h1 className="riptide">
          <b>Hello world!!</b>
        </h1>

        {showInfo(`~My name is $`, `>>>fullName`, `'Duong Phan'`)}
        {showInfo(`~My role is $`, `>>>role`, `'Coder.thinker.leader'`)}
        {showInfo(
          `~My motto is $`,
          `>>>motto`,
          `'Country.Honor.Responsibility'`
        )}
        <h1 className="riptide">
          <b>My "RPG" Classes</b>
        </h1>
        {showLogo(
          <img src="https://img.icons8.com/color/96/000000/javascript.png" />,
          "JavaScript"
        )}
        {showLogo(
          <img src="https://img.icons8.com/dusk/96/000000/python.png" />,
          "Python"
        )}
        {showLogo(
          <img src="https://img.icons8.com/dusk/96/000000/math.png" />,
          "Math"
        )}
        {showLogo(
          <img src="https://img.icons8.com/cotton/96/000000/web-design--v1.png" />,
          "Web Design"
        )}
        {showLogo(
          <img src="https://img.icons8.com/cotton/96/000000/web-design--v1.png" />,
          "React"
        )}
        {showLogo(
          <img src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" />,
          "C++"
        )}
        {showLogo(
          <img src="https://img.icons8.com/dusk/96/000000/github.png" />,
          "Github"
        )}
      </div>
    </animated.div>
  );
};

const showLogo = (link, nameLogo) => {
  return (
    <div className="logo">
      {link}
      <br />
      {nameLogo}
    </div>
  );
};
const showInfo = (a, b, c) => {
  return (
    <div>
      <h2 style={{ color: "#D1D1D1" }}>{a}</h2>
      <Typist>
        <span style={{ color: "#81E6D9", fontSize: "25px" }}>{b}</span>{" "}
        <span style={{ color: "#D0C7B2", fontSize: "25px" }}>=</span>
        <span style={{ color: "#F16346", fontSize: "25px" }}> {c}</span>
      </Typist>
    </div>
  );
};
export default AboutMe;
