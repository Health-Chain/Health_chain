import React from 'react'
import './Hero.css'
import Doctors from '../../assets/doctors.png'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="banner">

            <div className="text">
                <h1>Book Appointment 
                With Trusted Doctors</h1>
                <p><span></span>Simply browse through our extensive list of trusted doctors, 
                schedule your appointment hassle-free.</p>
                <button>Book appoinment arrow</button>
            </div>

            <div className="image">
                <img src={Doctors} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero