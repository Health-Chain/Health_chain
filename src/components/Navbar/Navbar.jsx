import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">logo</div>


        <ul>
            <li className='active'>Home</li>
            <li>Health Service</li>
            <li>Insurance and Records</li>
            <li>About us</li>
            <li>Admin Panel</li>
        </ul>

        <button>Login/Sign Up</button>
    </nav>
  )
}

export default Navbar;
