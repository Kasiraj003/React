import React from "react";
import Product1 from "../images/Product1.jpeg"
import Product2 from "../images/Product2.webp"
import Product3 from "../images/Product3.webp"
import Product4 from "../images/Product4.webp"
import Product5 from "../images/Product5.jpeg"

const products = [
  { id: 1, name: "MacBook-Air", price: "Rs.50,000", image: Product1 },
  { id: 2, name: "Google-pixel 9 pro", price: "Rs.55,000", image: Product2 },
  { id: 3, name: "BoAt Headset", price: "Rs.3,000", image: Product3 },
  { id: 4, name: "Converse Sneakers", price: "Rs.5,000", image: Product4 },
  { id: 5, name: "Rayban", price: "Rs.8,000", image: Product5 },
];

const Products = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Item added to cart");
  };

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
