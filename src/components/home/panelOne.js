import React, { Component } from "react";
import Navbar from "../general/navBar";
import HeroContent from "./heroContent";
import "../../assets/styles.css";
class PanelOne extends Component {
  render() {
    return (
      <div className="top-panel">
        <div className="container">       
          <div className="hero is-fullheight">
            <Navbar />
            <HeroContent title={"GNBC"} subtitle={"We love jesus :D"} />
          </div>
        </div>
      </div>
    );
  }
}

export default PanelOne;