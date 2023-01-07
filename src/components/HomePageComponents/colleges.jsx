import React from 'react'
import IIT_Bombay_logo from "../../assets/counsellingColleges/colleges/IIT_Bombay_Logo.svg"
import IIT_Delhi_logo from "../../assets/counsellingColleges/colleges/IIT_Delhi_Logo.svg"
import IIT_Bomabay_banner from "../../assets/counsellingColleges/colleges/IIT_Bombay_banner.svg"
import IIT_Delhi_banner from "../../assets/counsellingColleges/colleges/IIT_Delhi_banner.svg"
import CollegeContainer from './InnerContainers/collegeContainer'

const Colleges = () => {

  const collegeList = [
    {
      id: 1,
      collegeName: "Indian Institute of Technology (Bombay)",
      collegeLogo: IIT_Bombay_logo,
      collegeBanner: IIT_Bomabay_banner
    },
    {
      id: 2,
      collegeName: "Indian Institute of Technology (Delhi)",
      collegeLogo: IIT_Delhi_logo,
      collegeBanner: IIT_Delhi_banner,
    },
  ]

  return (
    <div className='mb-4'>
      <div className='text-center text-xl font-semibold text-[#303030]' >
        Colleges
      </div>
      <div className='text-[#848484] mt-1 text-[12px] text-end'>
        <div>
          Show more &#10140;
        </div>
      </div>
      <div className='flex overflow-x-auto overflow-y-hidden gap-2 py-2'>
        {
            collegeList.map(college => {
              return <CollegeContainer key={college.id} collegeName={college.collegeName} collegeLogo={college.collegeLogo} collegeBanner={college.collegeBanner}/>
            })
        }
          <div className='min-w-[210px] h-[164px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-gradient-to-r from-white to-[#fff6ec] font-medium'>
            <div className='text-sm text-[#EE7C00]'>
              Show More &#10140;
            </div>
          </div>
      </div>
    </div>
  )
}

export default Colleges
