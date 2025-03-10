import React from "react";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handlePurchase = () => {
    if (cart.length > 0) {
      alert("Items Purchased Successfully");
      setCart([]);
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>No items in the cart.</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handlePurchase} disabled={cart.length === 0}>Buy Items</button>
    </div>
  );
};

export default Cart;
