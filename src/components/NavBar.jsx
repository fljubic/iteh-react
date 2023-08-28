import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <div className="left-links">
        <Link to="/products" className="nav-link">Продавница</Link>
        <div className="divider"></div>
        <Link to="/" className="nav-link">Почетна страна</Link>
      </div>
      <div className="right-links">
        <Link to="/cart" className="cart-link">
          <BiCart />
        </Link>
        <p className="cart-num">{cartNum}</p>
      </div>
    </div>
  );
}

export default NavBar;
