import React from 'react'
import { assets } from '../../assets/assets'

const CreateAccount = () => {
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 '>
      {/* left-side */}
<div>
  <p>Book Appointment</p>
  <p>with 100k+ Trusted Doctors</p>
</div>
<button>Create account</button>





      {/* right-side */}

      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative ' >
        <img src={assets.appointment_img} alt="" />
      </div>


    </div>
  )
}

export default CreateAccount