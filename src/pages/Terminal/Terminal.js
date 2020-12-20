import React from "react";
import "./Terminal.css";

import { Component } from "react";

//redux
import { connect } from "react-redux";
import { actGetWork } from "../../actions/index";

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="terminal">
        <div className="terminalname">"Terminal" Resume</div>
        <div className="terminalContent"></div>
        <div className="terminalCommand">
          <p className="resumeText">~/resume$</p>
        </div>
        <input
          type="Type Command Here"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    works: state.works,
  };
};

export default connect(mapStateToProps, null)(Terminal);
