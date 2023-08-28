import React from "react";
import OneProduct from "./OneProduct";
import PaymentForm from "./PaymentForm";

const Cart = ({ products }) => {
  return (
    <div className="cart-container">
      <div className="background-img"></div>
      <div className="products-list">
        {/* Prikaz proizvoda u korpi */}
        <h3>Ваша корпа:</h3>
        {products.map((prod) => {
          return <OneProduct product={prod} key={prod.id} inCart={0} />;
        })}
      </div>
      <PaymentForm />
    </div>
  );
};

export default Cart;
