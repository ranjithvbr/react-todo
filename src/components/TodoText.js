import React from "react";

export default props => {
  return props.strike ? <strike>{props.todoText}</strike> : <span>{props.todoText}</span>;
};
