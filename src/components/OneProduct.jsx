import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { BsDash } from "react-icons/bs";

function OneProduct() {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">Product name</h3>
        <p className="card-text">This is description of the products.</p>
      </div>
      <button className="btn">
        <BiPlusMedical />
      </button>
      <button className="btn">
        <BsDash />
      </button>
    </div>
  );
}

export default OneProduct;
