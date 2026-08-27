import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}