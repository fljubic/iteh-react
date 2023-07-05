import React from "react";
import OneProduct from "./OneProduct";

const Products = () => {
  // const name = "Naziv proizvoda";
  // const desc = "Ovo je malo duzi opis proizvoda.";
  const product = {
    title: "Naziv proizvoda",
    description: "Ovo je malo duzi opis proizvoda.",
  };
  return (
    <div className="all-products">
      <OneProduct product={product} />
      <OneProduct product={product} />
      <OneProduct product={product} />
    </div>
  );
};

export default Products;
