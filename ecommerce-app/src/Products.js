import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: "Rs.49,999", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FLenovo-IdeaPad-Warranty-Platinum-81X800LGIN%2Fdp%2FB0B2RBP83P&psig=AOvVaw3iNwSjmrHb5aMP6GFRVtdg&ust=1741259541857000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCgrrbn8osDFQAAAAAdAAAAABAE" },
  { id: 2, name: "Smartphone", price: "Rs.39,999", image: "https://www.google.com/imgres?q=iphone%2015&imgurl=https%3A%2F%2Finspireonline.in%2Fcdn%2Fshop%2Ffiles%2FiPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg%3Fv%3D1694605206%26width%3D1920&imgrefurl=https%3A%2F%2Finspireonline.in%2Fproducts%2Fiphone-15-mtp13hn-a&docid=gSCs5LDqO6-ngM&tbnid=y8yc6buT_qkTHM&vet=12ahUKEwjz-8vN5_KLAxVxR2wGHWX0JBkQM3oECHUQAA..i&w=1920&h=1920&hcb=2&ved=2ahUKEwjz-8vN5_KLAxVxR2wGHWX0JBkQM3oECHUQAA" },
  { id: 3, name: "Headphones", price: "Rs.2,499", image: "https://www.google.com/imgres?q=boat%20headphones&imgurl=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2020%2F10%2FJO%2FKD%2FSB%2F45828019%2F4-500x500.png&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fboat-rockerz-510-headphones-22671345897.html&docid=LL7OFimVASHLHM&tbnid=o3nkeZ5RAR_ZTM&vet=12ahUKEwifmOXg5_KLAxV3SmwGHcTqBMwQM3oFCIcBEAA..i&w=477&h=500&hcb=2&ved=2ahUKEwifmOXg5_KLAxV3SmwGHcTqBMwQM3oFCIcBEAA" }
];

function Products() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button className="logout-btn" onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Products;
