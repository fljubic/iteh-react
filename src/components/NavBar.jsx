import React from "react";
import { BiCart } from "react-icons/bi";

function NavBar() {
  return (
    <div className="navBar">
      <a>My Store</a>
      <div className="card-items">
        <BiCart />
        <p className="cart-num">0</p>
      </div>
    </div>
  );
}

export default NavBar;
