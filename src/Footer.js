import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour > closeHour || hour < openHour ? false : true;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are currently open until {closeHour}:00 hrs. visit us, or order
            online.
          </p>
        </div>
      ) : (
        <div className="order">
          <p>
            We are currently closed, will be open at {openHour}:00 hrs. you can
            order online now.
          </p>
        </div>
      )}
      <button className="btn">Order pizza</button>
    </footer>
  );
}

export default Footer;
