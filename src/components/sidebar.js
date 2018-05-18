import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";

class SideBar extends Component {
  link = () => {
    this.props.toggleBurger();
  };
  render() {
    const subtabs = ["one", "two", "three"];
    const x = subtabs.map((ele,i) => {
      return <Link
        className="sidebar-element strike"
        activeClassName="strike-active"
        onClick={this.link}
        exact
        to={"/"+ ele}
        key={i * Math.random()}
      >
        <span>{ele}</span>
      </Link>;
    });
    console.log(subtabs,x);
    return (
      <div
        className={`sidebar-menu ${
          this.props.isNavMenuActive ? "is-active" : ""
        }`}
      >
        <div className="sidebar-content columns">
          <div className="column">
            <Link
              className="sidebar-element strike"
              activeClassName="strike-active"
              onClick={this.link}
              exact
              to="/"
            >
              <span>GNBC</span>
            </Link>
            <Link
              className="sidebar-element strike"
              activeClassName="strike-active"
              onClick={this.link}
              to="/about"
            >
              <span>About</span>
            </Link>
            <Link
              className="sidebar-element strike"
              activeClassName="strike-active"
              onClick={this.link}
              to="/ministry"
            >
              <span>Ministry</span>
            </Link>
            <Link
              className="sidebar-element strike"
              activeClassName="strike-active"
              onClick={this.link}
              to="/media"
            >
              <span>Media</span>
            </Link>
            <Link
              className="sidebar-element strike"
              activeClassName="strike-active"
              onClick={this.link}
              to="/contact"
            >
              <span>Contact</span>
            </Link>
          </div>
          <div className="column">
            {x}
          </div>          
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
