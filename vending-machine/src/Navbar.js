import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to='/'>Options</NavLink>
    </nav>
  );
}

export default Navbar;
