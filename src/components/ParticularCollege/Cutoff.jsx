import React from 'react'
import { SlArrowDown } from "react-icons/sl"

function Cutoff() {
  return (
    <div className='mt-10 md:max-w-[60%] md:mx-[3rem] md:my-[5rem]'>
      <h2 className='text-xl m-3 font-semibold text-[#303030]'>Cut off</h2>
      <hr />
      <div className='m-5'>
        <div className="flex">
          <input type="text" placeholder='Select session year' className='p-3 rounded-lg w-full outline-none mb-6' style={{boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"}}/>
          <SlArrowDown className='-ml-8 mt-4'></SlArrowDown>
        </div>
        <button className='text-[#EE7C00] border rounded-lg border-[#EE7C00] text-sm font-semibold px-7 py-2' style={{ margin: "auto", display: "grid" }}>Get Cutoff</button>
      </div>
    </div>
  )
}

export default Cutoff