import React from "react";
import Pizza from "./Pizza";
import pizza from "./pizza.json";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizza.data.length > 0 && (
        <p>
          Authentic italian cusine. 6 creative dishes to choose from. All from
          our stone over, all organic, all delicious.
        </p>
      )}
      <ul className="pizzas">
        {pizza.data.map((item) => (
          <Pizza pizza={item} key={item.name} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
