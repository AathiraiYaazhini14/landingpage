import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav'>
      <h1>The Urban GLAM</h1>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/products'><li>Products</li></Link>
        
      </ul>
      <Link to='/contact'><button>Contact Us</button></Link>
    </div>
  )
}

export default Navigation
