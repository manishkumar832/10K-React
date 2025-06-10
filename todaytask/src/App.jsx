import React from 'react'
import Randomclr from './comp/Randomclr'

import { Routes,Route } from 'react-router-dom'
import Toggle from './comp/Toggle/Toggle'
import Quote from './comp/Quote/Quote'
import Signup from './comp/Signup/Signup'
import Navbar from './Navbar'


function App() {
  return (
    <div>
   <Navbar></Navbar>
      <Routes>
        <Route path='/randomcolour' element={<Randomclr/>}/>
        <Route path='/toggle' element={<Toggle/>}/>
        <Route path='/Quote' element={<Quote/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
