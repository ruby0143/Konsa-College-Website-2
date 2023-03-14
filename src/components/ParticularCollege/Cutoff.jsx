import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl"
// import { Link } from "react-router-dom";
import "./cutoff.css"
import { useNavigate } from 'react-router-dom';

function Cutoff(props) {
  const [selectedYear, setSelectedYear] = useState('');
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    if (!selectedYear) {
      setError("Please select an option");
      return;
    }
    const data = { headerPhoto: props.result.header_photo_link, collegeLogo: props.result.college_logo_link, fullName: props.result.college_full_name, name: props.result.college_name, location: props.result.college_location, year: selectedYear };
    navigate(`/college/${props.result.college_uuid}/cutoff`, { state: data });
  }

  const years = ["2022", "2021", "2020"]

  return (
    <div className='mt-10 '>
      <h2 className='text-xl m-3 font-semibold text-[#303030]'>Cut off</h2>
      <hr />
      <div className='my-5'>
        <div className="flex p-3 w-full outline-none border-[1px] border-[rgba(224,224,224,1)] justify-between items-center h-[40px] lg:max-w-[50rem] m-auto" style={{ boxShadow: "0px 2px 2px rgba(0,0,0,0.08)", borderRadius: "34px" }}>
          <select
            name="year"
            className={"custom-select w-full text-[14px] tracking-[.05rem] pl-[5px] text-[#5C5C5C] font-semibold"}
            onChange={(e) => {
              setSelectedYear(e.target.value);
            }}
          >
            <option selected disabled className='option text-[#9D9D9D]'>
              Select session year
            </option>
            {years.map((category) => {
              return <option className='text-[#5C5C5C] font-semibold' value={category}>{category}</option>;
            })}
          </select>
          <SlArrowDown className='mr-3' />
        </div>
        {error &&
          <div className="pt-2 text-xs text-center text-red-500">
            Year is a required field
          </div>
        }
        <div className='mt-[1.5rem]'>
          <button className='text-[#EE7C00] border rounded-[31px] border-[#EE7C00] text-sm font-semibold px-7 py-2' style={{ margin: "auto", display: "grid" }} onClick={handleClick}>
            Get Cutoff
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cutoff