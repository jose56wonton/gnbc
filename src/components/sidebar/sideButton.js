import React from "react";

export const SideButton = props => {
  return (
    <button
      className={`sidebar-element sidebar-button fade ${props.classes}`}
      activeClassName="fade-active"
      onClick={props.action}    
      name={props.text}  
    >
      {props.text}
    </button>
  );
};

export default SideButton;
