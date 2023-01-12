import React from 'react'

const CounsellingContainer = ({counsellingName, fullForm, collegeList}) => {
  return (
    <div className='min-w-[168px] md:min-w-[188px] h-[134px] md:h-[154px] px-[8px] py-[20px] flex flex-col items-center justify-between shadow-md rounded-md border border-gray-100 bg-white'>
        <div className='text-xl font-bold text-[#4e4e4e]'>{counsellingName}</div>
        <div className='text-[10px] md:text-sm inline-block md:w-[70%] text-[#4e4e4e] font-semibold text-center' >{fullForm}</div>
        <div className='flex items-center justify-evenly w-full' >  
            {
                collegeList.map((college,id) => {
                    return <div key={id}>
                        <img src={college.logo} alt="college logo" />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default CounsellingContainer
