import React from "react";

export const SideButton = props => {
  return (
    <button
      className="sidebar-element strike"
      activeClassName="strike-active"
      onClick={props.action}    
      name={props.text}  
    >
      <span name={props.text}>{props.text}</span>
    </button>
  );
};

export default SideButton;
