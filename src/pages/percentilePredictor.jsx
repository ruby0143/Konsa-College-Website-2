import React from 'react'
import {AiOutlineDown} from "react-icons/ai"
const CollegePredictor = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <h2 className="pt-[80px] font-roboto font-bold text-[30px] text-[#3C3B3B] text-center tracking-wider">
      Percentile Predictor
      </h2>
      <h3 className="pt-[20px] font-roboto font-bold text-[22px] text-[#3C3B3B] text-center tracking-wider">
      JEE Mains 2023
      </h3>
      <div className=" flex justify-center mb-[60px]">
        <p className="text-center w-[80%] mt-[20px] text-xl font-normal text-[#3C3B3B] leading-6 tracking-wider">
          Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
          pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
          porttitor tellus imperdiet. Id nunc turpis donec aliquam .
        </p>
      </div>
      <div className="flex justify-center bg-[url('/cpbg.svg')] bg-cover ">
        <div
          className="w-[60%] h-[450px] bg-[#FFFFFF] flex flex-row mb-[80px]"
          style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
            <h4 className="mt-[22px] text-center font-bold">
            Enter your JEE Mains 2023 Details
            </h4>
            <h6 className="mt-[35px]">Your Shift</h6>
            <input
              className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter Your Shift"
            ></input>

            <h6 className="mt-[26px]">Enter score out of 300 </h6>
            <input
              className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter your JEE Marks"
            ></input>

           
            <div className="w-full flex justify-center mt-[44px]">
              <div className='w-[50%] bg-[#EE7C00] rounded-[2px] flex justify-center' style={{boxShadow:"0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)"}}>
                <button className='text-[#FFFFFF] p-1'>Predict Now</button>
              </div>
            </div>
          </div>

            <div
              className="w-[47%] flex justify-center flex-col p-3 items-center"
              style={{
                background:
                  "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
              }}
            >
              <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
              Your Expected Percentile is 
              </p>
              <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
              99.6 - 99.9
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CollegePredictor