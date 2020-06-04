import React, { Component } from "react";
import "./styles.css";
import Jumbotron from "react-bootstrap/Jumbotron";

export default class Header extends Component {
  render() {
    return (
      <Jumbotron className="imageJumbo">
        <h1>Catster</h1>
        <p className="paragraph">They are made of liquid.</p>
      </Jumbotron>
    );
  }
}
