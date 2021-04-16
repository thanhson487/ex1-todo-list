import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Menu from "./components/Commons/Header";

import router from "./routers/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu></Menu>
          <div id="container">
            <Switch>
              {router.map((value, key) => {
                return (
                  <Route
                    path={value.path}
                    exact={value.exact}
                    component={value.component}
                    key={key}
                  />
                );
              })}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
