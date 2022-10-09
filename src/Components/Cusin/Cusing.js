import React from "react";
import Friend from "../Friend/Friend";

const Cusing = ({ house }) => {
  return (
    <div>
      <h4>cusin</h4>
      <p>
        <small>House:{house}</small>
        <Friend></Friend>
      </p>
    </div>
  );
};

export default Cusing;
