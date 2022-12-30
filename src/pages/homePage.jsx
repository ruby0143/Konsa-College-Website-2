import React from 'react'
import {TopColleges} from "../components/TopColleges/topColleges"
import TakeInformedDecisions from "../components/TakeInformedDecisions/takeInformedDecision"
import KeepUpdated from "../components/KeepYourselfUpdated/keepUpdated"
import HomeHeader from '../components/Header/MainHeader/homeHeader'
import FeaturesOffered from '../components/HomePageComponents/features'

const HomePage = () => {
  return (
    <>
    <HomeHeader/>
    <FeaturesOffered/>
    <TakeInformedDecisions></TakeInformedDecisions>
    <KeepUpdated></KeepUpdated>
    <TopColleges/>
    </>
  )
}

export default HomePage