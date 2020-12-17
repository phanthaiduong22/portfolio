import React, { Component } from "react";
import "./Home.css";
import test from "../../assets/images/forest/10.png";
var test1 = require("../../assets/images/forest/10.png");
class Home extends Component {
  render() {
    return (
      <div className="mainHome">
        <div
          className="testabc"
          style={{
            // backgroundImage: `url(${test})`,
            backgroundImage: `url(${test})`,
          }}
        />
        <div className="forest">{this.showForest()}</div>
      </div>
    );
  }
  showForest = () => {
    let result = null;
    let numbers = [];
    for (let i = 0; i < 8; ++i) {
      numbers.push(i);
    }
    console.log(numbers);
    result = numbers.map((number) => {
      return (
        // <div
        //   key={number}
        //   style={{
        //     backgroundImage: `url(${require(`../../assets/images/forest/Layer_000${number}.png`)}`,
        //   }}
        // />
        <div></div>
      );
    });
    return result;
  };
}

export default Home;
