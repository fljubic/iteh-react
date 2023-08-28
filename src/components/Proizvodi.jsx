import React from "react";
import OneProduct from "./JedanProizvod";

const Products = ({ products, onAdd, izbaci }) => {
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
          <OneProduct product={prod} key={prod.id} onAdd={onAdd} izbaci={izbaci} inCart={1} />
        );
      })}
    </div>
  );
};

export default Products;
