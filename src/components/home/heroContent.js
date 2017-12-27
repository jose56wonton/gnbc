import React, { Component } from "react";

class HeroContent extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title light">
            {this.props.title}
          </h1>
          <h2 className="subtitle light">
            {this.props.subtitle}
          </h2>
        </div>
      </div>
    );
  }
}

export default HeroContent;
