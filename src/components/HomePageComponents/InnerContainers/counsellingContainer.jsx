import React from "react";
import { Link } from "react-router-dom";

const CounsellingContainer = ({
  counsellingName,
  fullForm,
  collegeList,
  collegeLink,
}) => {
  return (
    <a href={collegeLink}>
      <div className="min-w-[170px] md:min-w-[200px] lg:min-w-[250px] h-[136px] md:h-[156px] lg:h-[170px] px-[8px] py-[20px] flex flex-col items-center justify-between shadow-md rounded-md border border-gray-100 bg-white">
        <div className="text-xl font-bold text-[#4e4e4e] text-center">
          {counsellingName}
        </div>
        <div className="text-[10px] md:text-sm inline-block md:w-[70%] text-[#4e4e4e] font-semibold text-center">
          {fullForm}
        </div>
        <div className="flex items-center justify-evenly w-full">
          {collegeList?.map((college, id) => {
            return (
              <div key={id}>
                <img src={college.logo_link} alt="college logo" />
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default CounsellingContainer;
