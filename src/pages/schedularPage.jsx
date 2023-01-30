import React from 'react'
import SchedularPageHeader from '../components/Header/schedulerPageHeader/schedularPageHeader'
import SchedulerLeftContainer from '../components/SchedulerPageComponents/SchedulerLeftContainer/schedulerLeftContainer'
import SchedulerRightContainer from '../components/SchedulerPageComponents/SchedulerRightContainer/schedulerRightContainer'

const SchedularPage = () => {
  return (
    <div>
        <SchedularPageHeader/>
        <div className='flex w-full'>
          <div className='w-full md:w-[74%] bg-white px-4'>
            <SchedulerLeftContainer/>
          </div>
          <div className='hidden md:inline md:w-[26%] bg-white py-3 px-4'>
            <SchedulerRightContainer/>
          </div>
        </div>
    </div>
  )
}

export default SchedularPage
