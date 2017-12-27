import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className={`hero ${this.props.classes}`}>
        <div className="hero-body">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
