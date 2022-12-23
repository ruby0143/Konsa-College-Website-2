import React from 'react'
import { FaSearch, FaBars } from 'react-icons/fa'
import konsaCollegeLogo from '../../../assets/KonsaCollege.png' 
import './headerstyle.css'

const KnsaCollegeNavbar = () => {
  return (
    <nav className='w-full bg-black flex px-3 items-center justify-between' >
        <div className='h-[54px]' >
            <img className='h-full' src={konsaCollegeLogo} alt="konsa-college-logo"/>
        </div>
        <div className='flex items-center gap-4' >
            <div className='flex items-center' >
                <input type='search' placeholder='Search College' className='px-3 outline-none border-none rounded-full leading-7' />
                <FaSearch className='text-white ml-2 cursor-pointer text-lg' />
            </div>
            <div>
                <FaBars className='text-white cursor-pointer text-lg' />
            </div>
        </div>
    </nav>
  )
}

export default KnsaCollegeNavbar