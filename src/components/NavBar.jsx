import React from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Песма леда и ватре
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/products" className="nav-link">
                Продавница
              </Link>
              <Link to="/" className="nav-link">
                Почетна страна
              </Link>

              <Link to="/cart" className="cart-link">
                <p className="cart-num" style={{ marginLeft: 1000 }}>
                  {cartNum}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="left-links">
        <Link to="/products" className="nav-link">
          Продавница
        </Link>
        <div className="divider"></div>
        <Link to="/" className="nav-link">
          Почетна страна
        </Link>
      </div>
      <div className="right-links">
        <Link to="/cart" className="cart-link">
          <BiCart />
        </Link>
        <p className="cart-num">{cartNum}</p>
      </div> */}
    </div>
  );
}

export default NavBar;
