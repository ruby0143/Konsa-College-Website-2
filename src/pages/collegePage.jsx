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

const CollegePage = () => {
  const [result, setResult] = useState([]);
  const [admin, setAdmin] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    const px = path.split("/");
    if (px[1] === "admin") {
      setAdmin(true);
    }
    console.log(admin);
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
      {admin ? (
        <h1>admin</h1>
      ) : (
        <>
          {result ? (
            <div className="bg-[#F5F5F5]">
              <CollegePageHeader result={result} />
              <Overview result={result}></Overview>
              <Connectivity result={result} />
              <FeeStructure result={result} />
              <Scholarship result={result} />
              <AboutCollege result={result} />
              <Cutoff result={result} />
              <Placements result={result} />
              <CollegeReview result={result} />
            </div>
          ) : (
            <div>No College Found</div>
          )}
        </>
      )}
    </>
  );
};

export default CollegePage;
