import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {AiOutlineLine} from "react-icons/ai"
import { Crad } from './Crad'

export const TopColleges = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 50;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 50;
      };
  return (
    <>
    <div className='text-3xl text-center mt-12 text-gray-800'>TOP COLLEGES</div>
    {/* <div className='flex justify-center mt-3'> */}
      {/* <hr className=' justify-center w-[100px] text-red-500'></hr> */}
    {/* </div> */}
    <div className='flex justify-center text-red-500 '><AiOutlineLine size={60}/></div>
      <div className='relative flex justify-center items-center mb-12 mx-auto'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 mx-auto text-red-500' onClick={slideLeft} size={100} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >

          <Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/><Crad/>
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 mr-3 text-red-500' onClick={slideRight} size={100} />
      </div>
    </>
  )
}
