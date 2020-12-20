import React from "react";
import "./Home.css";
import { animated } from "react-spring/renderprops";
import styled, { keyframes } from "styled-components";

const growing = (color) => keyframes`
  0% {
    top: 55%;
    box-shadow: 0 0 10px ${color};
  }
  50% {
    box-shadow: 0 0 30px ${color};
    top: 40%;
  }
  100% {
    box-shadow: 0 0 10px ${color};
    top: 55%;
  }

`;

const ButtonGrow = styled.div`
  position: fixed;
  border-radius: 50%;
  color: aliceblue;
  right: ${(props) => props.position};
  font-weight: bolder;
  vertical-align: middle;
  width: 5vh;
  height: 5vh;
  align-items: center;
  background-color: ${(props) => props.color};
  animation: ${(props) => growing(props.color)} 3000ms infinite linear;
`;

const Home = ({ style }) => {
  return (
    <animated.div className="mainRoute" style={{ ...style }}>
      <div className="mainHome">
        <div
          className="flyright"
          style={{
            backgroundImage: `url(../../assets/images/cloud.png)`,
          }}
        />
        <div className="forest">{showForest()}</div>
        <div
          className="narutorun"
          style={{
            backgroundImage: `url(../../assets/images/naruto.gif)`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="birdrun"
          style={{
            backgroundImage: `url(../../assets/images/bird.gif)`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="bird1run"
          style={{
            backgroundImage: `url(../../assets/images/bird1.gif)`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <ButtonGrow position="59%" color="#5ca369">
          <h3>{`</>`}</h3>
        </ButtonGrow>
        <ButtonGrow position="53%" color="#3182CE" />
        <ButtonGrow position="47%" color="#718096" />
        <ButtonGrow position="41%" color="#E4503F" />
        <h1 className="myname">I'm Duong Phan</h1>
      </div>
    </animated.div>
  );
};

const showForest = () => {
  let result = null;
  let numbers = [];
  for (let i = 9; i >= 0; --i) {
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
          animation: `moveleft ${(number + 1) * 10}s infinite linear`,
        }}
      />
    );
  });
  return result;
};

export default Home;
