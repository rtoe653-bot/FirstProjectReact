import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Auth from './pages/auth'


import Education from './pages/Education'
import Main from './pages/Main'
import ProductCard from './components/blocks/ProductCard'
function App() {
 

  return (
  <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/edu' element={<Education/>} />
    <Route path='/product/:id' element={<CartPage/>} />
    <Route path='/auth' element={<Auth/>} />

  </Routes>
  )
}


export default App
