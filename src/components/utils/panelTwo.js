import React, { Component } from "react";
import HeroContent from "./heroContent";
import GoogleMap from "./GoogleMap";
class PanelTwo extends Component {
  render() {
    return (
      <div className="columns panel-two">
        <div className="column is-three-fifths">
          <div className="hero is-large">
            <HeroContent
              title={"GNBC"}
              subtitle={"We love jesus :D"}
              color="dark"
            />
          </div>
        </div>
        <div className="column is-two-fifths">
          <div className="hero is-large">
            <div className="hero-body">
              <div className={this.props.wrapperClasses}>
                <GoogleMap/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelTwo;
