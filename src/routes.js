import React from "react";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ style }) => {
      return <Home style={style} />;
    },
  },
  {
    path: "/aboutme",
    exact: true,
    main: ({ style }) => {
      return <AboutMe style={style} />;
    },
  },
  {
    path: "/projects",
    exact: false,
    main: ({ style }) => {
      return <Projects style={style} />;
    },
  },
  {
    path: "",
    exact: false,
    main: ({ style }) => {
      return <NotFound style={style} />;
    },
  },
];

export default routes;
