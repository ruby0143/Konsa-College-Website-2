import React from 'react'
// import data from "./data"
import img1 from "./images/showcase1.jpg"
import img2 from "./images/showcase2.jpg"
import img3 from "./images/showcase3.jpg"
import img4 from "./images/showcase4.jpg"
import img5 from "./images/showcase5.jpg"
import img6 from "./images/showcase6.jpg"
import "./takeDecisions.css"


const takeInformedDecision = () =>{
  return (
    <div className='mt-10 text-center bg-slate-100'>
      <h2 className='text-3xl text-gray-700 px-12'>TAKE INFORMED DECISIONS</h2>
      <span></span>
      <div className="flex-col mt-16 px-6 md:grid md:grid-cols-3 md:grid-rows-2">
        <div className="same colleges h-48 w-68 sm:h-72 relative border-8 border-[#fff] border-solid mb-3">
          <img src={img1} alt="img1" className='h-full w-full' style={{filter: "brightness(80%)"}}/>
          <p className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold'>Colleges</p>
        </div>
        <div className="same cutoff h-48 w-68 sm:h-72 relative border-8 border-[#fff] border-solid mb-3">
          <img src={img2} alt="img2" className='h-full w-full' style={{filter: "brightness(80%)"}}/>
          <p className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold'>Cutoff</p>
        </div>
        <div className="same tools h-48 w-68 sm:h-72 relative border-8 border-[#fff] border-solid mb-3">
          <img src={img3} alt="" className='h-full w-full' style={{filter: "brightness(70%)"}}/>
          <p className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold'>Tools</p>
        </div>
        <div className="same news h-48 w-68 sm:h-72 relative border-8 border-[#fff] border-solid mb-3">
          <img src={img4} alt="" className='h-full w-full' style={{filter: "brightness(80%)"}}/>
          <p className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold'>News</p>
        </div>
        <div className="same exams h-48 w-68 sm:h-72 relative border-8 border-[#fff] border-solid mb-3">
          <img src={img5} alt="" className='h-full w-full' style={{filter: "brightness(70%)"}}/>
          <p className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold'>Exams</p>
        </div>
        <div className="same forum h-48 w-68 sm:h-72 relative border-8 border-[#fff] border-solid mb-3">
          <img src={img6} alt="" className='h-full w-full' style={{filter: "brightness(70%)"}}/>
          <p className='absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-semibold'>Forum</p>
        </div>
      </div>
    </div>
  )
}

export default takeInformedDecision