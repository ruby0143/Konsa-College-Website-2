import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import DesktopNavbar from './DesktopNavbar';
import './headerstyle.css'

// route icons import 
import newsRouteIcon from '../../assets/icons/route-icons/News.svg'
import collegeRouteIcon from '../../assets/icons/route-icons/College.svg'
import examsRouteIcon from '../../assets/icons/route-icons/Exams.svg'
import toolsRouteIcon from '../../assets/icons/route-icons/Tools.svg'

// Konsa college logo import
import KonsaCollegeLogo from "../../assets/KonsaCollege_Logo/KonsaCollege_mobileLogo.svg"

// social icons import
import { useEffect, useRef } from 'react';
import instaIcon from '../../assets/icons/insta.png';
import linkedinIcon from '../../assets/icons/linkedin.png'
import ytIcon from "../../assets/icons/yt.png"
import playstoreIcon from '../../assets/icons/playstore.png'
import emailIcon from '../../assets/icons/email.png'
import useCollegeDataStore from '../../utils/AllCollegeData-Store';
import { MdOutlineLogout } from "react-icons/md";

// auth imports
import { auth } from '../../config/auth/firebaseauth';
import { AuthCheck } from '../../Context/authContext';
import { signOut } from 'firebase/auth';

const MainNavbar = () => {

  const location  = useLocation();

  // auth states
  const {authValues, setAuthValues} = useContext(AuthCheck);
  const [isLoginState, setIsLoginState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    return () => {
      document.addEventListener("mousedown",mouseClickHandler)
    }
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        setAuthValues({
         uid: userAuth.uid,
         email: userAuth.email
        })
      } else {
        setAuthValues(null)
      }
    })

    return () => unsubscribe;
  },[])

  const handleLogout = async () =>{
    await signOut(auth).then(() => console.log("user SignedOut"))
    window.location.reload();
  }
  

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
      <div className={` md:hidden ${mobileSidebar ? "translate-x-0" : "translate-x-[-100%]"} flex flex-col shadow-lg w-[80%] bg-[#f5f5f5] z-[1001] transition-all duration-500 fixed top-0 left-0 h-[100vh] py-[40px] px-[16px]`} ref={menuRef} >
          
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
                    return <div key={route.route} className="w-full rounded-md mb-3">
                              <NavLink 
                                to={route.path} 
                                onClick={()=>setMobileSidebar(false)} 
                                className={`pl-4 py-2 w-full rounded-md hover:bg-[#EE7C00] hover:text-white hover:shadow-sm ${route.path === location.pathname ? "bg-[#EE7C00] text-white shadow-sm" : "bg-[#F5F5F5] text-[#7A7A7A] shadow-none"} cursor-pointer flex justify-start items-center transition-all duration-100`}>
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
            {authValues !== null ? <div className='w-full mb-2'>
              <button 
                type="button"
                className='cursor-pointer pl-4 flex items-center'
                onClick={handleLogout}
              >
                <MdOutlineLogout 
                  className='text-[#EE7C00] text-xl mr-3'
                />
                <span className='text-[#EE7C00] font-medium'>Logout</span>
              </button>
            </div> : null}
          </div>

          <div className='flex-1 flex flex-col justify-end items-center' >
            {authValues === null ? (
              <div className='flex justify-evenly py-[8px] px-[22px] text-white text-sm font-medium rounded-full bg-[#EE7C00] w-[180px]' >
                  <div  
                      className='cursor-pointer'
                      onClick={()=>{
                          setIsModalOpen(prevState => !prevState)
                          setIsLoginState(true)
                          setMobileSidebar(false)
                      }}
                  >
                      Log In
                  </div>
                  <div>|</div>
                  <div 
                      className='cursor-pointer'
                      onClick={()=>{
                          setIsModalOpen(prevState => !prevState)
                          setIsLoginState(false)
                          setMobileSidebar(false)
                      }}
                  >
                      Sign Up
                  </div>
              </div>
            ) : null}

            <div className='mb-12'>
              <Link href="/">
                <img 
                src={KonsaCollegeLogo} 
                alt="Konsa College Logo"
                className='m-auto'
              />
              </Link>
            </div>
            <div className='flex w-full justify-evenly items-center' >
              {
                socialMediaIcons.map((icon,id) => {
                  return ( 
                    <NavLink to="#" key={id}>
                        <img 
                          src={icon.icon} 
                          key={id} 
                          alt="social media icon" 
                        />
                    </NavLink> )
                })
              }
            </div>
          </div>
      </div>
      
      <div>
          {/* Desktop Top Navbar */}
          <DesktopNavbar 
            setMobileSidebar={setMobileSidebar} 
            mobileSidebar={mobileSidebar} 
            routes={routes}
            isLoginState={isLoginState}  
            setIsLoginState={setIsLoginState}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
      </div>

    </div>
  )
}

export default MainNavbar