import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handlePurchase = () => {
    alert("Thank you for the purchase!");
    setCart([]);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map((product) => (
        <div key={product.id} className="cart-item">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={handlePurchase}>Buy Items</button>}
      <button className="logout-btn" onClick={() => {
        setIsAuthenticated(false);
        navigate("/");
      }}>Logout</button>
    </div>
  );
};

export default Cart;