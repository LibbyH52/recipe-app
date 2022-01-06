import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>  {
  let navigate = useNavigate(); 
  return (
    <nav className="navbar">
      <h1 className="main-heading">
        <Link to='/'>The Impatient Chef</Link>
      </h1>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to='/'>About</Link>
        </li>
        <li className="nav-item" onClick={()=> navigate('/Recipes')}>
          <Link to='/Recipes'>Recipes</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;
