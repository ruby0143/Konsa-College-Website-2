import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import konsaCollegeLogo from '../../assets/KonsaCollege_Logo/KonsaCollege_desktopLogo.svg' 
import LoginUser from '../AuthComponents/logIn/LoginUser'
import RegisterUser from '../AuthComponents/register/RegisterUser'
import AuthModal from '../UI Components/Modal/authModal'
import './headerstyle.css'

// auth config
import { AuthCheck } from '../../Context/authContext'
import { auth } from '../../config/auth/firebaseauth'
import { signOut } from 'firebase/auth'

const DesktopNavbar = ({setMobileSidebar, mobileSidebar ,routes, isLoginState, setIsLoginState, isModalOpen, setIsModalOpen}) => {
  
  const {authValues} = useContext(AuthCheck);    

  // auth checks - is logged in or not
  useEffect(() => {
    // on escape key press - changing modal state
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };

  },[])

  const handleLogout = async () =>{
      await signOut(auth).then(() => console.log("user SignedOut"))
  }

  return (
    <>
        {
            isModalOpen ? (
                <AuthModal>
                    {isLoginState ? (
                     <LoginUser 
                        setIsModalOpen={setIsModalOpen} 
                        setIsLoginState={setIsLoginState}
                     />
                    ) : (
                     <RegisterUser 
                        setIsModalOpen={setIsModalOpen} 
                        setIsLoginState={setIsLoginState}
                     />
                    )}
                </AuthModal>
            ) : null
        }

        <nav className='bg-black md:bg-white flex px-3 md:px-12 items-center justify-between shadow-lg'>
            <div className='h-[54px] -ml-1' >
                <a href="/"><img className='h-full -ml-[.3rem]' src={konsaCollegeLogo} alt="konsa-college-logo"/></a>
            </div>
            <div className='hidden md:flex items-center gap-10'>
                <ul className='flex items-center cursor-pointer gap-10'>
                {
                    routes.map(route => {
                        return <li key={route.route}>
                            <NavLink 
                                className='text-gray-900 hover:text-black text-sm transition-all duration-500' to={route.path}
                                
                            >
                                {route.route}
                            </NavLink>
                        </li>
                    })
                }
                </ul>
                {authValues === null ? <div className='flex gap-2 py-[6px] px-[22px] text-white text-sm font-medium rounded-full bg-[#EE7C00]' >
                    <div  
                        className='cursor-pointer'
                        onClick={()=>{
                            setIsModalOpen(prevState => !prevState)
                            setIsLoginState(true)
                        }}
                    >
                        Login
                    </div>
                    <div>|</div>
                    <div 
                        className='cursor-pointer'
                        onClick={()=>{
                            setIsModalOpen(prevState => !prevState)
                            setIsLoginState(false)
                        }}
                    >
                        Sign Up
                    </div>
                </div> : <div className='text-[#EE7C00] cursor-pointer' onClick={handleLogout}>Logout</div>}
            </div>
            <div className='md:hidden flex items-center gap-4' >
                <div onClick={()=>setMobileSidebar(prevState => !prevState)} >
                    {mobileSidebar?<AiOutlineClose className='text-white cursor-pointer text-lg' />:<AiOutlineMenu className='text-white cursor-pointer text-lg'/>}
                </div>
            </div>
        </nav>      
    </>
  )
}

export default DesktopNavbar