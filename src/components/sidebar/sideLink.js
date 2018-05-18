import React from "react";
import Link from "gatsby-link";
export const SideLink = props => {
  return (
    <Link
      className="sidebar-element sidebar-link strike"
      activeClassName="strike-active"
      onClick={props.action}
      exact
      to={props.path}
    >
      <span>{props.text}</span>
    </Link>
  );
};

export default SideLink;
