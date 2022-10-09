import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>sister</h3>
      <p>
        <small>House:{house}</small>
      </p>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Set Money</button>
    </div>
  );
};

export default Sister;
