import React from 'react'
import { Link } from "react-router-dom";

const ExamDataContainer = ({exam}) => {
  
  return (
    <div className='bg-white rounded-md shadow-md h-[186px] md:h-[206px] lg:h-[236px] xl:h-[300px] w-[48%] md:w-[31%] mb-4 md:mb-6'>
      <div className='h-[50%] flex justify-center items-center'>
        <img 
            src={exam.img} 
            alt="exam img"
            className='h-full w-full object-cover bg-slate-400 rounded-t-md'
        />
      </div>
      <div className='h-[50%] p-3 md:p-4 xl:p-5 flex flex-col justify-between'>
        <div>
            <div className='font-light text-sm md:text-base xl:text-xl'>
                {exam.exam_name}
            </div>
            <div className='text-[9px] md:text-[11px] lg:text-[13px] xl:text-base font-medium justify-self-end'>
                Last date to apply: {new Date(exam.date).toLocaleDateString()}
            </div>  
        </div>

        <button className='w-full rounded-full bg-white border border-[#EE7C00] text-[10px] md:text-[12px] lg:text-[14px] py-[2px] font-medium md:font-semibold text-[#EE7C00]'>
          <a href={exam.apply_link} className="w-full h-full">
              Apply Now
          </a>
        </button>
      </div>
    </div>
  )
}

export default ExamDataContainer
