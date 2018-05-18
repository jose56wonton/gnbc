import React, { Component } from "react";

import SideButton from "./sidebar/sideButton";
import SideLink from "./sidebar/sideLink";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visbleSection: false,
      activeNavSection: ""
    };
  }
  link = () => {
    this.props.toggleBurger();
  };
  selectNavSection = event => {
    const { name } = event.currentTarget;
    if (this.state.activeNavSection === name) {
      this.setState({ activeNavSection: "", visbleSection: false });
    } else {
      this.setState({ activeNavSection: name , visbleSection: true});
    }
  };  
  destructureNavProps = (subNavItems) => {
    return subNavItems.map((ele, i) => {
      return ele.node.frontmatter;
    });
  };
  filterNavItems = (subNavItems) => {
    return subNavItems.filter(ele => {
      return ele.type === this.state.activeNavSection;
    });
  };
  
  getLinksFromData = (subNavItems) =>{
    let asdf = subNavItems.map((ele, i) => {
      return (
        <SideLink
          key={i * Math.random()}
          action={this.link}
          path={`/${ele.path}`}
          text={ele.title}
        />
      );
    });
    asdf.unshift(
      <SideButton 
        action={this.switchMenu} text="Back" classes="is-hidden-tablet" />
    )
    return asdf;
  }
  switchMenu = () => {
    this.setState({visbleSection : !this.state.visbleSection})
  }
  render() {
    let subNavItems = this.props.navItems;
    subNavItems = this.destructureNavProps(subNavItems);
    subNavItems = this.filterNavItems(subNavItems);
    const subNavObjects = this.getLinksFromData(subNavItems);
    return (
      <div
        className={`sidebar-menu ${
          this.props.isNavMenuActive ? "is-active" : ""
        }`}
      >
        <div className="sidebar-content columns">
          <div className={`column ${this.state.visbleSection === false ? "" : "is-hidden-mobile"}`}>
            <SideLink action={this.link} path="/" text="Home" />
            <SideButton action={this.selectNavSection} text="About" />
            <SideButton action={this.selectNavSection} text="Ministry" />
            <SideButton action={this.selectNavSection} text="Media" />
            <SideLink action={this.link} path="/contact" text="Contact" />
          </div>
          <div className={`column ${this.state.visbleSection === true ? "" : "is-hidden-mobile"}`}>{subNavObjects}</div>
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
