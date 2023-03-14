import React, { useState, useEffect } from 'react'
import cutoffImg1 from "../assets/cutoff1.png"
import { SlArrowDown } from "react-icons/sl"
import { AiOutlineLeft } from "react-icons/ai"
import { BsFillGeoAltFill } from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import "../components/ParticularCollege/cutoff.css"
import axios from "axios";
import RelatedColleges from '../components/RightNav/RelatedColleges'
import RightCounselling from '../components/RightNav/RightCounselling'
import RightNews from '../components/RightNav/RightNews'
import Subscribe from '../components/RightNav/Subscribe'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Helmet } from 'react-helmet'

function CutoffPage() {
  const location = useLocation();
  const data = location.state;
  const collegeName = data.name;
  const filterCollegeWithComma = collegeName.replace(/,/g, "");
  const filteredCollege = collegeName.replace(/[.,]/g, "");
  const year = data.year;

  useEffect(() => {
    setTimeout(() => {
      setSkel(false);
    }, 2000)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [error, setError] = useState("");

  const [colleges, setColleges] = useState([])
  const [filteredProg, setFilteredProg] = useState([])
  const [cutoffData, setCutoffData] = useState()
  const [program, setProgram] = useState([])
  const [opening, setOpening] = useState([])
  const [closing, setClosing] = useState([])

  const [skel, setSkel] = useState(true)

  const url = "https://konsa-college-backend.vercel.app";

  useEffect(() => {
    axios
      .get(
        url + "/branches"
      )
      .then((res) => {
        const arr = res.data;
        arr.forEach((ele) => {
          const col = ele.Institute;
          const filteredCol = col.replace(/[.,]/g, "")
          if (filteredCol === filteredCollege) {
            const colProg = ele.Array;
            const arrPgs = colProg.split("'");
            const filtered = arrPgs.filter((arr) => {
              if (!arr.includes("[") && !arr.includes("]")) {
                return arr
              }
            })
            const filteredArr = filtered.filter((arr) => {
              if (arr !== ", ") {
                return arr
              }
            })
            setFilteredProg(filteredArr)
          }
          setColleges(function (prevState) {
            return [...prevState, col];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCutoff = () => {
    if (selectedCategory === null || selectedGender === null) {
      setError("Please select an Option")
      return
    }
    axios
      .post(url + "/cutoff", {
        Institute: filterCollegeWithComma,
        Gender: selectedGender,
        Caste: selectedCategory,
      })
      .then((resp) => {
        const keys = Object.keys(resp.data)
        if (year === "2022" && keys[0]) {
          setCutoffData(resp.data.y22);
        }
        if (year === "2021" && keys[1]) {
          setCutoffData(resp.data.y21);
        }
        if (year === "2020" && keys[2]) {
          setCutoffData(resp.data.y20);
        }
      })
      .catch((err) => {
      });
  }

  useEffect(() => {
    setCutoffData()
    setProgram([])
    setOpening([])
    setClosing([])
  }, [selectedCategory, selectedGender]);

  const handleRound = (e) => {
    const textContent = e.target.textContent;
    const value = textContent.replace("Round", "")
    const programs = [];
    const opening = [];
    const closing = [];
    cutoffData.map((round) => {
      if (value === round.Round && round.Quota === "OS") {
        programs.push(round.Academic_Program_Name)
        opening.push(round.Opening_Rank)
        closing.push(round.Closing_Rank)
      }
    })
    setProgram(programs)
    setOpening(opening)
    setClosing(closing)
  }

  const category = [
    "EWS",
    "EWS (PwD)",
    "OBC-NCL",
    "OBC-NCL (PwD)",
    "OPEN",
    "OPEN (PwD)",
    "SC",
    "SC (PwD)",
    "ST",
    "ST (PwD)"
  ];

  const gender = [
    "Gender-Neutral",
    "Female-only (including Supernumerary)"
  ]

  const totalRounds = [
    { Round: 1 }, { Round: 2 }, { Round: 3 }, { Round: 4 }, { Round: 5 }, { Round: 6 },
  ]


  return (
    <>
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Konsacollege - Cutoff</title>
        <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.konsacollege.com" />
          <meta property="og:site_name"
            content="Konsacollege - Cutoff"/>
          <meta property="og:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta property="og:determiner" content="..." />
          <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
          <meta name="twitter:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta name="twitter:image:alt"
            content="Konsa College Logo" />
          <meta property="twitter:url" content="https://www.konsacollege.com" />
          <meta property="twitter:site" content="@konsacollege" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
      </Helmet>
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
              src={data.headerPhoto}
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
                  src={data.collegeLogo}
                  alt="college image"
                  className="h-[128px] md:m-auto"
                />
              </div>
              <div className="text-white w-[96%] text-xl leading-6 mt-[1.5rem] mb-[1rem] md:text-center">
                {data.fullName}
                <span className="text-[20px] lg:text-[28px]">
                  {" "}
                  {data.name}
                </span>
              </div>
              <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 lg:w-[30rem]">
                <div className="">
                  <BsFillGeoAltFill className="text-white text-xl" />
                </div>
                <a target="_blank"
                  href={`https://www.google.co.in/maps/search/${data.location}`}
                  className="collegeLocation text-white font-light md:text-[18px] md:text-center leading-[1.3rem] -mt-[3px] ml-[.3rem]"
                >
                  {data.location
                    ? data.location
                    : data.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='md:flex justify-between md:px-12'>
        {/* left  */}
        <div className='px-[1rem] md:max-w-[65%]'>
          <h2 className='mt-10 lg:mt-16 text-[20px] font-semibold mb-3 lg:text-[24px]'>Cut off</h2>
          <hr />
          <div className='mb-[2.5rem]'>
            <div className='flex my-[1.5rem]'>
              <img src={cutoffImg1} alt="" className='w-[2rem] h-[.8rem] mt-1' />
              <p className='ml-2 text-[12px] lg:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate est commodi eveniet suscipit animi expedita eos quidem. Error, quam dicta! Beatae ratione possimus, obcaecati nihil nemo provident fugit itaque impedit libero nesciunt vel veritatis. Doloremque vel rerum praesentium obcaecati exercitationem, iste unde minima, aut corrupti, consectetur quod odit recusandae?</p>
            </div>
            <div className='flex my-[1.5rem]'>
              <img src={cutoffImg1} alt="" className='w-[2rem] h-[.8rem] mt-1' />
              <p className='ml-2 text-[12px] lg:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate est commodi eveniet suscipit animi expedita eos quidem. Error, quam dicta! Beatae ratione possimus, obcaecati nihil nemo provident fugit itaque impedit libero nesciunt vel veritatis. Doloremque vel rerum praesentium obcaecati exercitationem, iste unde minima, aut corrupti, consectetur quod odit recusandae?</p>
            </div>
          </div>
          <div className='mb-[2rem]'>
            <h3 className='text-[16px] font-semibold text-[#3A3A3A] text-center mb-[1.3rem] lg:text-[20px] tracking-[2.5px]'>Select Your Category</h3>
            <div className='lg:mb-[4rem] mb-[3rem]'>
              <div className="flex p-3 w-full outline-none mb-6 lg:mb-10 border-[1px] lg:border-none border-[rgba(224,224,224,1)] justify-between items-center h-[40px] lg:h-[50px] lg:shadow-[0px_2px_8px_rgba(0,0,0,0.15)] rounded-[34px]" >
                <select
                  name="category"
                  className="custom-select w-full text-[14px] lg:text-[16px] tracking-[.05rem] pl-[5px] lg:pl-[14px] text-[#5C5C5C] font-semibold lg:font-bold"
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                  }}
                >
                  <option selected disabled className='option text-[#9D9D9D]'>
                    Category
                  </option>
                  {category.map((category) => {
                    return <option className='text-[#5C5C5C] font-semibold' value={category}>{category}</option>;
                  })}
                </select>
                <SlArrowDown className='mr-3' />
              </div>
              {error && selectedCategory === null ?
                <div className="pt-2 text-xs -mt-8 mb-5 lg:mb-9 lg:text-lg text-center text-red-500">
                  Category is a required field
                </div> : ""
              }
              <div className="flex p-3 w-full outline-none mb-6 lg:mb-10 border-[1px] lg:border-none border-[rgba(224,224,224,1)] justify-between items-center h-[40px] lg:h-[50px] lg:shadow-[0px_2px_8px_rgba(0,0,0,0.15)] rounded-[34px]" >
                <select
                  name="gender"
                  className={"custom-select w-full text-[14px] lg:text-[16px] tracking-[.05rem] pl-[5px] lg:pl-[14px] text-[#5C5C5C] font-semibold lg:font-bold"}
                  onChange={(e) => {
                    setSelectedGender(e.target.value);
                  }}
                >
                  <option selected disabled className='option text-[#9D9D9D]'>
                    Gender
                  </option>
                  {gender.map((gender) => {
                    return <option className='text-[#5C5C5C] font-semibold' value={gender}>{gender}</option>;
                  })}
                </select>
                <SlArrowDown className='mr-3' />
              </div>
              {error && selectedGender === null ?
                <div className="pt-2 text-xs -mt-8 mb-5 lg:mb-9 lg:text-lg text-center text-red-500">
                  Gender is a required field
                </div> : null
              }
              <div className="flex p-3 w-full outline-none mb-6 lg:mb-10 border-[1px] lg:border-none border-[rgba(224,224,224,1)] justify-between items-center h-[40px] lg:h-[50px] lg:shadow-[0px_2px_8px_rgba(0,0,0,0.15)] rounded-[34px]" >
                <select
                  name="colleges"
                  className="custom-select w-full text-[14px] lg:text-[16px] tracking-[.05rem] pl-[5px] lg:pl-[14px] text-[#5C5C5C] font-semibold lg:font-bold"
                  onChange={(e) => {
                    setSelectedCourse(e.target.value);
                  }}
                >
                  <option selected disabled>
                    Course
                  </option>
                  {filteredProg?.map((prog) => {
                    return <option className='font-semibold text-[#5C5C5C]' value={prog}>{prog}</option>
                  })}
                </select>
                <SlArrowDown className='mr-3' />
              </div>
            </div>
            <button className='text-[#EE7C00] border rounded-[34px] lg:rounded-[10px] border-[#EE7C00] text-sm lg:text-lg font-semibold px-7 lg:px-14 py-2 mx-auto' style={{ display: "grid" }} onClick={handleCutoff}>
              Get Cutoff
            </button>
            {cutoffData && (
              <>
                <hr className='mt-[2rem] lg:mt-[3rem]' />
                <div className='flex justify-between items-center overflow-x-scroll h-[3.5rem] mt-[1.5rem] w-full'>
                  {totalRounds.map((round) => {
                    return <button className='text-[15px] px-[1.5rem] py-[5px] text-[#505050] font-semibold rounded-[5px] hover:bg-[#ee7c00] hover:text-[#fff] text-center border-[.5px] border-[#d6d6d6] mr-[1rem] w-[10rem] active:bg-[#ee7c00] active:text-[#fff] focus:bg-[#ee7c00] focus:text-[#fff]'
                      onClick={handleRound}>Round{round.Round}</button>
                  })}
                </div>
              </>
            )}
            {program.length !== 0 ? (
              <>
                <div className='mt-[2.5rem] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.12)] pt-[1rem]'>
                  <div className='flex'>
                    <div className='text-[#303030] font-semibold w-[60%] text-[13px] lg:text-[16px] lg:font-bold h-[2rem] lg:pl-[20px] px-[.5rem] mb-3'>Branch</div>
                    <div className='text-[#303030] font-semibold w-[20%] text-[13px] lg:text-[16px] lg:font-bold  text-center h-[2rem] mb-3'>Opening</div>
                    <div className='text-[#303030] font-semibold w-[20%] text-[13px] lg:text-[16px] lg:font-bold text-center h-[2rem] mb-3'>Closing</div>
                  </div>
                  <div className='flex'>
                    <div className='text-[#303030] w-[60%] text-[13px]'>
                      {program.map((prog, index) => {
                        return <div style={{ backgroundColor: index % 2 === 0 ? "rgba(238, 124, 0, 0.1)" : "#fff" }} className="h-[3.5rem] leading-[.9rem] p-[.5rem] lg:pl-[20px] lg:text-[16px] flex items-center" data-tooltip-id="my-tooltip" data-tooltip-content={prog}>{prog.split("(").shift()}</div>
                      })}
                      <Tooltip id="my-tooltip" />
                    </div>
                    <div className='text-[#303030] w-[20%] text-[13px] text-center'>
                      {opening.map((op, index) => {
                        return <div style={{ backgroundColor: index % 2 === 0 ? "rgba(238, 124, 0, 0.1)" : "#fff" }} className="h-[3.5rem] lg:text-[16px] flex justify-center items-center">{op}</div>
                      })}
                    </div>
                    <div className='text-[#303030] w-[20%] text-[13px] text-center'>
                      {closing.map((cl, index) => {
                        return <div style={{ backgroundColor: index % 2 === 0 ? "rgba(238, 124, 0, 0.1)" : "#fff" }} className="h-[3.5rem] lg:text-[16px] flex justify-center items-center">{cl}</div>
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <div className='lg:hidden'>
            <h3 className='mt-2 text-[20px] font-semibold mb-3'>Similar Colleges</h3>
            <hr />
          </div>
        </div>
        {/* right */}
        <div className="md:max-w-[34%] px-4 lg:pl-12 md:inline-block hidden lg:mt-6">
          <RightNews></RightNews>
          {program.length !== 0 && <RightCounselling></RightCounselling>}
          <RelatedColleges></RelatedColleges>
          <Subscribe></Subscribe>
        </div>
      </div>
    </>
  )
}

export default CutoffPage