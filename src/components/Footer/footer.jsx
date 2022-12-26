import React from 'react'
import {CgFacebook} from "react-icons/cg"
import {BsTwitter} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <>
    <div className='w-full xs:h-auto lg:h-[65vh] bg-[#242c44] text-white'>
    
    {/* <>--links conatiner-- </> */}
    <div className='flex flex-row justify-between flex-wrap gap-6 pt-16 px-20 lg:px-40 pb-10'>

       <ul>
        <span className='text-gray-300 hover:text-white text-sm transition-all delay-100 font-semibold' to="#">COLLEGES</span>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Statewise Colleges</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Explore All IITs</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Explore All NITs</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Explore All IIITs</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Explore All IISERSs</Link></li>
        </ul>

        <ul>
            <br></br>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Colleges in Delhi NCR</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Colleges in Maharashtra</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Colleges in Karnatka</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Colleges in Uttar Pradesh</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Colleges in Andhra Pradesh</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Colleges in Telangana</Link></li>
        </ul>
       

       
        <ul>
        <span className='text-gray-300 hover:text-white text-sm transition-all delay-100 font-semibold' to="#">EXAMS</span>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">JEE(Main)</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">JEE(Advanced)</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">BITSAT</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">MHT-CET</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">UPSEE</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">WBJEE</Link></li>
        </ul>
        

        
        <ul>
        <span className='text-gray-300 hover:text-white text-sm transition-all delay-100 font-semibold' to="#">TOOLS</span>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">College Finder</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">JEE (Main) Rank Predictor</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">JEE (Main) College Predictor</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">JEE (Adavnced) College Predictor</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">BITSAT College Predictor</Link></li>
            <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">JAC Delhi College Predictor</Link></li>

        </ul>

        
        <ul>
        <span className='text-gray-300 hover:text-white text-sm transition-all delay-100 font-semibold' to="#">COMPANY</span>
        <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">About Us</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Media Kit</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Privacy Policy</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Terms of Use</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Contact Us</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-xs transition-all delay-100' to="#">Support Us</Link></li>
        </ul>
</div>



{/* <>footer section</> */}
<div className='flex  justify-center p-5'>    
   {/* <div className=''> <img src="" alt="logo"></img></div> */}
   <span className='text-red-700 text-4xl font-medium'>C</span><span className='text-yellow-700 text-5xl font-medium'>P</span>

</div>

<div className='flex  justify-center p-5'>    
    <div className=' flex flex-row gap-x-3 text-gray-300'>
        <CgFacebook size={20} className="cursor-pointer hover:texxt-white ease-in-out duration-300 hover:scale-105"/>
        <BsTwitter size={20} className="cursor-pointer hover:texxt-white ease-in-out duration-300 hover:scale-105"/>
        <FaLinkedinIn size={20} className="cursor-pointer hover:texxt-white ease-in-out duration-300 hover:scale-105"/>
        <FiInstagram size={20} className="cursor-pointer hover:texxt-white ease-in-out duration-300 hover:scale-105"/>
        </div>
</div>
    <div className='flex justify-center pt-6 pb-6 text-gray-300 hover:text-white text-sm transition-all delay-100'><p>College Pravesh &#169; Copyright 2022</p></div>

        
    </div>
    </>
  )
}
