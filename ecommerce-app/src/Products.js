import React from "react";

const products = [
  { id: 1, name: "Laptop", price: "Rs.49,999", image: "/Product1.jpeg" },
  { id: 2, name: "Smartphone", price: "Rs.39,999", image: "/Product2.webp" },
  { id: 3, name: "Headphones", price: "Rs.2,499", image: "/Product3.webp" }
];

const Products = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;