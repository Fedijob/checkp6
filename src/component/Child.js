import React from "react";
import { propTypes } from "prop-types";
function Child(props) {
 
  return (
    
    <div>
      <h1 style={{ color: "red" }}>{props.fullName}</h1>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      {props.children}
      {props.handleName(props.fullName)}
    </div>
  );
}
Child.defaultProps = {
  fullName: "This a deault name",
  bio: "This a default bio",
  profession: "This is a default profession",
};
Child.propTypes = {
  fullName: propTypes.string.isRequired,
  bio: propTypes.string.isRequired,
  profession: propTypes.string.isRequired,
  handleName: propTypes.func,
};
export default Child;
