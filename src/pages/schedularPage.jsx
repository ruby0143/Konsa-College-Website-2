import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SchedularPageHeader from '../components/Header/schedulerPageHeader/schedularPageHeader'
import SchedulerLeftContainer from '../components/SchedulerPageComponents/SchedulerLeftContainer/schedulerLeftContainer'
import SchedulerRightContainer from '../components/SchedulerPageComponents/SchedulerRightContainer/schedulerRightContainer'

const SchedularPage = () => {

  const [examData, setExamData] = useState([])
  const [councellingData, setCouncellingData] = useState([])
  const url = "https://konsa-college-backend.vercel.app";


  useEffect(() => {
    axios.get(url+"/exams")
         .then((res)=>{
            setExamData(res.data)
         })

    axios.get(url+"/councelling")
         .then((res)=>{
            setCouncellingData(res.data)
         })
  }, [])

  return (
    <div>
        <SchedularPageHeader/>
        <div className='flex w-full'>
          <div className='w-full md:w-[74%] bg-white px-4 md:px-8'>
            <SchedulerLeftContainer examData={examData} councellingData={councellingData}/>
          </div>
          <div className='hidden md:inline-flex md:w-[26%] bg-white px-8 md:px-8'>
            <SchedulerRightContainer/>
          </div>
        </div>
    </div>
  )
}

export default SchedularPage
