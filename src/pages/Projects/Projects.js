import Typist from "react-typist";
import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="info">
        <h1 className="riptide">
          <b>Hello world!!</b>
        </h1>
        <h2 style={{ color: "#D1D1D1" }}>{`~My name is $`}</h2>
        <Typist>
          <span
            style={{ color: "#81E6D9", fontSize: "25px" }}
          >{`>>>fullName`}</span>{" "}
          <span style={{ color: "#D0C7B2", fontSize: "25px" }}>=</span>
          <span style={{ color: "#F16346", fontSize: "25px" }}>
            {" "}
            {`'Duong Phan'`}
          </span>
        </Typist>

        <h2 style={{ color: "#D1D1D1" }}>{`~My role is $`}</h2>
        <Typist>
          <span
            style={{ color: "#81E6D9", fontSize: "25px" }}
          >{`>>>role`}</span>{" "}
          <span style={{ color: "#D0C7B2", fontSize: "25px" }}>=</span>
          <span style={{ color: "#F16346", fontSize: "25px" }}>
            {" "}
            {`'coder.thinker.leader'`}
          </span>
        </Typist>

        <h2 style={{ color: "#D1D1D1" }}>{`~My motto is $`}</h2>
        <Typist>
          <span
            style={{ color: "#81E6D9", fontSize: "25px" }}
          >{`>>>motto`}</span>{" "}
          <span style={{ color: "#D0C7B2", fontSize: "25px" }}>=</span>
          <span style={{ color: "#F16346", fontSize: "25px" }}>
            {" "}
            {`'Country.Honor.Responsibility'`}
          </span>
        </Typist>
      </div>
    );
  }
}

export default Projects;
