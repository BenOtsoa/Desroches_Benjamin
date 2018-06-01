import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import MyTimer from "./MyTimer";
import SignUp from "./SignUp";
import Home from "./Home";
import History from "./History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyTimer />
        <SignUp />
        <ul>
          <NavLink to="/home" className="style-link" activeClassName="selected">
            Home
          </NavLink>
          <NavLink
            to="/notre-histoire"
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
