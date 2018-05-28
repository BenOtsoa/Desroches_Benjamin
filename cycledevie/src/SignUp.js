import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "benj.desroches@free.fr"
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(e) {
    e.preventDefault();

    this.setState({ email: e.target.value });
  }
  render() {
    return (
      <div>
        <h2>Quete Création Composant Email:</h2>
        <label for="email">Email : </label>
        <input
          type="email"
          name="email"
          placeholder={this.state.email}
          id="email"
          onChange={this.updateEmailField}
        />
        <p>Voici mon email: {this.state.email}</p>
      </div>
    );
  }
}

export default SignUp;
