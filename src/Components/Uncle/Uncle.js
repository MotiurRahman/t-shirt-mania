import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>this is uncle</h3>
      <p>
        <small>House:{house}</small>
      </p>
      <p>Money:{money}</p>
    </div>
  );
};

export default Uncle;
