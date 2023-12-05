import React from "react";
import Pizza from "./Pizza";
import pizza from "./pizza.json";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizza.data.map((item) => (
          <Pizza pizza={item} key={item.name} />
        ))}
      </ul>
      
    </main>
  );
}

export default Menu;
