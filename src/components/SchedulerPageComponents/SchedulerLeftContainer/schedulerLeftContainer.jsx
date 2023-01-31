import React from 'react'
import ExamDataContainer from './examDataContainer'

const SchedulerLeftContainer = ({examData}) => {



  return (
    <div>
      <div className='text-xs mb-6'>
        Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut porttitor tellus imperdiet. Id nunc turpis donec aliquam amet aliquam quam.
      </div>

      <div className='mb-4'>
        <div className="mb-4">
            <div className='text-xl text-[#303030] font-medium'>Applications</div>
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
      
      <div className='mb-4'>
        <div className="mb-4">
            <div className='text-xl text-[#303030] font-medium'>Exams</div>
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
