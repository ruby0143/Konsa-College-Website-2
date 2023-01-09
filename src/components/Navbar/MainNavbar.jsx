import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import DesktopNavbar from './DesktopNavbar';
import './headerstyle.css'

const MainNavbar = () => {

  const [mobileSidebar, setMobileSidebar] = useState(false)
  const routes = [
    {
        path: "/",
        route: "Home"
    },
    {
        path: "/particularcollege",
        route: "College"
    },
    {
        path: "/news",
        route: "News"
    },
    {
        path: "/exams",
        route: "Exams"
    },
    {
        path: "/tools",
        route: "Tools"
    },
  ]

  return (
    <div>
      {/* Mobile Slide Side bar */}
      <div className={` md:hidden ${mobileSidebar ? "translate-x-0" : "translate-x-[-100%]"} shadow-lg w-[80%] bg-[#f5f5f5] z-50 transition-all duration-500 fixed top-0 left-0 h-[100vh] py-[40px] px-[16px]`} >
          
          <div className='flex items-center shadow-md py-[8px] px-[12px] rounded-md bg-white w-full' >
              <FaSearch className='text-[#B5BDC9] ml-2 font-thin cursor-pointer text-lg' />
              <input type='search' placeholder='Search' className={`px-3 w-[90%] text-[14px] outline-none border-none rounded-md leading-6`} />
          </div>
          
          <ul className={`md:hidden flex flex-col mt-8 `}>
            { 
                routes.map(route => {
                    return <li key={route.route} className="w-full rounded-md mb-1">
                              <NavLink to={route.path} className="pl-4 py-2 w-full rounded-md hover:bg-[#EE7C00] focus:bg-[#EE7C00] text-[#7A7A7A] focus:text-white hover:text-white focus:shadow-lg cursor-pointer flex justify-start items-center transition-all duration-100">
                                <div>{route.route}</div>
                              </NavLink>
                           </li>
                })
            }
          </ul>
      </div>
      
      <div>
          {/* Desktop Top Navbar */}
          <DesktopNavbar setMobileSidebar={setMobileSidebar} routes={routes}/>
      </div>

    </div>
  )
}

export default MainNavbar