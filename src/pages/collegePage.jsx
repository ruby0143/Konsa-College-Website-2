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
  const [news, setNews] = useState([]);
  const [exams, setExams] = useState([]);
  const [counselling, setCounselling] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const path = useLocation().pathname;
  
  
  useEffect(() => {
    const pass = searchParams.get("password");
    if (pass === "FamLearn123") {
      setAdmin(true);
    }
    axios
      .get(`https://konsa-college-backend-production-0c4c.up.railway.app${path}`)
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => console.log("error: ", err));

    axios
      .get("https://konsa-college-backend-production-0c4c.up.railway.app/news")
      .then((response) => {
        if (response.status !== 500) {
          setNews(response.data);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://konsa-college-backend-production-0c4c.up.railway.app/exams")
      .then((response) => {
        if (response.status !== 500) {
          setExams(response.data);
          setSkeleton(false);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://konsa-college-backend-production-0c4c.up.railway.app/councelling"
      )
      .then((response) => {
        if (response.status != 500) {
          setCounselling(response.data);
          setSkeleton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {result ? (
        <div>
          {/* left  */}
          <CollegePageHeader result={result} />
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
              {admin ? (
                <a
                  href={`https://Data-Collection-Portal-Konsa-College.ishkapoor.repl.co/approve/${result.sno}`}
                  className="grid  w-12"
                  style={{ margin: "auto" }}
                >
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Approve
                  </button>
                </a>
              ) : null}
            </div>
            {/* right  */}
            <div className="bg-[rgb(245,245,245)] md:max-w-[35%] pr-[2rem] md:inline-block hidden">
              <RightSection
                result={result}
                news={news}
                exams={exams}
                counselling={counselling}
              ></RightSection>
            </div>
          </div>
        </div>
      ) : (
        <div>No College Found</div>
      )}
    </>
  );
};

export default CollegePage;
