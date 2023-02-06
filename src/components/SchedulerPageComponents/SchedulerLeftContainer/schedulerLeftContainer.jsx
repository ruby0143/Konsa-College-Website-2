import React from 'react'
import CouncellingDataContainer from './councellingDataContainer'
import ExamDataContainer from './examDataContainer'

const SchedulerLeftContainer = ({examData, councellingData}) => {

  return (
    <div>
      {/* Content Shown in Mobile View Start */}
      <div className='md:hidden mb-6 text-justify text-[14px]'>
        Busy with studies and not finding time to stay updated with the latest dates of engineering exams?
      </div>
      <div style={{ textAlign: 'justify' }} className='md:hidden mb-6 text-xs text-justify'>
        This section helps engineering students stay updated with important exam dates. This feature offers a comprehensive calendar of all upcoming engineering exams, including important deadlines and dates. The Scheduler helps students stay organized and never miss a deadline again, giving them the best chance of success in their exams. Get ahead of the curve and take advantage of every important date with KonsaCollege's Scheduler.
      </div>
      {/* Content Shown in Mobile View End */}

      {/* Content Shown in Desktop View Start */}
      <div className='hidden md:inline mb-6 text-justify text-[20px]'>
        Busy with studies and not finding time to stay updated with the latest dates of engineering exams?
      </div>
      <div style={{ textAlign: 'justify' }} className='hidden md:inline-flex mb-6 leading-5 text-justify'>
        This section helps engineering students stay updated with important exam dates. This feature offers a comprehensive calendar of all upcoming engineering exams, including important deadlines and dates. The Scheduler helps students stay organized and never miss a deadline again, giving them the best chance of success in their exams. Get ahead of the curve and take advantage of every important date with KonsaCollege's Scheduler.
      </div>
      {/* Content Shown in Desktop View End */}
      
      <div className='mb-4'>
        <div className="mb-4 md:mb-8">
            <div className='text-xl md:text-2xl lg:text-3xl text-[#303030] font-medium'>Applications</div>
            <hr className='mt-2'/>
        </div>
        <div className='flex flex-wrap justify-between'>
            {
              councellingData?.map(councelling => {
                return <CouncellingDataContainer key={councelling._id} councelling={councelling}/>
              })
            }
        </div>
      </div>  
      
      <div className='mb-4'>
        <div className="mb-4 md:mb-8">
            <div className='text-xl md:text-2xl lg:text-3xl text-[#303030] font-medium'>Exams</div>
            <hr className='mt-2'/>
        </div>
        <div className='flex flex-wrap justify-between'>
            {
              examData?.map(exam => {
                return <ExamDataContainer key={exam._id} exam={exam}/>
              })
            }
        </div>
      </div>  
    </div>
  )
}

export default SchedulerLeftContainer
