import React from "react";
import "./Home.css";
import { animated } from "react-spring/renderprops";

const Home = ({ style }) => {
  return (
    <animated.div className="mainRoute" style={{ ...style }}>
      <div className="mainHome">
        <div
          className="flyright"
          style={{
            width: "auto",
            height: "230px",
            backgroundImage: `url(../../assets/images/cloud.png)`,
          }}
        />
        <div className="forest">{showForest()}</div>
      </div>
    </animated.div>
  );
};

const showForest = () => {
  let result = null;
  let numbers = [];
  for (let i = 0; i < 9; ++i) {
    numbers.push(i);
  }
  console.log(numbers);
  result = numbers.map((number) => {
    return (
      <div
        className="forest-absolute"
        key={number}
        style={{
          backgroundImage: `url(../../assets/images/forest/Layer_000${number}.png)`,
        }}
      />
    );
  });
  return result;
};

export default Home;
