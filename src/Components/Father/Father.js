import React from "react";
import Brother from "../Brothre/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h3>this is father</h3>
      <p>
        <small>House:{house}</small>
      </p>
      <section className="flex">
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
