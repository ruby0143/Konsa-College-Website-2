import React from 'react'
import CouncellingDataContainer from './councellingDataContainer'
import ExamDataContainer from './examDataContainer'

const SchedulerLeftContainer = ({examData, councellingData}) => {



  return (
    <div>
      <div className='md:hidden text-xs mb-6'>
        Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut porttitor tellus imperdiet. Id nunc turpis donec aliquam amet aliquam quam.
      </div>
      <div className='hidden md:inline-flex mb-6 leading-5'>
        Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut porttitor tellus imperdiet. Id nunc turpis donec aliquam amet aliquam quam. Risus pellentesque aliquet nunc eu. Pulvinar pulvinar posuere volutpat quam purus dictum maecenas. Facilisi amet nibh massa lobortis risus sem. Cras cras donec lorem faucibus a congue.
      </div>
      
      <div className='mb-4'>
        <div className="mb-4 md:mb-8">
            <div className='text-xl md:text-2xl lg:text-3xl text-[#303030] font-medium'>Applications</div>
            <hr className='mt-2'/>
        </div>
        <div className='flex flex-wrap justify-between'>
            {
              councellingData?.map(exam => {
                return <CouncellingDataContainer key={exam._id} exam={exam}/>
              })
            }
        </div>
      </div>  
      
      <div className='mb-4'>
        <div className="mb-4">
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
