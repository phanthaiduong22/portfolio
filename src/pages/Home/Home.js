import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div class="mainHome">
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
        <img
          src={`../images/forest/Layer_000${number}.png`}
          className="forest-absolute"
          alt="bird"
        />
      );
    });
    return result;
  };
}

export default Home;
