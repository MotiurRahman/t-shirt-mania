import React from "react";
import Cusing from "../Cusin/Cusing";

const Aunty = ({ house }) => {
  return (
    <div>
      <h3>this is aunty</h3>
      <p>
        <small>House:{house}</small>
      </p>
      <section className="flex">
        <Cusing house={house}></Cusing>
        <Cusing house={house}></Cusing>
      </section>
    </div>
  );
};

export default Aunty;
