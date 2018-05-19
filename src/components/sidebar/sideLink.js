import React from "react";
import Link from "gatsby-link";
export const SideLink = props => {
  return (
    <Link
      className={`sidebar-element sidebar-link fade ${props.classes}`}

      activeClassName="fade-active"
      onClick={props.action}
      exact
      to={props.path}
    >
      {props.text}
    </Link>
  );
};

export default SideLink;
