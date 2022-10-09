import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { _id, index, price, picture, name, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h1>Name:{name}</h1>
      <p>Price:{price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
    </div>
  );
};

export default TShirt;
