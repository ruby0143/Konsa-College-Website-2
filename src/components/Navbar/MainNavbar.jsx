import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import DesktopNavbar from './DesktopNavbar';
import './headerstyle.css'
import homeLogo from "../../assets/icons/home.png"
import newsLogo from "../../assets/icons/news.png"
import collegeLogo from "../../assets/icons/college.png"
import examsLogo from "../../assets/icons/exams.png"
import toolsLogo from "../../assets/icons/tools.png"
import comparatorLogo from "../../assets/icons/comparator.png"

const MainNavbar = () => {

  const [mobileSidebar, setMobileSidebar] = useState(false)
  const routes = [
    {
      path: "/",
      route: "Home",
      imgPath: homeLogo
    },
    {
      path: "/news",
      route: "News",
      imgPath: newsLogo
    },
    {
      path: "/particularcollege",
      route: "College",
      imgPath: collegeLogo
    },
    {
      path: "/exams",
      route: "Exams",
      imgPath: examsLogo
    },
    {
      path: "/tools",
      route: "Tools",
      imgPath: toolsLogo
    },
    {
      path: "/comparator",
      route: "Comparator",
      imgPath: comparatorLogo
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
                  <div className="nav flex">
                    <img src={route.imgPath} alt={`${route.route} image`} className="w-4 h-4 mr-3 mt-1"/>
                    <h2 className='text-[15px] font-semibold'>{route.route}</h2>
                  </div>
                </NavLink>
              </li>
            })
          }
        </ul>
      </div>
          

      <div>
        {/* Desktop Top Navbar */}
        <DesktopNavbar setMobileSidebar={setMobileSidebar} routes={routes} />
      </div>

    </div>
  )
}

export default MainNavbar