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
        className="column is-12 detail-tile"
      >
        <div className="columns is-inverse-mobile">
          <div className="column is-3 detail-side">
            <h1 className="title-1">
             {this.props.leftTitle}
            </h1>
            <p className="text">{this.props.leftDescription}</p>
          </div>
          <div className="column detail-content">
            <h1 className="title-1">{this.props.rightTitle}</h1>
            <p className="text">{this.props.rightDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
