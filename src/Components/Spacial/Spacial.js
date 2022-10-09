import React, { useContext } from "react";
import { RingContaxt } from "../Grandpa/Grandpa";

const Spacial = () => {
  const [house, setHouse] = useContext(RingContaxt);
  return (
    <div>
      <h4>Spacial</h4>
      <p>Gift: {house}</p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Spacial;
