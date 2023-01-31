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

const CollegePage = () => {

  const [result, setResult] = useState([])

  const path = useLocation().pathname

  useEffect(() => {
    axios.get(`https://konsa-college-backend-production.up.railway.app${path}`)
      .then(res => {
        console.log(res.data)
        setResult(res.data)
      })
      .catch(err => console.log("error: ", err))
  }, [])

  return (
    <>
      {result ? (
        <div>
          {/* left  */}
          <CollegePageHeader result={result} />
          <div className="flex">
            <div className="bg-[#F5F5F5] md:max-w-[70%]">
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
            <div className="bg-[rgb(245,245,245)] md:max-w-[30%] ">
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