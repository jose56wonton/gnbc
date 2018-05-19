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
 
  burgerOrLinkClick = () => {
    this.setState({visbleSection:false,activeNavSection:""})
    this.props.toggleBurger();
  }
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
          action={this.burgerOrLinkClick}
          path={`/${this.state.activeNavSection}/${ele.path}`}
          text={ele.title}
          classes="secondary"
        />
      );
    });
    asdf.unshift(
      <SideButton 
        key={9000*Math.random()} action={this.switchMenu} text="Back" classes="is-hidden-tablet secondary " />
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
        className={`sidebar-menu is-active`}
      >
        <div className="sidebar-content columns">
          <div className={`column animated fadeInRight is-offset-1 is-narrow ${this.state.visbleSection === false ? "" : "is-hidden-mobile"}`}>
            <SideLink action={this.burgerOrLinkClick} path="/" text="Home" classes="primary" />
            <SideButton action={this.selectNavSection} text="About" classes="primary" />
            <SideButton action={this.selectNavSection} text="Ministry" classes="primary" />
            <SideButton action={this.selectNavSection} text="Media" classes="primary" />
            <SideLink action={this.burgerOrLinkClick} path="/contact" text="Contact" classes="primary" />
          </div>
          <div className={`column animated fadeInRight is-offset-1 is-narrow ${this.state.visbleSection === true ? "" : "is-hidden-mobile"}`}>{subNavObjects}</div>
        </div>
        <button
          className={`hamburger  hamburger--slider is-active`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded="true"
          onClick={this.burgerOrLinkClick}
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
