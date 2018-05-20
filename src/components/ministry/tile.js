import Img from "gatsby-image";
import React, { Component } from "react";

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };
  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  };
  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className="column is-12 ministry-tile"
      >
        <div className="columns">
          <div className="column ministry-content">
            <h1 className="title-1">{this.props.title}</h1>
            <p className="text">{this.props.description}</p>
          </div>
          <div className="column ministry-image-wrapper">
            <Img
              className={`ministry-image ${this.state.hover && "is-hovered"}`}
              sizes={this.props.imageSizes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
