import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <h1>Dummy Data</h1>
    <div className="navlinks">
    <Link to="/recipe"><span>Recipe</span></Link>  
      <Link to="/Product"><span>Product</span></Link>
      <Link to="User"><span>User</span></Link>
      </div>
    </div>
  )
}

export default Navbar
