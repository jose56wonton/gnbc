import React, { Component } from "react";

class HeroContent extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className={this.props.wrapperClasses}>
          <h1 className={"title "+this.props.color}>
            {this.props.children}
          </h1>
          <h2 className={"subtitle "+this.props.color}>
            {this.props.subtitle}
          </h2>
        </div>
      </div>
    );
  }
}

export default HeroContent;
