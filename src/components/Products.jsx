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
    <div className="all-products shared-background">
      {products.map((prod) => {
        return (
          <OneProduct product={prod} key={prod.id} onAdd={onAdd} inCart={1} />
        );
      })}
    </div>
  );
};

export default Products;
