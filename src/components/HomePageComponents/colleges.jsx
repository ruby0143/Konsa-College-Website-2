import React, { useEffect, useState } from "react";
import CollegeContainer from "./InnerContainers/collegeContainer";
import axios from "axios";
import { Link } from "react-router-dom";
import CollegeSkeleton from "../AllColleges/Components/CollegeSkeleton";

const Colleges = () => {
  const [skeleton, setSkeleton] = useState(true);

  const [collegeList, setColleges] = useState([]);

  const getData = async () => {
    await axios
      .get(
        "https://konsa-college-backend-production-0c4c.up.railway.app/allcolleges"
      )
      .then((response) => {
        if (response.data != "404") {
          setColleges(response.data);
          setSkeleton(false);
        } else {
          console.log("Error!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mb-4 md:mb-8">
      <div className="text-center text-xl md:text-2xl mb-1 md:mb-2 font-semibold text-[#303030]">
        Colleges
      </div>
      <div className="no-scrollbar flex md:max-w-[1100px] md:m-auto items-center overflow-x-auto overflow-y-hidden gap-3 py-2">
        {skeleton ? (
          <>
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
            <CollegeSkeleton />
          </>
        ) : (
          <>
            {collegeList.slice(0, 4).map((college, idx) => {
              return (
                <CollegeContainer
                  key={idx}
                  collegeName={college.college_name}
                  collegeLogo={college.college_logo_link}
                  collegeBanner={college.header_photo_link}
                  collegeId={college.college_uuid}
                />
              );
            })}
          </>
        )}
        {collegeList.length >= 5 ? (
          <>
            <Link to="/allcolleges">
              <div className="min-w-[210px] flex-grow-1 md:min-w-[230px] h-[164px] md:h-[184px] flex justify-center items-center shadow-md rounded-md border bg-white hover:bg-gradient-to-r from-white to-[#fff6ec] transition-all duration-500 font-medium cursor-pointer">
                <div className="text-sm text-[#EE7C00]">Show More &#10140;</div>
              </div>
            </Link>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
};

export default Colleges;
