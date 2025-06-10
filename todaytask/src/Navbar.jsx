import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
    

     <Link to="/randomcolour"><span>Randomcolour</span></Link> 
     <Link to="/toggle"><span>Toggle</span></Link> 
     <Link to="/Quote"><span>Quote</span></Link> 
     <Link to="/Signup"><span>Signup</span></Link> 
    </div>
  )
}

export default Navbar
