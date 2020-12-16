import React from "react";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/aboutme",
    exact: true,
    main: () => <AboutMe />,
  },
  {
    path: "/projects",
    exact: false,
    main: () => <Projects />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
