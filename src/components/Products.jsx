import React from "react";
import OneProduct from "./OneProduct";

const Products = ({ products, onAdd }) => {
  // const name = "Naziv proizvoda";
  // const desc = "Ovo je malo duzi opis proizvoda.";
  // const product = {
  //   title: "Naziv proizvoda",
  //   description: "Ovo je malo duzi opis proizvoda.",
  // };

  return (
    <div className="all-products">
      {products.map((prod) => {
        return <OneProduct product={prod} key={prod.id} onAdd={onAdd}/>
      })}
      {/* <OneProduct product={products[0]} />
      <OneProduct product={products[1]} />
      <OneProduct product={products[2]} /> */}
    </div>
  );
};

export default Products;
