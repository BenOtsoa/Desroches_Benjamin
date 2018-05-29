import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";
import History from "./History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <NavLink to="/home" className="style-link" activeClassName="selected">
            Home
          </NavLink>
          <NavLink
            to="/history"
            className="style-link"
            activeClassName="selected"
          >
            History
          </NavLink>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/notre-histoire" component={History} />
      </div>
    );
  }
}

export default App;
