import React from 'react'
import logo from "../assets/logo.jpeg"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className='navbar h-24 border-b-2'>
      <img src={logo} alt="logo" className='h-16'/>
      <ul className='flex '>
      <li><Link to="">Home</Link></li>
      <li><Link to="">About Us</Link></li>
      <li><Link to="">Applications</Link></li>
      <li><Link to="">Contact Us</Link></li>
       </ul>
    </nav>
  )
}

export default Navbar
