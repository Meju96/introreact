import React from 'react';
// import './Header.css'; // Optional: For custom styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Product Shop</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button type="submit">Search</button>
      </div>
    </header>
  );
}

export default Header;
