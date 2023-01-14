import React from 'react'
import IIT_Bombay_logo from "../../assets/counsellingColleges/colleges/IIT_Bombay_Logo.svg"
import IIT_Delhi_logo from "../../assets/counsellingColleges/colleges/IIT_Delhi_Logo.svg"
import CollegeContainer from './InnerContainers/collegeContainer'
import IITB from '../../assets/counsellingColleges/IIT_Bombay.png'

const Colleges = () => {

  const collegeList = [
    {
      id: 1,
      collegeName: "Indian Institute of Technology (Bombay)",
      collegeLogo: IIT_Bombay_logo,
      collegeBanner: IITB
    },
    {
      id: 2,
      collegeName: "Indian Institute of Technology (Delhi)",
      collegeLogo: IIT_Delhi_logo,
      collegeBanner: IITB,
    },
    {
      id: 3,
      collegeName: "Indian Institute of Technology (Delhi)",
      collegeLogo: IIT_Delhi_logo,
      collegeBanner: IITB,
    },
  ]

  return (
    <div className='mb-4'>
      <div className='text-center text-xl md:text-2xl mb-1 font-semibold text-[#303030]' >
        Colleges
      </div>
      <div className='flex md:max-w-[1100px] md:m-auto items-center overflow-x-auto overflow-y-hidden gap-2 py-2'>
        {
            collegeList.map(college => {
              return <CollegeContainer key={college.id} collegeName={college.collegeName} collegeLogo={college.collegeLogo} collegeBanner={college.collegeBanner}/>
            })
        }
          <div className='min-w-[210px] flex-grow-1 md:min-w-[230px] h-[164px] md:h-[184px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-gradient-to-r from-white to-[#fff6ec] font-medium cursor-pointer'>
            <div className='text-sm text-[#EE7C00]'>
              Show More &#10140;
            </div>
          </div>
      </div>
    </div>
  )
}

export default Colleges
