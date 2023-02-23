import React, {useState} from 'react'
// import Header from "../components/Header/collegePageHeader/collegePageHeader"
import Header from "../components/Header/MainHeader/homeHeader"
import cutoffImg1 from "../assets/cutoff1.png"
import { SlArrowDown } from "react-icons/sl"

function CutoffPage(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Header />
      {/* <Header2 /> */}
      <div className='px-[1rem]'>
        <h2 className='mt-10 text-[20px] font-semibold mb-3'>Cut off</h2>
        <hr />
        <div className='mb-[2.5rem]'>
          <div className='flex my-[1.5rem]'>
            <img src={cutoffImg1} alt="" className='w-[2rem] h-[.8rem] mt-1' />
            <p className='ml-2 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas nobis dolores tempore explicabo sunt repellat eius vitae quasi voluptates!</p>
          </div>
          <div className='flex my-[1.5rem]'>
            <img src={cutoffImg1} alt="" className='w-[2rem] h-[.8rem] mt-1' />
            <p className='ml-2 text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas nobis dolores tempore explicabo sunt repellat eius vitae quasi voluptates!</p>
          </div>
        </div>
        <div className='mb-[2rem]'>
          <h3 className='text-[16px] font-semibold text-[#3A3A3A] text-center mb-[1.3rem]'>Select Your Category</h3>
          <div>
            <div className="flex p-3 w-full outline-none mb-6 border-[1px] border-[rgba(224,224,224,1)] justify-between items-center h-[40px]" style={{borderRadius: "34px" }}>
              <select value={selectedOption} onChange={handleSelect} className="custom-select w-full text-[#9D9D9D] text-[14px] tracking-[.05rem] pl-[5px]">
                <option value="">Category</option>
                <option value="option1">x</option>
                <option value="option2">y</option>
              </select>
              <SlArrowDown className='mr-3' />
            </div>
            <div className="flex p-3 w-full outline-none mb-6 border-[1px] border-[rgba(224,224,224,1)] justify-between items-center h-[40px]" style={{borderRadius: "34px" }}>
              <select value={selectedOption} onChange={handleSelect} className="custom-select w-full text-[#9D9D9D] text-[14px] tracking-[.05rem] pl-[5px]">
                <option value="">Gender</option>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>
              <SlArrowDown className='mr-3' />
            </div>
            <div className="flex p-3 w-full outline-none mb-6 border-[1px] border-[rgba(224,224,224,1)] justify-between items-center h-[40px]" style={{ borderRadius: "34px" }}>
              <select value={selectedOption} onChange={handleSelect} className="custom-select w-full text-[#9D9D9D] text-[14px] tracking-[.05rem] pl-[5px]">
                <option value="">Course</option>
                <option value="option1">a</option>
                <option value="option2">b</option>
              </select>
              <SlArrowDown className='mr-3' />
            </div>
          </div>
          <button className='text-[#EE7C00] border rounded-[34px] border-[#EE7C00] text-sm font-semibold px-7 py-2' style={{ margin: "auto", display: "grid" }}>
            Get Cutoff
          </button>
        </div>
        <div>
          <h3 className='mt-2 text-[20px] font-semibold mb-3'>Similar Colleges</h3>
          <hr />
        </div>
      </div>
    </>
  )
}

export default CutoffPage