import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBarDropDown extends Component {
  render() {
    return (
      <Link className="navbar-item" to={this.props.mainLink}>
        {this.props.mainText}
      </Link>
    );
  }
}

export default NavBarDropDown;
