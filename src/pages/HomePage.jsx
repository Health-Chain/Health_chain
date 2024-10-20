import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MobileNavbar from '../components/Navbar/MobileNav'
import Hero from '../components/Hero/Hero'

const HomePage = () => {
  return (
    <div className='homepage' style={{backgroundColor: "#ffffff", height:"auto"}}>
        <Navbar/>
        {/* <MobileNavbar/> */}
        <Hero/>
    </div>
  )
}

export default HomePage