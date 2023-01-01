import React from 'react'
import { BsFillGeoAltFill } from 'react-icons/bs'
// import style from "./collegePageHeader.module.css"
import collegePageBanner from "../../../assets/background/iit_bhu_background.svg"

const CollegePageHeader = () => {

  return (
    <div>
      <div className={`relative flex items-end min-h-[375px] `}>
            <div className='absolute h-full w-full brightness-50' >
              <img src={collegePageBanner} alt="College Page Banner"/>
            </div>
            <div className='h-full px-4 pb-8 z-10'>
              <div className='mb-2' >
                <img src="https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png" alt="college image" className='h-[128px]'/>
              </div>
              <div className='text-white w-[96%] text-xl leading-6 font-semibold mb-2'>
                  Indian Institute of Technology, Banaras Hindu University(BHU)
              </div>
              <div className='flex items-center'>
                <div className='mr-1' >
                  <BsFillGeoAltFill className='text-white text-xl' />
                </div>
                <div className='text-white leading-4 w-[90%] font-light'>
                  IIT-BHU, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221005
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CollegePageHeader
