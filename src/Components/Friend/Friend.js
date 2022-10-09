import React, { useContext } from "react";
import { RingContaxt } from "../Grandpa/Grandpa";

const Friend = () => {
  const [house, setHouse] = useContext(RingContaxt);
  return (
    <div>
      <h3>Friend</h3>
      <button onClick={() => setHouse(house - 1)}>Decrease</button>
    </div>
  );
};

export default Friend;
