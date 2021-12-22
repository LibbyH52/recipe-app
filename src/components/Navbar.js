import React from 'react'
<<<<<<< HEAD
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
=======
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>  {
  return (
    <nav className="navbar">
      <h1 className="main-heading"> The Impatient Chef</h1>
      <ul className="nav-list">
        <li className="nav-item"><Link to='/'>About</Link></li>
        <li className="nav-item"><Link to='/Recipes'>Recipes</Link></li>
>>>>>>> 504d1b8a8825d8daa1cdd32081f6bf2acb3f3a10
      </ul>
    </nav>
  )
}
export default Navbar;
