// DoctorDetails.jsx
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';




const doctors = [
  { id: 1, src: '/bg.png' ,  name: 'Dr. Andy Williams ', skill:'MBBS - Gynecologist ' ,icon:'/verify.png ',
     text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
       year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$32 ',
  booking:'Booking slots ', category: 'Category 1',
   time6:' 01:00pm',time5:'03:30 pm',time4:'08:20 am',time3:'12:00 pm',time2:'10:40 am',time1:'09:30 am',
   button:'Book appointment ',
   related:'Related Doctors ',     
   related2:'Simply browse through our extensive list of trusted doctors.'
   },
   { id: 2, src: '/bg0.png' , name: 'Dr. Andrew Patricks ', skill:'MBBS - Dermatologist'
    ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$45 ',
booking:'Booking slots ',  category: 'Category 2',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 08:00 am',time5:' 06:00 pm',time4:' 08:50 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:20 am',
    button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'

   },
   { id: 3, src: '/bg1.png' ,  name: 'Dr. Zoe Kelly  ', skill:'MBBS - General physician ' 
    ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis an effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensivemedical care focusing on preventive mediine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$26 ', 
booking:'Booking slots ',  category: 'Category 3',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 08:40 am',time5:' 06:00 pm',time4:' 08:10 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 am',
    button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'

   },
   { id: 4, src:'/bg2.png' ,  name: ' Dr. Ava Mitchell', skill:'MBBS - Pediatricians ' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
       year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$60',
  booking:'Booking slots ', category: 'Category 4',
   day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
   day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
   time6:' 08:00 am',time5:' 06:00 pm',time4:' 08:50 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:10 am',
  button:'Book appointment ',
   related:'Related Doctors ',
   related2:'Simply browse through our extensive list of trusted doctors.'
   },
  { id: 5, src: '/bg3.png',  name: 'Dr. Jeffrey King ', skill:' MBBS - Gynecologist' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensivemedical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
       year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$10 ',
  booking:'Booking slots ', category: 'Category 5',
   day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
   day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
   time6:' 09:40 am',time5:' 06:00 pm',time4:' 08:30 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 am',
    button:'Book appointment ', 
   related:'Related Doctors ',
   related2:'Simply browse through our extensive list of trusted doctors.'
  },
  { id: 6, src: '/bg4.png', name: 'Dr. Christopher', skill:'MBBS - Dermatologist ' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensivemedical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
       year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$49 ',
  booking:'Booking slots ',
   day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
   day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
   time6:' 11:00 am',time5:' 06:00 pm',time4:' 10:00 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 am',
    button:'Book appointment ',
   related:'Related Doctors ', category: 'Category 6',
   related2:'Simply browse through our extensive list of trusted doctors.'
  },
 { id: 7, src: '/bg5.png',  name: 'Dr. Richard James ', skill:'MBBS - Neurologist ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$34 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:'  11:00 am',time5:'  09:00 pm',time4:'  08:30 am',time3:'  08:50 am',time2:'  04:00 pm',time1:'  08:40 am',
 button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },
 { id: 8, src: '/bg6.png' ,  name: ' Dr. Emily Larson', skill:' MBBS - Gynecologist' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$55 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:'  11:00 am',time5:' 03:00 pm',time4:'  08:30 am',time3:' 08:50 am',time2:'  11:00 am',time1:'  09:00 am',
 button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
},
  { id: 9, src:'/bg7.png' ,  name: 'Dr. Sarah Patel ', skill:'MBBS - Gastroenterologist' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering  comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
       year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$15 ',
  booking:'Booking slots ',
   day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
   day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
   time6:'  11:00 am',time5:'  08:40 am',time4:'  04:00 pm',time3:' 02:30 pm',time2:'  09:00 am',time1:' 08:00 am',
   button:'Book appointment ',
   related:'Related Doctors ',
   related2:'Simply browse through our extensive list of trusted doctors.'
  },
 { id: 10, src:'/bg8.png' ,  name: 'Dr. Amelia Hill ', skill:'MBBS - Pediatricians ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$43 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:'  01:00 pm',time5:'  03:00 pm',time4:'  10:00am',time3:'  09:00 am',time2:'  08:50 am',time1:'  08:00 am',
 button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },
{ id: 11, src:'/bg9.png' ,  name: 'Dr. Ryan Martinez ', skill:'MBBS - Dermatologist ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$22 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 11:00 am',time5:' 06:00 pm',time4:' 08:00 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:20 am',
    button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },
{ id: 12, src:'/bg11.png' ,  name: ' Dr. Jennifer Garcia', skill:'MBBS - Pediatricians ' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering  comprehensive medical care, focusing on preventive medicine, early diagnosis and  effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive   medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$33 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 11:00 am',time5:' 06:00 pm',time4:' 08:30 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 am',
   button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
},
{ id: 13, src:'/bg1.png' ,  name: 'Dr. Andy Williams ', skill:'MBBS - Neurologist ' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering  comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive   medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$10 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 10:00 am',time5:' 06:00 pm',time4:' 08:00 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:20 am',
   button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
},
{ id: 14, src:'/bg6.png' ,  name: ' Dr. Ava Mitchell', skill:'MBBS - General physician ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering  comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$45 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 06:00 am',time5:' 06:00 pm',time4:' 08:00 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  07:00 am',
    button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },
{ id: 15, src:'/.png' ,     name: 'Dr. Jeffrey King ', skill:'MBBS - Gynecologist' ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and  effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$23 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 07:00 am',time5:' 06:00 pm',time4:' 08:40 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 am',
    button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
},
 { id: 16, src:'/bg8.png' ,  name: 'Dr. Emily Larso ', skill:'MBBS - Gastroenterologist ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and  effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$63 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 08:30 am',time5:' 06:00 pm',time4:' 08:30 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  03:00 Pm',
 button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },
 { id: 17, src: '/bg5.png',  name: 'Dr. Richard James ', skill:'MBBS - Pediatricians ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$44 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 08:00 pm',time5:' 06:00 pm',time4:' 07:00 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:50 am',
    button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 ,icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and  effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
    year:'4 Years ', about:'About ', icon2:'faCircleExclamation ', appoint:'Appointment ', amount:'$23 ',
booking:'Booking slots ',
day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
time6:' 04:00 pm',time5:' 06:00 pm',time4:' 08:00 pm',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 am',
   button:'Book appointment ',
related:'Related Doctors ',
related2:'Simply browse through our extensive list of trusted doctors.'
},
 { id: 18, src: '/bg6.png' , name: 'Dr. Zoe Kelly ', skill:'MBBS - Dermatologist',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$28 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 10:00 am',time5:' 06:00 pm',time4:' 11:40 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  08:00 pm',
   button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },
  { id: 19, src:'/bg7.png' ,  name: 'Dr. Sarah Patel ', skill:'MBBS - Neurologist',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering  comprehensive medical care, focusing on preventive medicine, early diagnosis and  effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
       year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$43 ',
  booking:'Booking slots ',
   day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
   day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
   time6:' 08:50 am',time5:' 06:00 pm',time4:' 08:00 pm',time3:'02:00 pm',time2:'  09:00 am',time1:'  11:00 am',
  button:'Book appointment ',
   related:'Related Doctors ',
   related2:'Simply browse through our extensive list of trusted doctors.'
   },
 { id: 20, src:'/bg8.png' , name: 'Dr. Jennifer Garcia ', skill:'MBBS - Gastroenterologist ',icon:'/verify.png ', text:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive  medical care focusing on preventive medicine, early diagnosis, and effective treatment strategies ',
     year:'4 Years ', about:'About ', icon2:faCircleExclamation , appoint:'Appointment ', amount:'$43 ',
booking:'Booking slots ',
 day1:'TUE ', week1:'24 ', day2:'WED ', week2:'23 ', day3:'THU ', week3:'24 ',
 day4:'FRI ', week4:'25 ', day5:'SAT ', week5:'26 ', day6:'MON', week6:'27 ',
 time6:' 08:00 am',time5:' 06:00 pm',time4:' 11:00 am',time3:'02:00 pm',time2:'  09:00 am',time1:'  12:00 pm',
   button:'Book appointment ',
 related:'Related Doctors ',
 related2:'Simply browse through our extensive list of trusted doctors.'
 },


// Add more images if necessary  
 

];

function DoctorsDetails() {
  const { id } = useParams(); // Get doctor ID from URL
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const [selectedCategory, setSelectedCategory] = useState('Category 1');

  const handleNavbarClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter images based on selected category
  const filteredImages = doctors.filter(
    (image) => image.category === selectedCategory
  );

 
  
  return (
    
    <div className=' mt-12'>
      {doctor ? (
        <div>
           <div className='md:px-8 px-6 '>
<div className='flex items-center md:items-start justify-center md:flex-row flex-col md:gap-8'>
<div>
<img src={doctor.src} className='bg-blue shadow-2xl rounded-md' />
</div>
<div className='md:w-96'>
<div className='bg-white p-8 md:p-12 shadow-2xl   rounded-md'>
<div className='flex items-center gap-3 mb-3'>
<h2 className='font-bold text-2xl'>{doctor.name}</h2>
<img src={doctor.icon}  className='w-10 h-10' alt="" />
</div>
          <p className='flex flex-col md:flex-row md:items-center font-semibold mb-3 text-gray-900'>{doctor.skill} <span className='text-gray-500 md:mx-3 py-2 px-3 md:mt-0 mt-2 border rounded-full text-sm'>{doctor.year}</span></p>
         <h5 className=' text-gray-900 font-medium text-lg'>{doctor.about} <FontAwesomeIcon icon={doctor.icon2} className='mr-2 w-3' />
         </h5> 
         <p className='text-sm  text-gray-800'>{doctor.text}</p>
         <h5 className='pt-2 font-bold text-gray-600'>{doctor.appoint} : <span className='text-gray-950'>{doctor.amount} </span></h5> 

</div>
          


<div>
<h5 className='font-bold pt-4'>{doctor.booking}</h5>
<div className='date'>


<ul className='grid grid-cols-5 md:grid-cols-6 text-sm '>
          
            <li>
              <p onClick={() => handleNavbarClick('Category 1')} className=" active mt-3 border w-14 h-20 flex flex-col items-center justify-center gap-1  py-4 px-2 text-gray-600  rounded-full " ><span>MON</span> <span>22</span></p>
              </li>
            
            <li>
              <p onClick={() =>  handleNavbarClick('Category 2')} className=" border w-14 h-20 py-8 px-2 mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1   "> <span>TUE</span> <span>23</span></p>
            </li>
            <li>
              <p onClick={() =>  handleNavbarClick('Category 3')} className=" py-8 px-2 w-14 h-20 mt-3 border text-gray-600 rounded-full flex flex-col items-center justify-center gap-1  "><span>WED</span> <span>24</span></p>
              </li>
            
            <li>
              <p onClick={() =>  handleNavbarClick('Category 4')} className=" py-8 px-2 w-14 h-20 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1"><span>THUS</span> <span>25</span></p>
              </li>
            
            <li>
              <p onClick={() =>  handleNavbarClick('Category 5')} className=" py-8 px-2 w-14 h-20 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1"><span>FRI</span> <span>26</span></p>
              </li>
            
            <li>
              <p onClick={() =>  handleNavbarClick('Category 6')} className=" py-8 px-2 w-14 h-20 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1 "><span>SAT</span> <span>27</span></p>
              </li>
              </ul>
          
  
</div>


<div>

{filteredImages.map((image) => (
          <h3 className='grid grid-cols-3 md:grid-cols-4 text-sm text-gray-600 mt-4' key={image.id} >
          <span className='border rounded-full p-2 w-20 h-11  flex items-center justify-center'>{image.time1}
          </span>
          <span className='border text-center w-20 mt-2 h-11 rounded-full py-2 px-2 flex items-center justify-center'>{image.time2}
          </span>
          <span className='border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center'>{image.time3}
          </span>
          <span className='border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center'>{image.time4}
          </span>
          <span className='border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center'>{image.time5}
          </span>
          <span className='border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center'>{image.time6}
          </span>
          </h3>



        ))}
<button className='text-lg bg-blue text-white py-3 my-7 px-6 rounded-full' type="button">{doctor.button}</button>
</div>
</div>
</div>




</div>

<div className='pt-6'>
<h3 className='text-center font-bold text-2xl'>{doctor.related}</h3>
<p className='text-center text-sm pt-1'>{doctor.related2}</p>



</div>

</div>
<Footer />
</div>
      ) : (
        <p>Doctor not found</p>
      )}

      
    </div>
  );
}

export default DoctorsDetails;

