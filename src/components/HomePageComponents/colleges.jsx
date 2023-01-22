import React, { useEffect, useState } from 'react'
import CollegeContainer from './InnerContainers/collegeContainer'
import axios from "axios";
import { Link } from 'react-router-dom';

const Colleges = () => {
  const [collegeList,setColleges] = useState([]);

  const getData = async () =>{
    await axios
    .get("https://konsa-college-backend-production.up.railway.app/colleges")
    .then((response) => {
  
      if (response.data != "404") {
        setColleges(response.data);
      } else {
        console.log("Error!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(()=>{
    getData();   
  },[]);

  return (
    <div className='mb-4'>
      <div className='text-center text-xl md:text-2xl mb-1 font-semibold text-[#303030]' >
        Colleges
      </div>
      <div className='flex md:max-w-[1100px] md:m-auto items-center overflow-x-auto overflow-y-hidden gap-2 py-2'>
        {
            collegeList.map((college,idx) => {
              if(idx<6){
                return <CollegeContainer key={idx} collegeName={college.college_name} collegeLogo={college.college_logo_link} collegeBanner={college.header_photo_link} collegeId={college.college_uuid}/>
              }
              
            })
        }
          <Link to="/allcolleges">
            <div className='min-w-[210px] flex-grow-1 md:min-w-[230px] h-[164px] md:h-[184px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-gradient-to-r from-white to-[#fff6ec] font-medium cursor-pointer'>
              <div className='text-sm text-[#EE7C00]'>
                Show More &#10140;
              </div>
            </div>
          </Link>
          
      </div>
    </div>
  )
}

export default Colleges
