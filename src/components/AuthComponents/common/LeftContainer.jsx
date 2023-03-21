import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LeftContainer = () => {
  return (
    <div 
        className='w-[30%] h-full bg-[#EE7C00] px-8 py-14 flex flex-col items-center justify-between'
    >
      <div className='w-full text-white text-3xl text-center'>
        Lorem ipsum dolor sit amet constur. Faucibu nunc eu faucibus tinc iaculis.  
      </div>
      <div>
        <NavLink to="/">
            <img 
                src="/KonsaCollege_desktopLogo.svg" 
                alt="https://www.konsacollege.com/"
                className='w-[20rem]'
            />
        </NavLink>
        <div className='text-white text-lg mt-[3rem] text-center'>
            <Link to='/'>
                KonsaCollege.com
            </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftContainer
