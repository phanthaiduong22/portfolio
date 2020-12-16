import "./App.css";
import React, { Component } from "react";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/Menu";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-background">
          <Menu />
          <div className="container-fluid">
            <div className="row">{this.showContentMenus(routes)}</div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
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
    return <Switch> {result}</Switch>;
  };
}

export default App;
