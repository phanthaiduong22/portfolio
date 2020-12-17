import React, { Component } from "react";
import "./Home.css";
import { Transition, animated } from "react-spring/renderprops";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
// const Home = ({ style }) => {
//   return (
//     <div className="mainHome" style={{ ...style, background: `#ef5350` }}>
//       <div
//         className="flyright"
//         style={{
//           width: "auto",
//           height: "230px",
//           backgroundImage: `url(../../assets/images/cloud.png)`,
//           backgroundRepeat: "repeat-x",
//         }}
//       ></div>
//       <div className="forest">{showForest()}</div>
//     </div>
//   );
// };

const Home = ({ style }) => {
  console.log(style);
  return (
    <animated.div className="mainRoute" style={{ ...style  }}>
      <div
        className="flyright"
        style={{
          width: "auto",
          height: "230px",
          backgroundImage: `url(../../assets/images/cloud.png)`,
          backgroundRepeat: "repeat-x",
        }}
      ></div>
      <div className="forest">{showForest()}</div>
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
          backgroundRepeat: "repeat-x",
        }}
      />
    );
  });
  return result;
};

export default Home;
