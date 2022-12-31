import React, { useState } from 'react'
import { FaSearch, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import konsaCollegeLogo from '../../assets/KonsaCollege.png' 
import './headerstyle.css'

const DesktopNavbar = ({setMobileSidebar,routes}) => {

  const [searchbarActive, setSearchbarActive] = useState(false)  

  return (
    <>
        <nav className='w-full bg-black flex px-3 items-center justify-between' >
            <div className='h-[54px]' >
                <img className='h-full' src={konsaCollegeLogo} alt="konsa-college-logo"/>
            </div>
            <div    >
                <ul className='hidden md:flex items-center justify-between cursor-pointer w-[420px]'>
                {
                    routes.map(route => {
                        return <li key={route.route} >
                            <NavLink className='text-gray-300 hover:text-white text-sm transition-all duration-500' to={route.path} >{route.route}</NavLink>
                        </li>
                    })
                }
                </ul>
            </div>
            <div className='flex items-center gap-4' >
                <div className='flex items-center' >
                    <input type='search' placeholder='Search College' className={`px-3 text-sm outline-none border-none rounded-full leading-7 ${searchbarActive ? "w-[164px]" : "w-0 bg-transparent"} transition-all`} />
                    <FaSearch className='text-white ml-2 cursor-pointer text-lg' onClick={()=>setSearchbarActive(prevstate => !prevstate)} />
                </div>
                <div className='md:hidden' onClick={()=>setMobileSidebar(prevstate => !prevstate)} >
                    <FaBars className='text-white cursor-pointer text-lg' />
                </div>
            </div>
        </nav>      
    </>
  )
}

export default DesktopNavbar