import React from 'react'
import { BsFillGeoAltFill } from 'react-icons/bs'
import collegePageBanner from "../../../assets/background/iit_bhu_background.svg"

const CollegePageHeader = (props) => {

  return (
    <div>
      <div className={`relative flex items-end min-h-[375px]`}>
            <div className='absolute h-full w-full brightness-50' >
              <img src={props.result.header_photo_link} alt="College Page Banner"/>
            </div>
            <div className='h-full px-4 pb-8 z-10'>
              <div className='mb-2' >
                <img src={props.result.college_logo_link} alt="college image" className='h-[128px]'/>
              </div>
              <div className='text-white w-[96%] text-xl leading-6 font-semibold mb-2'>
              {props.result.college_full_name}
                <span> {props.result.college_name}</span>
              </div>
              <div className='flex items-center'>
                <div className='mr-1' >
                  <BsFillGeoAltFill className='text-white text-xl' />
                </div>
                <div className='text-white leading-4 w-[90%] font-light'>
                {props.result.overview}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CollegePageHeader
