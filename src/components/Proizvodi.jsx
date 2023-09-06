import React from "react";
import OneProduct from "./JedanProizvod";

const Products = ({ products, onAdd, izbaci }) => {
  return (
    <div className="all-products shared-background">
      {products.map((prod) => {
        return (
          <OneProduct
            product={prod}
            key={prod.id}
            onAdd={onAdd}
            izbaci={izbaci}
            inCart={1}
          />
        );
      })}
    </div>
  );
};

export default Products;
