import React from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
