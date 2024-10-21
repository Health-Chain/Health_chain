import React from 'react'
import './Speciality.css'
import GeneralPhysician from '../../assets/Group 4134.png'
import Gynecologist from '../../assets/Group 4128.png'
import Dermatologist from '../../assets/Group 4129.png'
import Pediatrician from '../../assets/Group 4132.png'
import Neurologist from '../../assets/Group.png'
import Gastro from '../../assets/Mask group.png'

const Speciality = () => {
  return (
    <div className='Speciality'>
        <h2>Find by Speciality</h2>
        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className="scroll-box">
            <ul>
               <span>
            <div className="profession"><a href="#"><img src={GeneralPhysician} alt="" /></a></div>
            <h3>medical doctor</h3>
            </span>

            <span>
            <div className="profession"><a href="#"><img src={Gynecologist} alt="" /></a></div>
            <h3>medical doctor</h3>
            </span>

            <span>
            <div className="profession"><a href="#"><img src={Dermatologist} alt="" /></a></div>
            <h3>medical doctor</h3>
            </span>

            <span>
            <div className="profession"><a href="#"><img src={Pediatrician} alt="" /></a></div>
            <h3>medical doctor</h3>
            </span>

            <span>
            <div className="profession"><a href="#"><img src={Neurologist} alt="" /></a></div>
            <h3>medical doctor</h3>
            </span>

            <span>
            <div className="profession"><a href="#"><img src={Gastro} alt="" /></a></div>
            <h3>medical doctor</h3>
            </span>
            </ul>
        </div>
    </div>
  )
}

export default Speciality