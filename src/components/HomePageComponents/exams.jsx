import React, { useEffect, useState } from "react";
import JEE_Main_logo from "../../assets/Exams/JEE_Main.svg";
import CollegeSkeleton from "../AllColleges/Components/CollegeSkeleton";
import axios from "axios";
import { Link } from "react-router-dom";

const Exams = () => {
const url = "https://konsa-college-backend.vercel.app";

  const [Exams, setExams] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
    axios
      .get(url+"/exam?page=1&limit=5")
      .then((response) => {
        if (response.status !== 500) {
          setExams(response.data.results);
          setSkeleton(false);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mb-4 md:mb-8">
    <div className="text-center text-xl md:text-2xl mb-1 md:mb-2 font-semibold text-[#303030]">
      Exams
    </div>
    <div className="no-scrollbar flex md:max-w-[1150px] md:m-auto items-center overflow-x-auto gap-3 py-2">
      {skeleton ? (
        <>
          <CollegeSkeleton />
          <CollegeSkeleton />
          <CollegeSkeleton />
          <CollegeSkeleton />
        </>
      ) : (
        <>
          {Exams.map((exam, idx) => {
            if (idx < 5) {
              return (
                <a href={exam.apply_link} key={idx}>
                  <div
                    className="h-[56px] md:h-[158px] mx-1.5 min-w-[158px] flex md:flex-col items-center justify-evenly shadow-md rounded-md border border-gray-100 bg-white"
                  >
                    <div>
                      <img
                        src={exam.img}
                        alt="exam logo"
                        onError={(event) => {
                          event.target.src = JEE_Main_logo;
                          event.onerror = null;
                        }}
                        className="w-[30px] md:w-[100px] md:h-[80px]"
                      />
                    </div>
                    <div className="font-semibold md:font-bold">
                      {exam.exam_name}
                    </div>
                  </div>
                </a>
              );
            }
          })}
        </>
      )}
          <Link to="/scheduler" className="min-w-[158px] h-[56px] md:h-[158px] flex justify-center items-center shadow-md rounded-md border border-gray-200 bg-white hover:bg-gradient-to-r from-white to-[#fff6ec] transition-all duration-500 font-medium cursor-pointer">
            <div className="text-sm text-[#EE7C00]">Show More &#10140;</div>
          </Link>
    </div>
  </div>
  );
};

export default Exams;
