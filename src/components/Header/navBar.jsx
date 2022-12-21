import React from 'react'
import { Link } from 'react-router-dom'
// import { AiOutlineMenu } from "react-icons/ai";
import HamburgerButton from './hamburgerButton';

const NavBar = () => {
  return (
    <div className='w-full flex justify-between items-center p-2 md:px-10 md:py-4' >
      <img src="https://www.collegepravesh.com/cpdata/themes/sahifa/images/Logo_Light_Transparent_500x80.png" className='h-10' alt="logoImg"/>
      <HamburgerButton/>
      <ul className='hidden md:flex items-center justify-between cursor-pointer w-[380px]' >
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/">Home</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/news">News</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/college-finder">Colleges</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/exams">Exams</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/admission">Admission</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/tools">Tools</Link></li>
        <li><Link className='text-gray-300 hover:text-white text-sm transition-all delay-50' to="/forum">Forum</Link></li>
      </ul>
    </div>
  ) 
}

export default NavBar
























