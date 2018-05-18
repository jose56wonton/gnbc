import React, { Component } from "react";

import SideButton from "./sidebar/sideButton";
import SideLink from "./sidebar/sideLink";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePrimaryNav: "",
      activeNavSection: ""
    };
  }
  link = () => {
    this.props.toggleBurger();
  };
  selectNavSection = event => {
    const { name } = event.currentTarget;
    if (this.state.activeNavSection === name) {
      this.setState({ activeNavSection: "" });
    } else {
      this.setState({ activeNavSection: name });
    }
    console.log(this.state.activeNavSection);
  };
  destructureNavProps = navItems => {
    return navItems.map((ele, i) => {
      return ele.node.frontmatter;
    });
  };
  filterNavItems = (navItems, type) => {
    return navItems.filter(ele => {
      return ele.type === type;
    });
  };
  render() {
    let subNavItems;
    subNavItems = this.destructureNavProps(this.props.navItems);
    subNavItems = this.filterNavItems(subNavItems, this.state.activeNavSection);
    console.log(subNavItems);
    const x = subNavItems.map((ele, i) => {
      return (
        <SideLink
          key={i * Math.random()}
          action={this.link}
          path={`/${ele.path}`}
          text={ele.title}
        />
      );
    });
    return (
      <div
        className={`sidebar-menu ${
          this.props.isNavMenuActive ? "is-active" : ""
        }`}
      >
        <div className="sidebar-content columns">
          <div className="column">
            <SideLink action={this.link} path="/" text="Home" />
            <SideButton action={this.selectNavSection} text="About" />
            <SideButton action={this.selectNavSection} text="Ministry" />
            <SideButton action={this.selectNavSection} text="Media" />
            <SideButton action={this.selectNavSection} text="Contact" />
          </div>
          <div className="column">{x}</div>
        </div>
        <button
          className={`hamburger  hamburger--slider ${
            this.props.isNavMenuActive ? "is-active" : "is-invisible"
          }`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded="true"
          onClick={this.props.toggleBurger}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    );
  }
}

export default SideBar;
