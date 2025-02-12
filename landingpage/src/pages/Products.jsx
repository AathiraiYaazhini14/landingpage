import React from 'react'
import eyeshadow from '../assets/eyeshadow.webp'
import foundation from '../assets/foundation.jpg'
import lipstick from '../assets/lipstick.jpg'
import nailpolish from '../assets/nailpolish.jpg'
import './Products.css'

const Products = () => {
  return (
    <div>
      <img src={eyeshadow} className='eyeshadow'/>
      <img src={foundation} className='foundation'/>
      <img src={lipstick} className='lipstick'/>
      <img src={nailpolish} className='nailpolish'/>
    </div>
  )
}

export default Products
