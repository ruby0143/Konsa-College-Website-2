import React from 'react'
import HomeHeader from '../components/Header/MainHeader/homeHeader'
import FeaturesOffered from '../components/HomePageComponents/features'
import CollegesPredictor from '../components/CollegesPredictor/CollegesPredictor'
import Newsletters from '../components/Newsletters/Newsletters'
import { useEffect } from 'react'
import axios from 'axios'
import useCollegeDataStore from '../utils/AllCollegeData-Store'
import { Helmet } from 'react-helmet'

const HomePage = () => {

  // zustand config - calling store to add item
  const setCollegeDataList = useCollegeDataStore((state) => state.setCollegeDataList)
  const url = "https://konsa-college-backend.vercel.app";

  useEffect(() => {
    axios.get(url + "/allcolleges")
      .then((res) => {
        setCollegeDataList(res.data)
      })
  }, [])

  return (
    <>
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Konsacollege - Find the Best Colleges in India</title>
        <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.konsacollege.com" />
        <meta property="og:site_name"
          content="Konsacollege - Home" />
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
        <meta name="distribution" content="global" />

      </Helmet>
      <HomeHeader />
      <div className='max-w-[1300px] mx-auto mob:mx-2 '>
        <FeaturesOffered />
        <CollegesPredictor />
        <Newsletters />
      </div>
    </>
  )
}

export default HomePage