import React from 'react'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { AiOutlineLeft } from "react-icons/ai"
import collegePageBanner from "../../../assets/background/iit_bhu_background.svg"

const CollegePageHeader = (props) => {

  return (
    <>
      <div className="w-full h-[376px] relative" style={{filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25))"}}>
        <div className='absolute h-full w-full brightness-50' >
          <img src={props.result.header_photo_link} alt="College Page Banner" className='h-full' />
        </div>
        <div className='absolute top-0 left-0 m-4'>
          <span><AiOutlineLeft className='text-[#FCFCFC] w-[24px] h-[26px] -ml-2'></AiOutlineLeft></span>
          <div className='mt-16'>
            <div className='mb-6' >
              <img src={props.result.college_logo_link} alt="college image" className='h-[128px]' />
            </div>
            <div className='text-white w-[96%] text-xl leading-6 mb-[.8rem]'>
              {props.result.college_full_name}
              <span className='text-[19px] font-semibold'> {props.result.college_name}</span>
            </div>
            <div className='flex items-center'>
              <div className='mr-1' >
                <BsFillGeoAltFill className='text-white text-xl' />
              </div>
              <div className='text-white leading-4 w-[90%] font-light text-[14px]'>
                {props.result.college_name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollegePageHeader
