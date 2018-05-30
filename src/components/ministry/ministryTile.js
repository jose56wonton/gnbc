import Img from "gatsby-image";
import React, { Component } from "react";

class MinistryTile extends Component {

  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className="column is-12 ministry-tile"
      >
        <div className={`columns is-inverse-touch  is-multiline`}>
          <div className="column is-offset-1 is-3 is-10-touch is-offset-1-touch ministry-sidebar">
            {this.props.sideContent && <div><h3> Resources <i className="fas fa-book"></i></h3>
              <div dangerouslySetInnerHTML={{ __html: this.props.sideContent }} /></div>}
            {this.props.sideList && <div><h3> Leadership <i className="fas fa-user"></i></h3><ul>{this.props.sideList} </ul></div>}
          </div>
          <div className={`column is-7 is-10-touch is-offset-1-touch ministry-content `} dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </div>
      </div>
    );
  }
}

export default MinistryTile;
