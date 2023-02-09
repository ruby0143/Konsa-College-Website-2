import React from "react";
import { Link } from "react-router-dom";
import './container.css';

const CollegeContainer = ({
  collegeName,
  collegeLogo,
  collegeBanner,
  collegeId,
}) => {
  return (
    <Link to={"/college/" + collegeId}>
      <div className="min-w-[230px] max-w-[305px]  h-[167px] md:h-[188px] xs:[250px] shadow-md rounded-md border border-gray-100 bg-white">
        <div className="relative h-[110px] md:h-[120px] rounded-t-md flex items-end justify-center">
          <div className={`absolute brightness-50 w-full`}>
            <img
              src={collegeBanner}
              alt="College Banner"
              className="h-[128px] md:h-[130px] w-full"
            />
          </div>
          <div className="bg-white w-[50px] h-[50px] rounded-full z-10 mb-2">
            <img src={collegeLogo} alt="College Logo" />
          </div>
        </div>
        <div className="h-[52px] md:h-[60px] flex items-center justify-center">
          <div className="text-sm md:text-base text-center w-[90%] custom-truncate">
            {collegeName}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeContainer;
