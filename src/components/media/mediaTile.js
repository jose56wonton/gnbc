import React, { Component } from "react";
import {navigateTo} from 'gatsby-link';
import { stringToUrl } from "../../utils";


class MediaTile extends Component {
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
  onClick = () => {
    const url = stringToUrl(this.props.title);
    navigateTo(`/media/${url}`);
  }
  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}     
        onClick={this.onClick}   
        className="column is-6-tablet is-10-mobile is-offset-1-mobile"
      >
        <div className="media-tile">
          <div className="media-header">
            <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
          </div>
          <div className="media-center">
            <p>{this.props.excerpt}</p>
          </div>

          <div className="media-footer">
            <p>{this.props.speaker.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaTile;
