import React, { Component } from "react";

class NavBarDropDown extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <a className="navbar-item">
        {this.props.mainText}        
      </a>
    );
  }
}

export default NavBarDropDown;
