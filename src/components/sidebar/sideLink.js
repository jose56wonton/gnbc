import React from "react";
import Link from "gatsby-link";
export const SideLink = props => {
  return (
    <li>
       <Link
      className={`sidebar-element sidebar-link ${props.classes}`}
      onClick={props.action}
      exact
      to={props.path}
    >
      {props.text}
     </Link>
    </li>
  );
};

export default SideLink;
