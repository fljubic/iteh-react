import React from "react";
import { BiCart } from "react-icons/bi";

function NavBar({ cartNum }) {
  // const cartNum = 0;
  return (
    <div className="navBar">
      <a>My Store</a>
      <div className="card-items">
        <BiCart />
        <p className="cart-num">{cartNum}</p>
      </div>
    </div>
  );
}

export default NavBar;
