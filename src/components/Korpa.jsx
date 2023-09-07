import React from "react";
import OneProduct from "./JedanProizvod";
import PaymentForm from "./FormaPlacanje";

const Cart = ({ products }) => {
  const handlePaymentConfirm = (formData) => {
    console.log(formData);
  };
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
      <PaymentForm onConfirm={handlePaymentConfirm} />
    </div>
  );
};

export default Cart;
