import React, { Component } from "react";
import CatsJumbo from "../CatsJumbo";
import "./styles.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <CatsJumbo />
        <div className="homeBlurb">
          <p>Welcome to Catster!</p>
          <p>
            Use this app to meet some kitties, click the up arrow to friend them
            or the down arrow to pass. <br></br>There is a chance the cat will
            be your friend, too...but let's be honest - they probably won't.
          </p>
        </div>
      </div>
    );
  }
}
