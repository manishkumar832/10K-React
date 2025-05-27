import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Front from './Front.jsx'
import Proj from './Proj.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Map from './Map.jsx'
import Footer from './Footer.jsx'

function App(){
  return <div id="main">
    <Navbar />
    <Front></Front>
    <Proj></Proj>
    <About></About>
    <Contact/>
    <Map/>
    <Footer/>
  </div>
}
export default App;