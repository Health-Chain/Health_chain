import React from 'react'

export default function About() {
  return (
    <div className='mx-4 shadow-2xl px-6 pt-10 '>
      <h1 className='font-bold text-gray-600 text-center text-3xl pb-6'>ABOUT <span className='text-gray-950'>US</span></h1>

      <div className='flex md:flex-row gap-6 md:items-start items-center mx-auto flex-col md:gap-14 justify-center '>
<img src="/about.png" alt="" className='md:w-80' />



<div className='text-sm flex md:w-2/5  flex-col gap-4 text-gray-600 '>
<p>Welcome to Health-Chain, your trusted partner in managing your healthcare needs conveniently and efficiently. At Health-Chain, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
<p>Health-Chain is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Health-chain is here to support you every step of the way.</p>
<p className='text-gray-950 font-bold text-lg'>Our Vision</p>
<p>Our vision at HEALTH-CHAIN is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
</div>
</div>

<div className=' mt-14 pb-10 '>
<h3 className='text-center font-bold text-2xl'>WHY <span>CHOOSE US</span></h3>
<div className='text-sm flex justify-center flex-col pt-8 md:flex-row items-center w-4/5 gap-5 md:gap-8 md:w-3/5 mx-auto'>
<div className='border p-5 shadow-2xl rounded about'>
  <h3 className='font-medium text-base pb-2'>EFFICIENCY</h3>
  <p >Streamlined appointment scheduling that fits into your busy lifestyle.</p>
</div>
<div className='border p-5 shadow-2xl rounded about'>
  <h3 className ='font-medium text-base pb-2'>CONVENIENCE</h3>
  <p>Access to a network of trusted healthcare professionals in your area.</p>
</div>
<div className='border p-5 shadow-2xl rounded about'>
  <h3 className ='font-medium text-base pb-2'>PERSONALIZATION</h3>
  <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
</div>

</div>


</div>

</div>

      
    
  )
}
