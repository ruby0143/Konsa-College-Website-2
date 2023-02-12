import React from 'react'
import HomeHeader from '../components/Header/MainHeader/homeHeader'
import FeaturesOffered from '../components/HomePageComponents/features'
import CollegesPredictor from '../components/CollegesPredictor/CollegesPredictor'
import Newsletters from '../components/Newsletters/Newsletters'
import { useEffect } from 'react'
import axios from 'axios'
import useCollegeDataStore from '../utils/AllCollegeData-Store'


const HomePage = () => {

  // zustand config - calling store to add item
  const setCollegeDataList = useCollegeDataStore((state) => state.setCollegeDataList)

  useEffect(() => {
    axios.get("https://konsa-college-backend-production-0c4c.up.railway.app/allcolleges")
         .then((res)=>{
            setCollegeDataList(res.data)
         })
  }, [])

  return (
    <>
      <HomeHeader/>
      <div className='max-w-[1300px] m-auto md:mx-2 '>
        <FeaturesOffered/>
        <CollegesPredictor />
        <Newsletters/>
      </div>
    </>
  )
}

export default HomePage