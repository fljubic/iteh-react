import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="background-img"></div>
      <div className="content">
        <h1>Добродошли на наш сајт!</h1>
        <h3>Нудимо вам црквене производе по најповољнијим ценама!</h3>
        <Link to="/products" className="btn">
          Погледајте наше производе
        </Link>
      </div>
    </div>
  );
};
