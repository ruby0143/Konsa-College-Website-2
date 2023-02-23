import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl"
import { Link } from "react-router-dom";
import "./cutoff.css"

function Cutoff(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='mt-10 '>
      <h2 className='text-xl m-3 font-semibold text-[#303030]'>Cut off</h2>
      <hr />
      <div className='my-5'>
        <div className="flex p-3 w-full outline-none mb-6 border-[1px] border-[rgba(224,224,224,1)] justify-between items-center h-[40px]" style={{ boxShadow: "0px 2px 2px rgba(0,0,0,0.08)", borderRadius: "34px" }}>
          <select value={selectedOption} onChange={handleSelect} className="custom-select w-full text-[#9D9D9D] text-[14px] tracking-[.05rem] pl-[5px]">
            <option value="">Select Session Year</option>
            <option value="option1">2022</option>
          </select>
          <SlArrowDown className='mr-3' />
        </div>
        <button className='text-[#EE7C00] border rounded-[31px] border-[#EE7C00] text-sm font-semibold px-7 py-2' style={{ margin: "auto", display: "grid" }}>
          <Link to={`/college/${props.result.college_uuid}/cutoff`}>Get Cutoff</Link>
        </button>
      </div>
    </div>
  )
}

export default Cutoff