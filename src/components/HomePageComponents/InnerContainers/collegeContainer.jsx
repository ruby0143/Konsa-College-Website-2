import React from "react";
import { Link } from "react-router-dom";

const CollegeContainer = ({ collegeName, collegeLogo, collegeBanner, link }) => {

  
  return (
    <Link to={"/"+link}>
      <div className="min-w-[230px] max-w-[300px]  h-[164px] md:h-[184px] xs:[250px] shadow-md rounded-md border border-gray-100 bg-white">
        <div className="relative h-[110px] md:h-[120px] rounded-t-md flex items-end justify-center">
          <div className={`absolute brightness-50 w-full`}>
            <img
              src={collegeBanner}
              alt="College Banner"
              className="h-[110px] md:h-[120px] w-full"
            />
          </div>
          {collegeLogo ? <div className="bg-white rounded-full z-10 mb-2">
            <img width="50" height="20" src={collegeLogo} alt="College Logo" />
          </div> : null}
          
        </div>
        <div className="h-[54px] md:h-[64px] flex items-center justify-center">
          <div className="text-sm md:text-base text-center w-[90%]">
            {collegeName}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeContainer;

//
