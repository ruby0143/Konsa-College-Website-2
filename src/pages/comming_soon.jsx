import React from 'react'
    
// social icons import
import instaIcon from '../assets/icons/insta.png';
import linkedinIcon from '../assets/icons/linkedin.png'
import ytIcon from "../assets/icons/yt.png"
import playstoreIcon from '../assets/icons/playstore.png'
import emailIcon from '../assets/icons/email.png'
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Comming_Soon = () => {

    const socialMediaIcons = [
        { icon : playstoreIcon },
        { icon : emailIcon },
        { icon : linkedinIcon },
        { icon : ytIcon },
        { icon : instaIcon },
      ]

  return (
    <>
    <Helmet>
          <meta name="copyright" content="Konsa College" />
          <meta name="viewport" content="width=device-width, intial-scale=1.0" />
          <title>Konsacollege - Comming soon</title>
          <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.konsacollege.com" />
          <meta property="og:site_name"
            content="Konsacollege - Home"/>
          <meta property="og:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta property="og:determiner" content="..." />
          <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
          <meta name="twitter:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta name="twitter:image:alt"
            content="Konsa College Logo" />
          <meta property="twitter:url" content="https://www.konsacollege.com" />
          <meta property="twitter:site" content="@konsacollege" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
          <meta name="audience" content="all" />
          <meta name="distribution" content="global"/>
        </Helmet>


    <div className='flex justify-center items-center h-[100vh]'>
        <div className='flex flex-col items-center max-w-[70%]'>
            <div className='text-4xl font-bold mb-4'>Comming Soon...</div>
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

export default Comming_Soon
