import React, { Component } from "react";
import Typist from "react-typist";

export default class MyComponent extends Component {
  render() {
    return (
      <Typist>
        <p> First Sentence </p>
        <Typist.Delay ms={500} />
        <br />
        This won't be animated until 500ms after the first sentenced is rendered
      </Typist>
    );
  }
}
