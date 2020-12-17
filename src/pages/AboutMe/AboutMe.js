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
        {showInfo(
          `~My motto is $`,
          `>>>motto`,
          `'Country.Honor.Responsibility'`
        )}
        {showInfo(
          `~My motto is $`,
          `>>>motto`,
          `'Country.Honor.Responsibility'`
        )}
      </div>
    </animated.div>
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
