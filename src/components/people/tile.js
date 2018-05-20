import Img from "gatsby-image";
import React, { Component } from 'react';

class Tile extends Component {
  constructor(props){
    super(props);
    this.state = { 
      hover: false
    }
  }
  onMouseLeave = () =>{
    this.setState({
      hover: false
    })
  }
  onMouseEnter = () =>{
    this.setState({
      hover: true
    })
  }
  render() {
    return (
      <div 
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave} 
      className={`column is-6-desktop is-12-mobile people-tile`}>
      <div className="people-cover">
        <div className="people-image-wrapper">
          <Img
            className={`people-image ${this.state.hover && "is-hovered"}`}
            sizes={
              this.props.imageSizes
            }
          />
        </div>
      </div>
      <div className="people-content">
        <h2 className="title-2">
          {this.props.title}
        </h2>
        <h1 className="title-1">
          {this.props.name}
        </h1>
        <p className="text">
          {this.props.description}
        </p>
      </div>
    </div>
    );
  }
}

export default Tile;