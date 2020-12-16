import ReactSpring from "../../components/ReactSpring";
import React, { Component } from "react";
import "./AboutMe.css";

class AboutMe extends Component {
  render() {
    return (
      <div class="info">
        <h1 className="riptide">Hello world!!</h1>
        <h2 style={{ color: "#D1D1D1" }}>{`~My name is $`}</h2>
        <h2>
          <span style={{ color: "#F16346" }}>{`>>>fullName`}</span>{" "}
          <h3 style={{ color: "#F16346" }}>=</h3>
          <span style={{ color: "#F16346" }}> {`'Duong Phan'`}</span>
        </h2>
      </div>
    );
  }
}

export default AboutMe;
