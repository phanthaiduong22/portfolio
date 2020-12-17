import "./App.css";
import React from "react";
import Menu from "./components/Menu/Menu";
import { Transition, animated } from "react-spring/renderprops";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";

const App = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <div className="fill">
          <Menu />
          <div className="content">
            <Transition
              native
              items={location}
              keys={location.pathname.split("/")[1]}
              from={{ transform: "translateX(1000px)", opacity: 0 }}
              enter={{ transform: "translateX(0px)", opacity: 1 }}
              leave={{ transform: "translateX(-1000px)", opacity: 0 }}
              config={{ duration: 500, delay: 0 }}
            >
              {(loc, state) => (style) => (
                <Switch>{showContentMenus(routes, style)}</Switch>
              )}
            </Transition>
          </div>
        </div>
      )}
    />
  </Router>
);

const showContentMenus = (routes, style) => {
  console.log(style);
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(props) => route.main({ style })}
        />
      );
    });
  }
  return <Switch> {result} </Switch>;
};
export default App;
