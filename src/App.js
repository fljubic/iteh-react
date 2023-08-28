import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { Home } from "./components/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import brojanica from "./components/images/brojanica2.jpeg";
import ikona from "./components/images/ikona.jpg";
import krstic from "./components/images/krstic.jpg";

function App() {
  // const prom = <h3>Cao svima</h3>;
  // let cartNum = 0;
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: "Бројаница",
      description:
        "Плетена бројаница за руку са металним крстићем, плаве боје.",
      amount: 0,
      price: "350,00 рсд",
      image: brojanica,
    },
    {
      id: 2,
      title: "Урамљена славска икона",
      description:
        "Славска икона Свети Никола, у златном раму.",
      amount: 0,
      price: "5.000,00 рсд",
      image: ikona,
    },
    {
      id: 3,
      title: "Дрвени крстић за врат",
      description:
        "Дрвени крстић са занимљивом шаром",
      amount: 0,
      price: "150,00 рсд",
      image: krstic,
    },
  ]);
  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }
  function addProduct(title, id) {
    console.log("Dodat je proizvod: " + title);
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} onAdd={addProduct} />}
        />
        <Route path="/cart*" element={<Cart products={cartProducts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
