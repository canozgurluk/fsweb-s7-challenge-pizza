import React from "react";
import { PizzaData } from "./PizzaData";
;

const Pizza = () => {
 
  return (
    <>
      {PizzaData.map((pizza, i) => (
        <div className="product-name">
          <h3>{pizza.title}</h3>
          <div className="product-features">
            <span id="price">{pizza.price}₺</span>
            <span id="rate">{pizza.rate}</span>
            <span id="comment">({pizza.comment})</span>
          </div>
          <p>{pizza.description}</p>
        </div>
      ))}
    </>
  );
};

export default Pizza;