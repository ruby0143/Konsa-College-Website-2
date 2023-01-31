import React, { useState, useEffect } from "react";
import Overview from "../components/ParticularCollege/Overview";
import CollegeReview from "../components/ParticularCollege/CollegeReview";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Connectivity from "../components/ParticularCollege/Connectivity";
import FeeStructure from "../components/ParticularCollege/FeeStructure";
import Scholarship from "../components/ParticularCollege/Scholarship";
import AboutCollege from "../components/ParticularCollege/AboutCollege";
import Cutoff from "../components/ParticularCollege/Cutoff";
import Placements from "../components/ParticularCollege/Placements";
import CollegePageHeader from "../components/Header/collegePageHeader/collegePageHeader";
import axios from "axios";
import RightSection from "../components/ParticularCollege/RightSection";
import { FaPassport } from "react-icons/fa";

const CollegePage = () => {
  const [result, setResult] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const path = useLocation().pathname;

  useEffect(() => {
    const pass = searchParams.get("password");
    if (pass === "FamLearn123") {
      setAdmin(true);
    }
    axios
      .get(`http://localhost:5000${path}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <>
      {result ? (
        <div className="bg-[#F5F5F5]">
        <div>
          {/* left  */}
          <CollegePageHeader result={result} />
          <Overview result={result}></Overview>
          <Connectivity result={result} />
          <FeeStructure result={result} />
          <Scholarship result={result} />
          <AboutCollege result={result} />
          <Cutoff result={result} />
          <Placements result={result} />
          <CollegeReview result={result} />
          {admin ? (
            <a href="https://google.com" className="grid  w-12" style={{margin:"auto"}}>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Approve</button>
            </a>
          ) : null}
        </div>
      ) : (
        <div>No College Found</div>
      )}
          <div className="md:flex justify-between">
            <div className="bg-[#F5F5F5] md:max-w-[65%] md:pl-[2rem]">
              <Overview result={result}></Overview>
              <Connectivity result={result} />
              <FeeStructure result={result} />
              <Scholarship result={result} />
              <AboutCollege result={result} />
              <Cutoff result={result} />
              <Placements result={result} />
              <CollegeReview result={result} />
            </div>
            {/* right  */}
            <div className="bg-[rgb(245,245,245)] md:max-w-[35%] pr-[2rem] md:inline-block hidden">
              <RightSection result={result}></RightSection>
            </div>
          </div>
        </div>
      ) : (<div>
        No College Found
      </div>)
      }
    </>
  );
};

export default CollegePage;
