import React, { useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import RoundLoader from '../../UI Components/loaders/RoundLoader'
import CouncellingDataContainer from './councellingDataContainer'
import ExamDataContainer from './examDataContainer'

const SchedulerLeftContainer = ({examData, councellingData}) => {

  const [examDataLimit, setExamDataLimit] = useState(3)
  const [councellingDataLimit, setCouncellingDataLimit] = useState(3)

  return (
    <div className='mb-12'>
      {/* Content Shown in Mobile View Start */}
      <div className='md:hidden mb-6 text-justify text-[14px]'>
        Busy with studies and not finding time to stay updated with the latest dates of engineering exams?
      </div>
      <hr style={{ height: '1.5rem', visibility: 'hidden' }}></hr>
      <div style={{ textAlign: 'justify' }} className='md:hidden mb-6 text-xs text-justify'>
        This section helps engineering students stay updated with important exam dates. This feature offers a comprehensive calendar of all upcoming engineering exams, including important deadlines and dates. The Scheduler helps students stay organized and never miss a deadline again, giving them the best chance of success in their exams. Get ahead of the curve and take advantage of every important date with KonsaCollege's Scheduler.
      </div>
      {/* Content Shown in Mobile View End */}

      {/* Content Shown in Desktop View Start */}
      <div className='hidden md:inline mb-6 text-justify text-[20px]'>
        Busy with studies and not finding time to stay updated with the latest dates of engineering exams?
      </div>
      <hr style={{ height: '1.5rem', visibility: 'hidden' }}></hr>
      <div style={{ textAlign: 'justify' }} className='hidden md:inline-flex mb-6 leading-5 text-justify'>
        This section helps engineering students stay updated with important exam dates. This feature offers a comprehensive calendar of all upcoming engineering exams, including important deadlines and dates. The Scheduler helps students stay organized and never miss a deadline again, giving them the best chance of success in their exams. Get ahead of the curve and take advantage of every important date with KonsaCollege's Scheduler.
      </div>
      {/* Content Shown in Desktop View End */}
      
      <div className='mb-4'>
        <div className="mb-4 md:mb-8">
            <div className='text-xl md:text-2xl lg:text-3xl text-[#303030] font-medium'>Applications</div>
            <hr className='mt-2'/>
        </div>
        {councellingData ? (
          <div className='flex flex-wrap justify-between mb-2 md:mb-4'>
              {
                councellingData?.slice(0,councellingDataLimit).map(councelling => {
                  return <CouncellingDataContainer key={councelling._id} councelling={councelling}/>
                })
              }
          </div>
        ) : (
          <div className='w-[40px] mx-auto my-4'>
            <RoundLoader/>
          </div>
        )}
        <div className='mb-6 flex justify-center items-center'>
          <button onClick={()=>setCouncellingDataLimit(prev => prev + 3)} className='flex items-center py-2 px-6 md:px-8 rounded-full text-sm md:text-base md:font-medium text-[#5a5a5a] md:hover:text-[#fcfcfc] bg-[#f4f4f4] md:hover:bg-[#EE7C00] shadow-md transition-all duration-300'>
            <span className='mr-2'>Show more</span>
            <AiOutlineArrowDown/>
          </button>
        </div>
      </div>  
      
      <div className='mb-4'>
        <div className="mb-4 md:mb-8">
            <div className='text-xl md:text-2xl lg:text-3xl text-[#303030] font-medium'>Exams</div>
            <hr className='mt-2'/>
        </div>
        {examData ? (
          <div className='flex flex-wrap justify-between mb-2 md:mb-4'>
            {
              examData?.slice(0,examDataLimit).map(exam => {
                return <ExamDataContainer key={exam._id} exam={exam}/>
              })
            }
          </div>
          ) : (
            <div className='w-[40px] mx-auto my-4'>
              <RoundLoader/>
            </div>
          )}
        <div className='mb-6 flex justify-center items-center'>
          <button onClick={()=>setExamDataLimit(prev => prev + 3)} className='flex items-center py-2 px-6 md:px-8 rounded-full text-sm md:text-base md:font-medium text-[#5a5a5a] md:hover:text-[#fcfcfc] bg-[#f4f4f4] md:hover:bg-[#EE7C00] shadow-md transition-all duration-300'>
            <span className='mr-2'>Show more</span>
            <AiOutlineArrowDown/>
          </button>
        </div>
      </div>  
    </div>
  )
}

export default SchedulerLeftContainer
