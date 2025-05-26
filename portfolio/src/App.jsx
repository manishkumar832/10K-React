import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Skill from './Skill.jsx'
import Project from './project.jsx'


function App() {
  return <div id="main">
    <Navbar></Navbar>
    <About></About>
    <Skill></Skill>
    <Project />
  </div>


}

export default App;
