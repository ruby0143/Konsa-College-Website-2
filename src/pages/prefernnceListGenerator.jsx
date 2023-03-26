import React from 'react'
import instaIcon from '../assets/icons/insta.png';
import linkedinIcon from '../assets/icons/linkedin.png'
import ytIcon from "../assets/icons/yt.png"
import playstoreIcon from '../assets/icons/playstore.png'
import emailIcon from '../assets/icons/email.png'
import { NavLink } from 'react-router-dom';

const PreferenceListGenerator = () => {

    const socialMediaIcons = [
        { icon : playstoreIcon },
        { icon : emailIcon },
        { icon : linkedinIcon },
        { icon : ytIcon },
        { icon : instaIcon },
      ] 
    
  return (
    <>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='flex flex-col items-center max-w-[70%]'>
            <div className='text-4xl font-bold mb-4'>Preference List Generator Comming Soon...</div>
            <div className='mb-8 text-center'>
                <div className='md:text-xl'>We are almost there, If you want to get notified when the website goes <br/> live subscribe to our mailing list!</div>    
            </div>
                <div className='flex-1 flex flex-col justify-end items-center gap-8' >
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
    </div>
    </>
  )
}

export default PreferenceListGenerator
