import React, { useEffect, useState } from 'react';
import CollegeContainer from '../../HomePageComponents/InnerContainers/collegeContainer';
import axios from 'axios';

function CollegesSec() {
  const [collegeList,setColleges] = useState([]);
  const getData = async () =>{
    await axios
    .get("https://konsa-college-backend-production.up.railway.app/colleges")
    .then((response) => {
  
      if (response.data != "404") {
        console.log(response.data);
        setColleges(response.data);
      } else {
        console.log("Error!");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getData();
  }, []);


    
      return (
        <div className='mb-4'>
          <div className='text-center text-xl md:text-2xl mb-1 font-semibold text-[#303030]' >
            Colleges
          </div>
          <div className='grid grid-cols-1 gap-6 xxs:px-12 xs:grid-cols-2 xs:px-4 sm:grid-cols-2 sm:p-12 md:px-20 lg:grid-cols-3 lg:p-16 xl:grid-cols-4'>
            {
                collegeList.map(college => {
                  return <CollegeContainer key={college.id} collegeName={college.college_name} collegeLogo={college.college_logo_link} collegeBanner={college.header_photo_link} link={college.college_uuid}/>
                })
            }
          </div>
        </div>
      )
}

export default CollegesSec