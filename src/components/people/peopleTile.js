import Img from "gatsby-image";
import React, { Component } from 'react';
import { navigateTo } from "gatsby-link"
const stringToUrl = require('../../utils').stringToUrl;

class PeopleTile extends Component {
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
  navigateToProfile = () => {
    navigateTo(this.props.pathPrefix+stringToUrl(this.props.name));
  }
  render() {
    return (
      <div 
      onClick={this.navigateToProfile}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave} 
      className={`column is-6-desktop is-12-mobile people-tile`}>
      <div className="people-cover">
        <div className="people-image-wrapper">
          <Img
            className={`people-image ${this.state.hover && "is-hovered"}`}
            sizes={
              this.props.image.sizes
            }
          />
        </div>
      </div>
      <div className="people-content">        
        <h3 className="title-1">
          {this.props.name}
        </h3>        
      </div>
    </div>
    );
  }
}

export default PeopleTile;