import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
          <Link key={i} className="navbar-item" to={this.props.subLinks[i]}>{item}</Link>
        );
      });
    }
  }
  render() {
    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <Link  className="navbar-link" to={this.props.mainLink}>{this.props.mainText}</Link>
        <div className="navbar-dropdown">
          {this.renderSubs()}
        </div>
      </div>
    );
  }
}

export default NavBarDropDown;
