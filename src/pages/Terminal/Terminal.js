import React, { Component } from "react";
import "./Terminal.css";
//redux
import { connect } from "react-redux";

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", info: this.props.info };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { value, info } = this.state;
    console.log(value, info);
  }
  render() {
    return (
      <div className="terminal">
        <div className="terminalname">"Terminal" Resume</div>
        <div className="terminalContent"></div>
        <div className="terminalCommand">
          <p className="resumeText">~/resume$</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.info,
  };
};

export default connect(mapStateToProps, null)(Terminal);
