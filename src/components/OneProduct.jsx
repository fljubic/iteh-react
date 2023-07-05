import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { BsDash } from "react-icons/bs";

function OneProduct({ product, onAdd }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };
  // console.log(props);
  // function onAdd(title) {
  //   console.log("Dodat proizvod: " + title);
  // }
  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      <button className="btn" onClick={() => onAdd(product.title)}>
        <BiPlusMedical />
      </button>
      <button className="btn">
        <BsDash />
      </button>
    </div>
  );
}

export default OneProduct;
