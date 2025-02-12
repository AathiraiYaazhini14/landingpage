import React from 'react'
import { Link, Links } from 'react-router-dom'
import Eye from '../assets/eye.webp'
import Face from '../assets/face.webp'
import Lips from '../assets/lip.jpg'
import Nails from '../assets/nails.webp'
import Skincare from '../assets/skincare.webp'
import Brush from '../assets/brush.jpg'
import './Home.css'
import Homebig from '../assets/homebig.webp'

const Home = () => {
  return (
  <div>
    <div className='home'>
      <Link to='/products'><img className='eye'src={Eye}/></Link>
      <Link to='/products'><img className='face' src={Face}/></Link>
      <Link to='/products'><img className='lips' src={Lips}/></Link>
      <Link to='/products'><img className='nails' src={Nails}/></Link>
      <Link to='/products'><img className='skincare' src={Skincare}/></Link>
      <Link to='/products'><img className='brush' src={Brush}/></Link>
      </div>
    <div>
      <Link to='/products'><img className='homebig'src={Homebig} /></Link>
    </div>


   
    </div>
  )
}

export default Home
