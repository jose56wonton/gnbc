import React, { Component } from "react";
import NavBarDropDown from "./navBarDropDown";
import NavBarButton from './navBarButton';
class Navbar extends Component {
  
  render() {
    return (
      <nav
        className="navbar is=transparent"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <div class="navbar-menu">
          <div class="navbar-start">
            
          </div>

          <div class="navbar-end">
            <NavBarDropDown mainText="About" subText={["Beliefs","Values","Staff"]} />
            <NavBarDropDown mainText="Connect" subText={["Groups", "Membership","Children & Youth","Volunteer","Counseling"]} />
            <NavBarDropDown mainText="Resources" subText={["Sermons", "Articles"]} />
            <NavBarButton mainText="Contact"  />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
