import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/products" 
          element={isAuthenticated ? <Products /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
