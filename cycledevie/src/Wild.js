import React, { Component } from "react";

class Wild extends Component {
  componentWillMount() {
    console.log("La création du composant va avoir lieu");
  }

  componentDidMount() {
    console.log("La création du composant a eu lieu");
  }

  componentWillUnmount() {
    console.log("Le composant va être retiré");
  }

  render() {
    return (
      <div>
        <img
          src="https://wildcodeschool.fr/wp-content/uploads/2017/01/logo_orange_pastille.png"
          alt="wild"
        />
      </div>
    );
  }
}

export default Wild;
