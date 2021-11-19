import React from 'react'
import './Navbar.css'

const Navbar = () =>  {
  return (
    <nav className="navbar">
      <h1 className="main-heading"> The Impatient Chef</h1>
      <ul className="nav-list">
        <li className="nav-item">About</li>
        <li className="nav-item">Recipes</li>
      </ul>
    </nav>
  )
}
export default Navbar;
