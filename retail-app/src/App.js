import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import "./Styles.css"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/products" element={isAuthenticated ? <Products cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />
          <Route path="/contact" element={isAuthenticated ? <ContactUs /> : <Navigate to="/login" />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
