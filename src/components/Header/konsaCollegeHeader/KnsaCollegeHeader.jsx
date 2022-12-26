import React, { useState } from 'react'
import KnsaCollegeNavbar from './Navbar'
import '../konsaCollegeHeader/headerstyle.css'
import {BsFillGeoAltFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const KnsaCollegeHeader = () => {

  const [mobileSidebar, setMobileSidebar] = useState(false)
  const routes = [
    {
        path: "/",
        route: "Home"
    },
    {
        path: "/news",
        route: "News"
    },
    {
        path: "/college-finder",
        route: "Colleges"
    },
    {
        path: "/exams",
        route: "Exams"
    },
    {
        path: "/admission",
        route: "Admission"
    },
    {
        path: "/tools",
        route: "Tools"
    },
    {
        path: "/forum",
        route: "Forum"
    },
  ]

  return (
    <div>

      <div className={` md:hidden ${mobileSidebar ? "translate-x-0" : "translate-x-[-100%]"} overflow-hidden shadow-lg w-[80%] bg-[#000000] z-10 transition-all duration-500 fixed top-0 left-0 h-[100vh]`} >
          <ul className={`md:hidden flex cursor-pointer flex-col mt-14 `}>
            { 
                routes.map(route => {
                    return <li key={route.route} className="pl-4 py-2 border-b border-b-[#222222]">
                        <NavLink className={` text-gray-300 active:text-white text-lg`} to={route.path} >{route.route}</NavLink>
                    </li>
                })
            }
          </ul>
      </div>

      <div>
          <KnsaCollegeNavbar setMobileSidebar={setMobileSidebar} routes={routes}/>
          <div className='midHeader flex items-end'>
            <div className='h-full px-4 pb-8'>
              <div className='mb-2' >
                <img src="https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png" alt="college image" className='h-[128px]'/>
              </div>
              <div className='text-white w-[96%] text-xl leading-6 font-semibold mb-2' >
                  Indian Institute of Technology, Banaras Hindu University(BHU)
              </div>
              <div className='flex items-center'>
                <div className='mr-1' >
                  <BsFillGeoAltFill className='text-white text-xl' />
                </div>
                <div className='text-white leading-4 w-[90%] font-light'>
                  IIT-BHU, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221005
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default KnsaCollegeHeader