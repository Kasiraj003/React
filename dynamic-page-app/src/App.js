import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post'; // Dynamic Post Page
import NotFound from './NotFound'; // 404 Page
import './styles.css'; // Import CSS for styling

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li> {/* Intentional NotFound Trigger */}
          </ul>
        </nav>

        <div className="content">
          <div className="content-box">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post/:id" element={<Post />} /> {/* Dynamic Post Page */}
              <Route path="*" element={<NotFound />} /> {/* 404 Page for Unmatched Routes */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;