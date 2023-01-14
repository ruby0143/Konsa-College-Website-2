import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import DesktopNavbar from './DesktopNavbar';
import './headerstyle.css'

// route icons import 
import newsRouteIcon from '../../assets/icons/route-icons/News.svg'
import collegeRouteIcon from '../../assets/icons/route-icons/College.svg'
import examsRouteIcon from '../../assets/icons/route-icons/Exams.svg'
import toolsRouteIcon from '../../assets/icons/route-icons/Tools.svg'
import comparatorRouteIcon from '../../assets/icons/route-icons/Comparator.svg'

// Konsa college logo import
import KonsaCollegeLogo from "../../assets/KonsaCollege_Logo/KonsaCollege_mobileLogo.svg"

// social icons import
import instaIcon from '../../assets/icons/insta.png';
import linkedinIcon from '../../assets/icons/linkedin.png'
import ytIcon from "../../assets/icons/yt.png"
import playstoreIcon from '../../assets/icons/playstore.png'
import emailIcon from '../../assets/icons/email.png'

const MainNavbar = () => {

  const [mobileSidebar, setMobileSidebar] = useState(false)
  
  const routes = [
    {
        path: "/",
        route: "Home",
        icon : newsRouteIcon
    },
    {
        path: "/particularcollege",
        route: "College",
        icon : collegeRouteIcon
    },
    {
        path: "/news",
        route: "News",
        icon : newsRouteIcon
    },
    {
        path: "/exams",
        route: "Exams",
        icon : examsRouteIcon
    },
    {
        path: "/tools",
        route: "Tools",
        icon : toolsRouteIcon
    },
    {
        path: "/comparator",
        route: "Comparator",
        icon : comparatorRouteIcon
    },
  ]

  const socialMediaIcons = [
    { icon : playstoreIcon },
    { icon : emailIcon },
    { icon : linkedinIcon },
    { icon : ytIcon },
    { icon : instaIcon },
  ]


  return (
    <div>
      {/* Mobile Slide Side bar */}
      <div className={` md:hidden ${mobileSidebar ? "translate-x-0" : "translate-x-[-100%]"} flex flex-col shadow-lg w-[80%] bg-[#f5f5f5] z-50 transition-all duration-500 fixed top-0 left-0 h-[100vh] py-[40px] px-[16px]`} >
          
          <div className='flex items-center shadow-md py-[8px] px-[12px] rounded-md bg-white w-full' >
              <FaSearch className='text-[#B5BDC9] ml-2 font-thin cursor-pointer text-lg' />
              <input type='search' placeholder='Search' className={`px-3 w-[90%] text-[14px] outline-none border-none rounded-md leading-6`} />
          </div>
          
          <ul className={`md:hidden flex flex-col mt-8 `}>
            { 
                routes.map(route => {
                    return <li key={route.route} className="w-full rounded-md mb-1">
                              <NavLink to={route.path} className="pl-4 py-2 w-full rounded-md hover:bg-[#EE7C00] focus:bg-[#EE7C00] text-[#7A7A7A] focus:text-white hover:text-white focus:shadow-md cursor-pointer flex justify-start items-center transition-all duration-100">
                                <img 
                                  src={route.icon} 
                                  alt={route.route}
                                  className="mr-4"
                                />
                                <span className='text-sm' >{route.route}</span>
                              </NavLink>
                           </li>
                })
            }
          </ul>

          <div className='flex-1 flex flex-col justify-end items-center gap-8' >
            <div>
              <img 
                src={KonsaCollegeLogo} 
                alt="Konsa College Logo"
                className='m-auto'
              />
            </div>
            <div className='flex w-full justify-evenly items-center' >
              {
                socialMediaIcons.map((icon,id) => {
                  return ( 
                    <NavLink to="#" >
                        <img src={icon.icon} key={id} alt="social media icon" />
                    </NavLink> )
                })
              }
            </div>
          </div>
      </div>
      
      <div>
          {/* Desktop Top Navbar */}
          <DesktopNavbar setMobileSidebar={setMobileSidebar} routes={routes}/>
      </div>

    </div>
  )
}

export default MainNavbar