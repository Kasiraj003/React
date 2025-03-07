import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import About from "./About.js";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;