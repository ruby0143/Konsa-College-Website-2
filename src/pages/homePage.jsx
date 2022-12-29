import React from 'react'
import {TopColleges} from "../components/TopColleges/topColleges"
import TakeInformedDecisions from "../components/TakeInformedDecisions/takeInformedDecision"
import KeepUpdated from "../components/KeepYourselfUpdated/keepUpdated"
import CollegePredictor from '../components/collegePredictor/collegePredictor'

const HomePage = () => {
  return (
    <>
    {/* main header to be added */}
    <CollegePredictor/>
    <TakeInformedDecisions></TakeInformedDecisions>
    <KeepUpdated></KeepUpdated>
    <TopColleges/>
    </>
  )
}

export default HomePage