import React from 'react'
import './CreateAccount.css'
import CreateAccountImage from "../../assets/appointment-doc-img.png"

const CreateAccount = () => {
  return (
    <div className='CreateAccount'>
        <div className="text">
            <h2>Book Appointment 
            With 100+ Trusted Doctors </h2>
            <button>Create Account</button>
        </div>
        <div className="image">
            <img src={CreateAccountImage} alt="" />
        </div>
    </div>
  )
}

export default CreateAccount