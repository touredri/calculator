import React from 'react';
import { Link } from 'react-router-dom';
import './calculator.css';

export default function NavBar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <div className="links">
        <Link to="/" className="link">Home </Link>
        <Link to="/calculator" className="link">Calculator </Link>
        <Link to="/quote" className="link">Quote </Link>
      </div>
    </nav>
  );
}
