import React from 'react'
import Navbar from './comp/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './comp/Product/Product'
import Recipe from './comp/Recipe/Recipe'
import User from './comp/User/User'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/Product' element={<Product></Product>}></Route>
        <Route path='/recipe' element={<Recipe/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </div>
  )
}

export default App

