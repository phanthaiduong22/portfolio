import React from "react";
import { Transition } from "react-spring/renderprops";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import AboutMe from "./pages/AboutMe/AboutMe";
import Home from "./pages/Home/Home";
const App = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <div>
          {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
          <Menu />
          <div>
            <Transition
              native
              items={location}
              keys={location.pathname.split("/")[1]}
              from={{ transform: "translateX(100vw)", opacity: 0 }}
              enter={{ transform: "translateX(0vw)", opacity: 1 }}
              leave={{ transform: "translateX(-100vw)", opacity: 0 }}
            >
              {(loc, state) => (style) => (
                <Switch location={state === "update" ? location : loc}>
                  <Route path="/" render={() => Home({ style })} exact />
                  <Route path="/aboutme" render={() => AboutMe({ style })} />
                  <Route path="/projects" render={() => AboutMe({ style })} />
                  <Route
                    render={() => (
                      <h1 style={{ color: "#D0C7B2" }}>Page Not Found</h1>
                    )}
                  />
                </Switch>
              )}
            </Transition>
          </div>
        </div>
      )}
    />
  </Router>
);

export default App;
