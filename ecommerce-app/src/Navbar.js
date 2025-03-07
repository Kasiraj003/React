import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setIsAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </div>
      <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>Logout</button>
    </nav>
  );
};

export default Navbar;