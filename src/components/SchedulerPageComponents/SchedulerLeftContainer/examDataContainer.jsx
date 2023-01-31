import React from 'react'

const ExamDataContainer = ({exam}) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return (
    <div className='bg-white rounded-md shadow-md min-h-[186px] xl:h-[300px] w-[48%] md:w-[31%] mb-4 md:mb-6'>
      <div className='h-[50%]'>
        <img 
            src={exam.img} 
            alt="exam img"
            className='h-full w-full object-fill bg-slate-400 rounded-t-md'
        />
      </div>
      <div className='h-[50%] p-3 md:p-4 xl:p-5 flex flex-col justify-between'>
        <div>
            <div className='font-light lg:text-xl xl:text-2xl'>
                {exam.exam_name}
            </div>
            <div className='text-[9px] md:text-[11px] lg:text-[13px] xl:text-base font-medium justify-self-end'>
                Last date to apply: {new Intl.DateTimeFormat('en-US', options).format(new Date(exam.date))}
            </div>  
        </div>
        <button className='w-full rounded-full bg-white border border-[#EE7C00] text-[10px] md:text-[12px] lg:text-[14px] py-[2px] font-medium md:font-semibold text-[#EE7C00]'>
            Apply Now
        </button>
      </div>
    </div>
  )
}

export default ExamDataContainer
