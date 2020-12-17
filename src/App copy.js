import "./App.css";
import React, { useContext } from "react";
import routes from "./routes";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  __RouterContext,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { useTransition, animated } from "react-spring";
import { RouterContext } from "./CustomBrowserRouter";
import CustomBrowserRouter from "./CustomBrowserRouter";
import AboutMe from "./pages/AboutMe/AboutMe";
import Home from "./pages/Home/Home";

const App = () => {
  const { location } = useContext(RouterContext);
  const transitions = useTransition(location, (location) => location, {
    from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
  });
  return (
    <CustomBrowserRouter>
      <Router>
        <div className="main-background">
          <Menu />
          <div className="container-fluid">
            <div
              className="row"
              style={{ overflowX: "hidden", position: "relative" }}
            >
              {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                  <Switch location={item}>
                    <Route path="/Home" component={Home} />
                    <Route path="/AboutMe" component={AboutMe} />
                  </Switch>
                </animated.div>
              ))}
              {/* {showContentMenus(routes)} */}
            </div>
          </div>
        </div>
      </Router>
    </CustomBrowserRouter>
  );
};

const showContentMenus = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
  }
  return <Switch> {result} </Switch>;
};
export default App;
