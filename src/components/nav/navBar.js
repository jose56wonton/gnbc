import React, { Component } from "react";
import NavBarDropDown from "./navBarDropDown";
import NavBarButton from "./navBarButton";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const curr = this.state.isActive;
    this.setState({
      isActive: !curr
    });
  }
  render() {
    return (
      <nav className="navbar is-fixed-top" aria-label="dropdown navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <h1>Good News Bible Church</h1>
            </a>

            <div
              className={
                "burger navbar-burger " +
                (this.state.isActive ? "is-active" : null)
              }
              onClick={this.toggleMenu}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            className={
              "navbar-menu " + (this.state.isActive ? "is-active white-back" : null)
            }
          >
            <div className="navbar-end">
              <NavBarDropDown
                mainText="About"
                mainLink="/about"
                subText={["Beliefs", "Values", "Staff"]}
                subLinks={["about/beliefs","/about/values","/about/staff"]}
              />
              <NavBarDropDown
                mainText="Connect"
                mainLink="/connect"
                subText={[
                  "Groups",
                  "Membership",
                  "Children & Youth",
                  "Volunteer",
                  "Counseling"
                ]}
                subLinks={["/connect/groups","/connect/membership","/connect/youth","/connect/volunteer","/connect/counseling"]}
              />
              <NavBarDropDown
                mainText="Resources"
                mainLink="/resources"
                subText={["Sermons", "Articles"]}
                subLinks={["/resources/sermons","/resources/articles"]}
              />
              <NavBarButton mainText="Contact" mainLink="contact" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
