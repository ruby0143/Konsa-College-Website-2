import React from 'react'

const ExamDataContainer = ({exam}) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return (
    <div className='bg-white rounded-md shadow-md h-[186px] w-[48%] mb-4'>
      <div className='h-[50%]'>
        <img 
            src={exam.img} 
            alt="exam img"
            className='h-full w-full object-fill bg-slate-400 rounded-t-md'
        />
      </div>
      <div className='h-[50%] p-3 flex flex-col justify-between'>
        <div>
            <div className='font-light'>
                {exam.exam_name}
            </div>
            <div className='text-[9px] font-medium justify-self-end'>
                Last date to apply: {new Intl.DateTimeFormat('en-US', options).format(new Date(exam.date))}
            </div>  
        </div>
        <button className='w-full rounded-full bg-white border border-[#EE7C00] text-[10px] py-[2px] font-medium text-[#EE7C00]'>
            Apply Now
        </button>
      </div>
    </div>
  )
}

export default ExamDataContainer
