import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Speciality from '../components/Speciality/Speciality'
import CreateAccount from '../components/CreateAccount/CreateAccount'

const HomePage = () => {
  return (
    <div className='homepage' style={{backgroundColor: "#ffffff", height:"auto"}}>
        <Navbar/>
        <Hero/>
        <Speciality/>
        <CreateAccount/>
    </div>
  )
}

export default HomePage