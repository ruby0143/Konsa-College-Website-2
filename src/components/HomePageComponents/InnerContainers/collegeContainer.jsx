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
            <img
              src={collegeBanner}
              loading="lazy"
              alt="College Banner"
              className="absolute brightness-50 w-full h-full rounded-t-md object-cover"
            />
            <div className="w-[50px] h-[50px] flex justify-center items-center z-20 mb-2 bg-white rounded-full">              
              <img 
                src={collegeLogo} 
                alt="College Logo" 
                className="w-[80%] h-[80%] object-cover rounded-full"
              />
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
