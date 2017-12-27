import React, { Component } from "react";
import Navbar from "./nav/navBar";
import Hero from "./hero/hero";
import HeroContent from "./hero/heroContent";
import Map from "./utils/GoogleMap";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero classes="is-fullheight has-text-centered home-panel-1">
          <h1 className="title is-1">Good News</h1>
        </Hero>
        <div className="container home-panel-2">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title is-1">Jesus lvoes you</h1>
            </div>

            <div className="column is-6">
              <Map/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
