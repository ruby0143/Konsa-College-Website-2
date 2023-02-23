import React,{useState,useEffect} from 'react'
import { BsFillGeoAltFill } from 'react-icons/bs'
import { AiOutlineLeft } from "react-icons/ai"
import collegePageBanner from "../../../assets/background/iit_bhu_background.svg"
import "./collegePageHeader.css"

const CollegePageHeader = (props) => {
  const [skel,setSkel]=useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSkel(false);
    }, 2000)
  }, [])
  

  return (
    <>
      {skel ? (
        <div
          role="status"
          className="w-full h-[376px] border border-gray-200 rounded shadow animate-pulse  dark:border-gray-700"
        >
          <div className="flex items-center justify-center h-full mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div
          className="w-full h-[376px] relative "
          style={{ filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.25))" }}
        >
          <div className="absolute h-full w-full brightness-[30%]">
            <img
              src={props.result.header_photo_link}
              alt="College Page Banner"
              className="h-full md:w-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 m-4 md:left-1/2 md:transform md:-translate-x-1/2">
            <span>
              <AiOutlineLeft className="text-[#FCFCFC] w-[24px] h-[26px] -ml-2 sm:hidden"></AiOutlineLeft>
            </span>
            <div className="mt-14">
              <div className="mb-6">
                <img
                  src={props.result.college_logo_link}
                  alt="college image"
                  className="h-[128px] md:m-auto"
                />
              </div>
              <div className="text-white w-[96%] text-xl leading-6 mt-[1.5rem] mb-[1rem] md:text-center">
                {props.result.college_full_name}
                <span className="text-[20px] lg:text-[28px]">
                  {" "}
                  {props.result.college_name}
                </span>
              </div>
              <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 lg:w-[30rem]">
                <div className="">
                  <BsFillGeoAltFill className="text-white text-xl" />
                </div>
                <a target="_blank"
                  href={`https://www.google.co.in/maps/search/${props.result.college_location}`}
                  className="collegeLocation text-white font-light md:text-[18px] md:text-center leading-[1.3rem] -mt-[3px] ml-[.3rem]"
                >
                  {props.result.college_location
                    ? props.result.college_location
                    : props.result.college_name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CollegePageHeader
