import React from 'react'
import {AiOutlineDown} from "react-icons/ai"
const CollegePredictor = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <h2 className="pt-[80px] font-roboto font-bold text-[30px] text-[#3C3B3B] text-center tracking-wider">
        College Predictor
      </h2>
      <div className=" flex justify-center mb-[60px]">
        <p className="text-center w-[80%] mt-[30px] text-[#3C3B3B] leading-5 tracking-wide">
          Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
          pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
          porttitor tellus imperdiet. Id nunc turpis donec aliquam .
        </p>
      </div>
      <div className="flex justify-center bg-[url('/cpbg.svg')] bg-cover ">
        <div
          className="w-[60%] h-[550px] bg-[#FFFFFF] flex flex-row mb-[80px]"
          style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
            <h4 className="mt-[22px] text-center font-bold">
              Enter your JEE Mains 2023 Details
            </h4>
            <h6 className="mt-[35px]">Your Percentile</h6>
            <input
              className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter Your Percentile"
            ></input>

            <h6 className="mt-[18px]">State Your Eligibility</h6>
            <input
              className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter Your State"
            ></input>

            <h6 className="mt-[18px]">Your Category</h6>
            <input
              className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm tracking-wide focus:outline-none w-full p-[6px]"
              style={{
                boxShadow:
                  "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                border: "0.760417px solid #CCCCCC",
              }}
              type="text"
              placeholder="Enter Your Category"
            ></input>
            
            <div className="flex flex-row mt-[18px] justify-start">
              <div className="w-[50%]">
                <h6>Gender</h6>
                <div className="flex flex-row mt-[8px] gap-x-4">
                  <input
                    type="radio"
                    id="Gender"
                    name="gender"
                    value="Male"
                  />
                  <label for="html">Male</label>
                  <input
                    type="radio"
                    id="Gender"
                    name="gender"
                    value="Female"
                  />
                  <label for="css">Female</label>
                </div>
              </div>
              <div className="w-[50%]">
                <h6>Are You Pwd</h6>
                <div className="flex flex-row mt-[8px] gap-x-4">
                  <input
                    type="radio"
                    id="pwd"
                    name="pwd"
                    value="Yes"
                  />
                  <label for="html">Yes</label>
                  <input
                    type="radio"
                    id="pwd"
                    name="pwd"
                    value="No"
                  />
                  <label for="css">No</label>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-[30px]">
              <div className='w-[50%] bg-[#EE7C00] rounded-[2px] flex justify-center' style={{boxShadow:"0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)"}}>
                <button className='text-[#FFFFFF] p-1'>Predict Now</button>
              </div>
            </div>
          </div>

            <div
              className="w-[47%] flex justify-center p-10 items-center"
              style={{
                background:
                  "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
              }}
            >
              <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wider text-[30px] font-bold">
                Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
                tellus pellentes
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CollegePredictor