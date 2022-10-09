import React from "react";
import Spacial from "../Spacial/Spacial";

const Myself = ({ house }) => {
  return (
    <div>
      <h3>My Self</h3>
      <p>
        <small>House:{house}</small>
      </p>
      <section>
        <Spacial></Spacial>
      </section>
    </div>
  );
};

export default Myself;
