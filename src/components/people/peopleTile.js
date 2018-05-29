import Img from "gatsby-image";
import React, { Component } from 'react';
import { navigateTo } from "gatsby-link"
const stringToUrl = require('../../utils').stringToUrl;

class PeopleTile extends Component {
 
  navigateToProfile = () => {
    navigateTo(this.props.type+"/"+stringToUrl(this.props.name));
  }
  render() {
    return (
      <div 
      onClick={this.navigateToProfile}
      className={`column is-4-desktop is-12-mobile people-tile`}>
      <div className="people-cover">
        <div className="people-image-wrapper">
          <Img
            className={`people-image`}
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