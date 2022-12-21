import React from 'react'
import img from "../../assets/iithyerabad.jpg"
import {AiOutlineLine} from "react-icons/ai"
import { Link } from 'react-router-dom'


export const Crad = () => {
  return (
    <div className="w-[240px] lg:w-[360px] inline-block m-1 lg:m-12 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded shadow-lg">
  <img className="w-full" src={img} alt="college_pic"/>
  <div className="px-6 py-4">
    <div className="text-lg transition-all delay-100 text-gray-500"><Link className='hover:font-semibold'>IIT HYDERABAD</Link></div>
    <div className='flex justify-start font-thin text-red-500 '>
      <AiOutlineLine size={40}/>
      </div>
            <ul>
            <li><Link className='text- text-gray-500 transition-all delay-100 hover:font-semibold'>How to reach</Link></li>
            <li><Link className='text- text-gray-500 transition-all delay-100 hover:font-semibold'>Cources</Link></li>
            <li><Link className='text- text-gray-500 transition-all delay-100 hover:font-semibold'>Seats</Link></li>
            <li><Link className='text- text-gray-500 transition-all delay-100 hover:font-semibold'>Cutoff</Link></li>
            <li><Link className='text- text-gray-500 transition-all delay-100 hover:font-semibold'>Fee Structure</Link></li>
            <li><Link className='text- text-gray-500 transition-all delay-100 hover:font-semibold'>Placements</Link></li>
            </ul>
  </div>
</div>
  )
}
