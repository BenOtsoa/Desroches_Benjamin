import React, { Component } from "react";
import "./App.css";
import MyTimer from "./MyTimer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div className="App">
        <MyTimer />
      </div>
    );
  }
}

export default App;
