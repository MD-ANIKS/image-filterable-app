import React from 'react';
import {
  NavLink
} from "react-router-dom";


export default function Header() {
  return (
   <>
    <header>
      <div className="logo">
        <h1>ANIK</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink  to="/">Home</NavLink></li>
          <li><NavLink  to="/page">Page</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink  to="/search">Search</NavLink></li>
        </ul>
      </nav>
    </header>
   </>
  )
}
