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
    this.setState({ visbleSection: false, activeNavSection: "" })
    this.props.toggleBurger();
  }
  selectNavSection = event => {
    const { name } = event.currentTarget;
    if (this.state.activeNavSection === name) {
      this.setState({ activeNavSection: "", visbleSection: false });
    } else {
      this.setState({ activeNavSection: name, visbleSection: true });
    }
  };
  render() {
    const ministryLinks = this.props.ministryEdges.map(ministry => {
      return( <SideLink action={this.burgerOrLinkClick} path={`/ministry/${ministry.node.path}`} text={ministry.node.title} classes="primary" />)
    })
    return (
      <div
        className={`sidebar-menu ${this.props.isNavMenuActive && "is-active"} `}
      >
        <div className="sidebar-content columns">
          <div className={`column  is-offset-1 is-narrow`}>

            <SideButton action={this.selectNavSection} text="About" classes="primary" />
            {this.state.activeNavSection === "About" && 
              <ul>
                <SideLink action={this.burgerOrLinkClick} path="/about/staff" text="Staff" classes="primary" />
                <SideLink action={this.burgerOrLinkClick} path="/about/cross-culture" text="Cross Culture" classes="primary" />
                <SideLink action={this.burgerOrLinkClick} path="/about/mission" text="Mission" classes="primary" />
                <SideLink action={this.burgerOrLinkClick} path="/about/beliefs" text="Beliefs" classes="primary" />
              </ul>
            }
            <SideButton action={this.selectNavSection} text="Ministry" classes="primary" />
            {this.state.activeNavSection === "Ministry" && 
              <ul>
                {ministryLinks}
              </ul>
            }
            <SideButton action={this.selectNavSection} text="Media" classes="primary" />
            {this.state.activeNavSection === "Media" && 
              <ul>
                <SideLink action={this.burgerOrLinkClick} path="/media" text="Messages" classes="primary" />
                
              </ul>
            }

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

      </div>
    );
  }
}

export default SideBar;

//<div className={`column  is-offset-1 is-narrow ${this.state.visbleSection === true ? "" : "is-hidden-mobile"}`}>{subNavObjects}</div>

// <SideLink action={this.burgerOrLinkClick} path="/media" text="Media" classes="primary" />