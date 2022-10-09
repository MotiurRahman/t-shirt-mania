import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
export const RingContaxt = createContext("Matir Ring");
export const MoneyContext = createContext(555);

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(555);
  return (
    <RingContaxt.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2>Grand pad</h2>
          <section className="flex">
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContaxt.Provider>
  );
};

export default Grandpa;
