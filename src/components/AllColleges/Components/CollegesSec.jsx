import React from 'react'
import CollegeContainer from '../../HomePageComponents/InnerContainers/collegeContainer';
import IIT_Delhi_logo from "../../../assets/counsellingColleges/colleges/IIT_Delhi_Logo.svg";
import IIT_Bombay_logo from "../../../assets/counsellingColleges/colleges/IIT_Bombay_Logo.svg";
import IITB from "../../../assets/counsellingColleges/IIT_Bombay.png";

function CollegesSec() {
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
          <div className='grid grid-cols-1 gap-6  p-6 p-8  xxs:px-12 xs:grid-cols-2 xs:px-4 sm:grid-cols-2 sm:p-12 md:px-20 lg:grid-cols-3 lg:p-16 xl:grid-cols-4'>
            {
                collegeList.map(college => {
                  return <CollegeContainer key={college.id} collegeName={college.collegeName} collegeLogo={college.collegeLogo} collegeBanner={college.collegeBanner}/>
                })
            }
          </div>
        </div>
      )
}

export default CollegesSec