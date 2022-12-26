import React from 'react'
import { SlArrowDown } from "react-icons/sl"

function Cutoff() {
  return (
    <div className='mt-10'>
      <h2 className='text-xl m-3 font-semibold'>Cut off</h2>
      <hr />
      <div className='m-5'>
        <div className="flex">
          <input type="text" placeholder='Select session year' className='p-3 rounded-3xl w-full outline-none shadow-md mb-6'/>
          <SlArrowDown className='-ml-8 mt-4'></SlArrowDown>
        </div>
        <button className='text-[#EE7C00] border rounded-lg border-[#EE7C00] text-sm font-semibold px-7 py-2' style={{margin:"auto", display:"grid"}}>Get Cutoff</button>
      </div>
    </div>
  )
}

export default Cutoff