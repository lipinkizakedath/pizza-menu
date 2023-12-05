import React from "react";

function Pizza(props) {
  return (
    <li className={props.pizza.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.pizza.photo} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <p>{props.pizza.price}</p>
      </div>
    </li>
  );
}

export default Pizza;
