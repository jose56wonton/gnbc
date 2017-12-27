import React, { Component } from "react";

class NavBarDropDown extends Component {
  constructor(props) {
    super(props);
    this.renderSubs = this.renderSubs.bind(this);
  }
  renderSubs(){
    if(!this.props.subText)
      return "";
    else{
      return this.props.subText.map((item,i) =>{
        return(
          <a key={i} className="navbar-item">{item}</a>
        );
      });
    }
  }
  render() {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">{this.props.mainText}</a>

        <div className="navbar-dropdown">
          {this.renderSubs()}
        </div>
      </div>
    );
  }
}

export default NavBarDropDown;
