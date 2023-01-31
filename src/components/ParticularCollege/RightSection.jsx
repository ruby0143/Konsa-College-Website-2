import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

function RightSection(props) {
  return (
    <div className='flex-row'>
      <div className="newsFeeds mt-[3rem] md:mx-[1.5rem] md:mt-[5rem] ">
        <h2 className=' text-[#303030] text-md m-3 font-semibold'>News Feeds</h2>
        <hr />
        <div className='flex'>
          <div className='flex'>
            <img src="" alt="" />
            <div className="content flex-col">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ut temporibus dolorem, dolor tempore nemo?</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col md:inline-block hidden">
        <div className="dontMiss mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", bordeRadius: "10px" }}>
          <h2 className=' text-[#303030] text-md m-3 font-semibold'>Don't Miss This</h2>
          <hr />
          <div className="flex justify-between px-4 py-6">
            <h2 className="">MIT Pune</h2>
            <button className="bg-[#EE7C00] text-white rounded-[46px] px-[2rem]">Fill Now</button>
          </div>
        </div>
        <div className="explore mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", bordeRadius: "10px" }}>
          <h2 className=' text-[#303030] text-md m-3 font-semibold'>Exams To Explore</h2>
          <hr />
          <div className="flex">
            <div className='flex'>
              <img src="" alt="" />
              <div className="content flex-col">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ut temporibus dolorem, dolor tempore nemo?</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, natus?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col md:inline-block hidden">
        <div className="dontMiss mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", bordeRadius: "10px" }}>
          <h2 className=' text-[#303030] text-md m-3 font-semibold'>Related Colleges</h2>
          <hr />
          <div className="flex justify-between px-4 py-6">
            <img src="" alt="" />
            <p>Indian Institute of Technology Delhi</p>
          </div>
        </div>
        <div className="subscribe mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]" style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)", bordeRadius: "10px" }}>
          <h3 className="text-center py-5 text-[18px] font-semibold">Subscribe to Our Newsletter</h3>
          <div style={{boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.1)"}} className="flex justify-between">
            <input type="text" placeholder="Please enter your Mobile No." className="p-3 bg-[#F5F5F5] w-[80%]" />
            <AiOutlineArrowRight className="w-20% h-6 w-6 m-3"></AiOutlineArrowRight>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection