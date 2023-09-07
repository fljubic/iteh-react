import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { BsDash } from "react-icons/bs";

function OneProduct({ product, onAdd, izbaci, inCart }) {
  const stil = { margin: 1 + "em", borderStyle: "dotted" };

  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
      <img
        className={
          inCart === 1
            ? "card-img-top product-image"
            : "card-img-left product-image"
        }
        src={product.image}
        alt="Neka slika"
      />
      <div className="card-body">
        {/* <img src={product.image} alt="Neka slika" /> */}
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price}</p>
      </div>
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BiPlusMedical />
          </button>
          <button
            className="btn"
            onClick={() => izbaci(product.title, product.id)}
          >
            <BsDash />
          </button>
        </>
      ) : (
        <h4>Количина: {product.amount}</h4>
      )}
    </div>
  );
}

export default OneProduct;
