import React from "react";

//Just stateless component show the text with strike or show normally based on strike value
export default props => {
  return props.strike ? <strike>{props.todoText}</strike> : <span>{props.todoText}</span>;
};
 