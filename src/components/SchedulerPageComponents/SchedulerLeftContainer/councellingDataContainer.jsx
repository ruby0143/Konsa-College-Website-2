import React from 'react'

const CouncellingDataContainer = ({councelling}) => {
  
  return (
    <div className='bg-white rounded-md shadow-md h-[186px] md:h-[206px] lg:h-[236px] xl:h-[276px] w-[48%] md:w-[31%] mb-4 md:mb-6'>
      <div className='h-[50%] flex justify-center items-center'>
        <img 
            src={councelling.img} 
            alt="exam img"
            className='h-full w-full object-cover bg-slate-400 rounded-t-md'
        />
      </div>
      <div className='h-[50%] p-3 md:p-4 xl:p-5 flex flex-col justify-between'>
        <div>
            <div className='font-light text-sm md:text-base xl:text-xl'>
                {councelling.exam_name}
            </div>
            <div className='text-[9px] md:text-[11px] lg:text-[13px] xl:text-base font-medium justify-self-end'>
                Last date to apply: {new Date(councelling.date).toLocaleDateString()}
            </div>  
        </div>
        <a href={councelling.apply_link} className="w-full rounded-full bg-white border border-[#EE7C00] text-[10px] md:text-[12px] lg:text-[14px] py-[2px] lg:py-[4px] font-medium md:font-semibold text-[#EE7C00] hover:bg-[#EE7C00] hover:text-white transition-all duration-500">
          <button className='h-full w-full rounded-full bg-none'>
                Apply Now
          </button>
        </a>
      </div>
    </div>
  )
}

export default CouncellingDataContainer