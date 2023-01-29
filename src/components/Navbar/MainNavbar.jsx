import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
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
import { useEffect } from 'react';
import { useRef } from 'react';
import useCollegeDataStore from '../../utils/AllCollegeData-Store';

const MainNavbar = () => {

  // zustand config
  const collegeDataList = useCollegeDataStore((state) => state.collegeDataList)
  const [searchTerm, setSearchTerm] = useState("")
  const [mobileSidebar, setMobileSidebar] = useState(false)

  let menuRef = useRef()
  useEffect(()=>{
    let mouseClickHandler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setMobileSidebar(false)
      }
    }
    return() => {
      document.addEventListener("mousedown",mouseClickHandler)
    }
  })

  const routes = [
    {
        path: "/",
        route: "Home",
        icon : newsRouteIcon
    },
    {
        path: "/allcolleges",
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
      <div className={` md:hidden ${mobileSidebar ? "translate-x-0" : "translate-x-[-100%]"} flex flex-col shadow-lg w-[80%] bg-[#f5f5f5] z-50 transition-all duration-500 fixed top-0 left-0 h-[100vh] py-[40px] px-[16px]`} ref={menuRef} >
          
          <div className='flex items-center shadow-md py-[8px] px-[12px] rounded-md bg-white w-full' >
              <FaSearch className='text-[#B5BDC9] ml-2 font-thin cursor-pointer text-lg'/>
              <input 
                type='search' 
                placeholder='Search' 
                className={`px-3 w-[90%] text-[14px] outline-none border-none rounded-md leading-6`} 
                onChange={e=>setSearchTerm(e.target.value)}
              />

          </div>

          <div className={` ${searchTerm !== "" ? "inline-flex" : "hidden"} z-30 relative`}>
                <div className='absolute rounded-b-md max-h-[260px] w-full overflow-y-scroll overflow-x-hidden bg-white shadow-md mt-1 md:mt-10 transition-all duration-300'>
                    {
                        collegeDataList.filter(college => college.college_name.toLowerCase().includes(searchTerm.toLowerCase()) || college.college_uuid.toLowerCase().includes(searchTerm)).map((college,index)=>{
                            return <Link 
                                        key={index} 
                                        to={`/college/${college.college_uuid}`}
                                        className="text-gray-800 md:cursor-pointer block font-medium text-xs md:text-base px-6 py-2 shadow-sm hover:bg-slate-100"
                                    >
                                        {college.college_name}
                                    </Link>
                        })
                    }
                </div>
            </div>
          
          <div className={`md:hidden flex flex-col mt-8 `}>
            { 
                routes.map(route => {
                    return <div key={route.route} className="w-full rounded-md mb-1">
                              <NavLink to={route.path} onClick={()=>setMobileSidebar(false)} className="pl-4 py-2 w-full rounded-md hover:bg-[#EE7C00] visited::bg-[#EE7C00] text-[#7A7A7A] focus:text-white hover:text-white focus:shadow-md cursor-pointer flex justify-start items-center transition-all duration-100">
                                <img 
                                  src={route.icon} 
                                  alt={route.route}
                                  className="mr-4"
                                />
                                <span className='text-sm' >{route.route}</span>
                              </NavLink>
                           </div>
                })
            }
          </div>

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
                    <NavLink to="#" key={id}>
                        <img src={icon.icon} key={id} alt="social media icon" />
                    </NavLink> )
                })
              }
            </div>
          </div>
      </div>
      
      <div>
          {/* Desktop Top Navbar */}
          <DesktopNavbar setMobileSidebar={setMobileSidebar} mobileSidebar={mobileSidebar} routes={routes}/>
      </div>

    </div>
  )
}

export default MainNavbar