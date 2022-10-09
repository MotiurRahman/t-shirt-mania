import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Amar jonno akta naw</h3>
        <p>tomar jonno akta naw</p>
      </div>
    );
  } else {
    message = <p>Thanks for buying</p>;
  }
  return (
    <div className="cart">
      <h1 className={cart.length === 2 ? "orange" : "purple"}>
        this is cart sumarry: {cart.length}
      </h1>
      <h2 className={`bold ${cart.length === 4 ? "blue" : "yellow"}`}>
        This is cart summary
      </h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>3 jon ke deba</p> : <p>Kino kino</p>}
      <p>And operator</p>
      {cart.length === 2 && <p>Double Item</p>}
      {cart.length === 4 || <p>Charta item na </p>}
    </div>
  );
};

export default Cart;
