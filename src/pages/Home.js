import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/engineers-stock.png'
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div 
        className="headerContainer" 
      >
        <h1>DataX LLC.</h1>
        <p>Your trusted source for digital and data solutions</p>
        <Link to="/services">
        <button>Services</button>
        </Link>
      </div>
    </div>
  )
}

export default Home