import React, { Component } from "react";
import {navigateTo} from 'gatsby-link';
import { stringToUrl } from "../../utils";
class MessageTile extends Component {
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
    navigateTo(`media/${url}`);
  }
  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}     
        onClick={this.onClick}   
        className="column is-4-desktop is-6-tablet is-12-mobile"
      >
        <div className="media-tile">
          <div className="media-header">
            <h1>{this.props.title}</h1>
            <p>{this.props.date}</p>
          </div>
          <div className="media-center">
            <p>{this.props.excerpt}</p>
          </div>

          <div className="media-footer">
            <p>{this.props.speaker}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageTile;
