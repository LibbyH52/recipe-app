import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>  {
  return (
    <nav className="navbar">
      <h1 className="main-heading"> The Impatient Chef</h1>
      <ul className="nav-list">
        <li className="nav-item"><Link to='/'>About</Link></li>
        <li className="nav-item"><Link to='/Recipes'>Recipes</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;
