import React from 'react'
import {TopColleges} from "../components/TopColleges/topColleges"
import TakeInformedDecisions from "../components/TakeInformedDecisions/takeInformedDecision"
import KeepUpdated from "../components/KeepYourselfUpdated/keepUpdated"

const HomePage = () => {
  return (
    <>
    <TakeInformedDecisions></TakeInformedDecisions>
    <KeepUpdated></KeepUpdated>
    <TopColleges/>
    </>
  )
}

export default HomePage