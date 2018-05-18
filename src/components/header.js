import Link from "gatsby-link";

import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-element strike"
            activeClassName="strike-active"
            exact
            to="/"
          >
            <span>Good News</span>
          </Link>

          <button
            className={`hamburger  hamburger--slider ${
              this.props.burgerActive ? "is-invisible" : null
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

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link
              className="navbar-element strike"
              activeClassName="strike-active"
              to="/about"
            >
              <span>About</span>
            </Link>
            <Link
              className="navbar-element strike"
              activeClassName="strike-active"
              to="/ministry"
            >
              <span>Ministry</span>
            </Link>
            <Link
              className="navbar-element strike"
              activeClassName="strike-active"
              to="/media"
            >
              <span>Media</span>
            </Link>
            <Link
              className="navbar-element strike"
              activeClassName="strike-active"
              to="/contact"
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

// <a
//   role="button"
//   className="navbar-burger"
//   aria-label="menu"
//   aria-expanded="false"
// >
//   <span aria-hidden="true" />
//   <span aria-hidden="true" />
//   <span aria-hidden="true" />
// </a>
