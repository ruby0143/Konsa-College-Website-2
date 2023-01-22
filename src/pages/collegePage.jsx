import React, { useState, useEffect } from "react";
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

  const { college } = useParams();
  const data = useLocation();
  const path = useLocation().pathname;
  console.log(path, data);
  let [searchParams, setSearchParams] = useSearchParams();
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    console.log("key : value = ", param, value);
  }
const PORT = 5000

  const getData = async () =>{
    await axios
    .get("https://konsa-college-backend-production.up.railway.app/college" + path)
    .then((response) => {
      console.log(response.status);
      if (response.status === 500 ) {
        console.log("College Not Found!");
      } else {
        console.log(response.data,"server");
        setResult(response.data);
        console.log(">>>",result)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {result?(
        <div className="bg-[#F5F5F5]">
          <CollegePageHeader result={result} />
          <Connectivity result={result} />
          <FeeStructure result={result} />
          <Scholarship result={result} />
          <AboutCollege result={result} />
          <Cutoff result={result} />
          <Placements result={result} />
          <CollegeReview result={result} />
        </div>
      ):(<div>
       No College Found
      </div>)}
    </>
  );
};

export default CollegePage;