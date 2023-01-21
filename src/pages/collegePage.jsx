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
import { useStateContext } from "../Context/useStateContext";

const CollegePage = () => {
  const {link} = useStateContext()
  console.log(link)
  const [result, setResult] = useState([]);

  // const { college } = useParams();
  const data = useLocation();
  const path = useLocation().pathname;
  // console.log("path",path)
  console.log("data",data);
  
  // let [searchParams, setSearchParams] = useSearchParams();
  // for (const entry of searchParams.entries()) {
  //   const [param, value] = entry;
  //   console.log("key : value = ", param, value);
  // }
const PORT = 5000

  const getData = async () =>{
    await axios
    .get(`http://localhost:${PORT}/college` + path)
    .then((response) => {
  
      if (response.data == "404") {
        console.log("College Not Found!");
      } else {
        console.log(response.data);
        setResult(...response.data);
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
      {result.college_name?(
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