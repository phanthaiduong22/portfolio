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
      </div>
      <div className="allLogo">
        <h1 className="riptide">
          <b>My "RPG" Classes</b>
        </h1>
        {showLogo(
          "https://img.icons8.com/color/96/000000/javascript.png",
          "JavaScript"
        )}
        {showLogo("https://img.icons8.com/dusk/96/000000/python.png", "Python")}
        {showLogo("https://img.icons8.com/dusk/96/000000/math.png", "Math")}
        {showLogo(
          "https://img.icons8.com/cotton/96/000000/web-design--v1.png",
          "Web Design"
        )}
        {showLogo(
          "https://img.icons8.com/cotton/96/000000/web-design--v1.png",
          "React"
        )}
        {showLogo(
          "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
          "C++"
        )}
        {showLogo("https://img.icons8.com/dusk/96/000000/github.png", "Github")}
      </div>
      <div className="resume">
        <h1 className="riptide">
          <b>Other Resume Media</b>
        </h1>
        {showButton(
          "https://drive.google.com/file/d/1c5kSWJPGIwPW-7dp7itFDIvkkFJNi1nH/view?usp=sharing",
          "PDF File "
        )}
      </div>
    </animated.div>
  );
};

const showLogo = (link, nameLogo) => {
  return (
    <div className="logo">
      <img src={link} alt="logo" />
      <br />
      {nameLogo}
    </div>
  );
};

const showInfo = (a, b, c) => {
  return (
    <div style={{ marginLeft: "2vh" }}>
      <h2 style={{ color: "#D1D1D1" }}>{a}</h2>
      <Typist>
        <span style={{ color: "#81E6D9", fontSize: "2.5vh" }}>{b}</span>{" "}
        <span style={{ color: "#D0C7B2", fontSize: "2.5vh" }}>=</span>
        <span style={{ color: "#F16346", fontSize: "2.5vh" }}> {c}</span>
      </Typist>
    </div>
  );
};

const showButton = (link, nameButton) => {
  return (
    <a href={link} class="button" target="_blank" rel="noreferrer">
      {nameButton}
    </a>
  );
};
export default AboutMe;
