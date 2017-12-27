import React, { Component } from "react";
import Navbar from "../general/navBar";
import HeroContent from "./heroContent";
import "../../assets/styles.css";
class PanelOne extends Component {
  render() {
    return (
      <div className="panel-one">
        <div className="container">       
          <div className="hero is-fullheight">
            <Navbar />
            <HeroContent wrapperClasses="container has-text-centered" title={"GNBC"} subtitle={"We love jesus :D"} color="light"/>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelOne;