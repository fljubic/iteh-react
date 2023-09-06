import React, { useState } from "react";
import TextBox from "./TextBox"; // Make sure to import TextBox component if needed

const PaymentForm = ({ onConfirm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      address,
      paymentMethod,
    };
    onConfirm(formData);
    setPaymentSuccess(true);
  };

  return (
    <div className="payment-form">
      <h3>Детаљи плаћања</h3>
      {paymentSuccess ? (
        <p className="success-message">Плаћање успешно завршено!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Име:</label>
            <TextBox
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Унесите име"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Презиме:</label>
            <TextBox
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Унесите презиме"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адреса:</label>
            <TextBox
              id="address"
              type="text"
              name="address"
              placeholder="Унесите адресу"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Начин плаћања:</label>
            <TextBox
              id="paymentMethod"
              type="text"
              name="paymentMethod"
              placeholder="Унесите начин плаћања"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Потврди плаћање</button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
