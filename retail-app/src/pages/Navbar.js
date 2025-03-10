import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLogout} className="logout-button">Log Out</button>
    </nav>
  );
};

export default Navbar;
