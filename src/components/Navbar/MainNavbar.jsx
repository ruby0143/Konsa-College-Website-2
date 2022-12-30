import React, { useState } from 'react'
import './headerstyle.css'
import { NavLink } from 'react-router-dom';
import DesktopNavbar from './DesktopNavbar';

const MainNavbar = () => {

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
        path: "/particularcollege",
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
          <DesktopNavbar setMobileSidebar={setMobileSidebar} routes={routes}/>
      </div>

    </div>
  )
}

export default MainNavbar