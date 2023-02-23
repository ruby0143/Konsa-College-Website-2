import React, { useState, useEffect } from "react";
import CounsellingContainer from "./InnerContainers/counsellingContainer";
import axios from "axios";
import CollegeSkeleton from "../AllColleges/Components/CollegeSkeleton";
import { Link } from "react-router-dom";

const CollegeCounselling = () => {
  const [skeleton, setSkeleton] = useState(true);
const url = "https://konsa-college-backend.vercel.app";


  const [counselling, setCounselling] = useState([]);
  useEffect(() => {
    axios
      .get(
        url+"/councelling"
      )
      .then((response) => {
        if (response.status != 500) {
          setCounselling(response.data);
          setSkeleton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="mb-4 md:mb-8">
      <div className="text-center text-xl md:text-2xl mb-1 md:mb-2 font-semibold text-[#303030]">
        College Counselling
      </div>

      <div className="no-scrollbar flex md:max-w-[1150px] md:m-auto items-center overflow-x-auto overflow-y-hidden gap-3 py-2">
        {skeleton ? (
          <>
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
          </>
        ) : (
          <>
            {counselling.map((college, idx) => {
              if (idx < 4) {
                return (
                  <CounsellingContainer
                    key={idx}
                    counsellingName={college.exam_name}
                    fullForm={college.sub_heading}
                    collegeList={college.top_colleges}
                    collegeLink={college.apply_link}
                  />
                );
              }
            })}
          </>
        )}
        <Link to="/scheduler" className="min-w-[170px] md:min-w-[200px] lg:min-w-[250px] h-[136px] md:h-[156px] lg:h-[170px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-white hover:bg-gradient-to-r from-white to-[#fff6ec] transition-all duration-500 font-medium cursor-pointer">
          <div className="text-sm text-[#EE7C00]">Show More &#10140;</div>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCounselling;
