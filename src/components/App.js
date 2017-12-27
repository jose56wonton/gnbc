import React, { Component } from "react";
import Navbar from "./navBar";
import HeroContent from './heroContent';
import "../assets/styles.css";
class App extends Component {
  render() {
    return (
      <div className="container is-widescreen">
        <div className="hero is-fullheight home-cover-hero">
          <Navbar />
          <HeroContent title={"GNBC"} subtitle={"We love jesus :D"}/>
        </div>
      </div>
    );
  }
}

export default App;
