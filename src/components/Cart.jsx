import React from "react";
import OneProduct from "./OneProduct";
import PaymentForm from "./PaymentForm";

const Cart = ({ products }) => {

  const handlePaymentConfirm = (formData) => {
    // Ovde se rukuje sa podacima sa forme
    console.log(formData);
    // Možete ovde postaviti bilo kakav status koji želite da se prikaže nakon potvrđivanja plaćanja
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
      <PaymentForm onConfirm={handlePaymentConfirm}/>
    </div>
  );
};

export default Cart;
