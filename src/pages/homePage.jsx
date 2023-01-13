import React from 'react'
import HomeHeader from '../components/Header/MainHeader/homeHeader'
import FeaturesOffered from '../components/HomePageComponents/features'
import CollegesPredictor from '../components/CollegesPredictor/CollegesPredictor'
import Newsletters from '../components/Newsletters/Newsletters'


const HomePage = () => {
  return (
    <>
      <HomeHeader/>
      <div className='max-w-[1200px] m-auto'>
        <FeaturesOffered/>
        <CollegesPredictor />
        <Newsletters/>
      </div>
    </>
  )
}

export default HomePage