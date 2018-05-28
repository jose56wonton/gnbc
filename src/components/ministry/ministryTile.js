import Img from "gatsby-image";
import React, { Component } from "react";

class MinistryTile extends Component {

  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className="column is-10 is-offset-1 ministry-tile"
      >
        <div className={`columns is-inverse-touch  is-multiline`}>
          <div className="column is-3 is-12-touch ministry-sidebar">
            {this.props.sideContent && <div><p> Resources <i className="fas fa-book"></i></p>
              <div dangerouslySetInnerHTML={{ __html: this.props.sideContent }} /></div>}
          </div>
          <div className={`column is-9 is-12-touch ministry-content `} dangerouslySetInnerHTML={{ __html: this.props.content }} />
        </div>
      </div>
    );
  }
}

export default MinistryTile;
