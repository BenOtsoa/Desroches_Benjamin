import React, { Component } from "react";

class MyTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    console.log("Le composant a été monté");
    setInterval(() => this.timer(), 1000);
  }

  componentDidUpdate() {
    console.log("Le composant a été mis à jour");
  }

  timer() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Il est:</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default MyTimer;
