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
import Comming_Soon from "./comming_soon";
import { Link } from "react-scroll";
import { useStateContext } from "../Context/useStateContext";
import { Helmet } from "react-helmet";


const CollegePage = () => {
  const { setAcPage } = useStateContext()
  const [result, setResult] = useState([]);
  // console.log(result)
  const [news, setNews] = useState([]);
  const [exams, setExams] = useState([]);
  const [counselling, setCounselling] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const path = useLocation().pathname;
  const [active, setActive] = useState();
  const [section, setSection] = useState([])
  const [showSec, setShowSec] = useState(false)


  const Items = ["Overview", "Connectivity", "Fee Structure", "Scholarship", "About College", "Placement Stats", "College Review Video"];
  const url = "https://konsa-college-backend.vercel.app";

  useEffect(() => {
    const pass = searchParams.get("password");
    if (pass === "FamLearn123") {
      setAdmin(true);
    }
    axios
      .get(
        url + `${path}`
      )
      .then((res) => {
        // console.log(res.data.review_video);
        setResult(res.data);
        // setSection([...Items]);
        if (res.data.review_video.length === 0) {
          const resp = Items.filter(words => words !== "College Review Video")
          setSection(resp)
          // console.log(">",resp)
        } else {
          setSection(Items)
        }
      })
      .catch((err) => console.log("error: ", err));

    axios
      .get(url + "/exams")
      .then((response) => {
        if (response.status !== 500) {
          setExams(response.data);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        url + "/councelling"
      )
      .then((response) => {
        if (response.status != 500) {
          setCounselling(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setResult, setSection]);
  return (
    <>
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>{`Konsa College - ${result.college_uuid}`}</title>
        <meta name="description" content={`${result.overview}`}/>
        <meta name="Abstract" content={`${result.overview}`} />
        <meta property="og:title" content={`Konsa College - ${result.college_uuid}`} />
          <meta property="og:description" content={`${result.overview}`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.konsacollege.com" />
          <meta property="og:site_name"
            content={`Konsa College - ${result.college_uuid}`}/>
          <meta property="og:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta property="og:determiner" content="..." />
          <meta name="twitter:card" content={`${result.overview}`} />
          <meta name="twitter:title" content={`Konsa College - ${result.college_uuid}`} />
          <meta name="twitter:image"
            content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
          <meta name="twitter:image:alt"
            content="Konsa College Logo" />
          <meta property="twitter:url" content="https://www.konsacollege.com" />
          <meta property="twitter:site" content="@konsacollege" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
      </Helmet>
      {result !== 0 ? (
        <div>
          {/* left  */}
          <CollegePageHeader result={result} />
          <div className="md:flex justify-between md:px-12">
            <div className="md:max-w-[65%] px-4 md:px-0 w-full">
              <div className='mt-[3rem] flex sm:hidden' style={{ overflowX: "auto" }}>
                {<>{section?.map((item, id) => {
                  return (
                    <div
                      key={id}
                      className="mr-3 min-w-[180px] py-4 bg-[white] active:bg-[#EE7C00] active:text-[white] hover:bg-[#EE7C00] hover:text-[white] text-center cursor-pointer"
                      style={{ borderRadius: "5px", border: "1px solid #E9E9E9" }}
                    >
                      <Link duration={100} spy smooth offset={-180} to={item}>
                        {item}
                      </Link>
                    </div>
                  );
                })}</>}
              </div>

              <section id="Overview"><Overview result={result} /> </section>
              <section id="Connectivity"><Connectivity result={result} /></section>
              <section id="Fee Structure"><FeeStructure result={result} /></section>
              <section id="Scholarship"><Scholarship result={result} /></section>

              <section id="About College"><AboutCollege result={result} /></section>
              <section><Cutoff result={result} /></section>
              <section id="Placement Stats"> <Placements result={result} /></section>

              <section id="College Review Video"> <CollegeReview result={result} /></section>
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
            <div className="md:max-w-[34%]  md:inline-block hidden">
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
        <div>
          <Comming_Soon />
        </div>
      )}
    </>
  );
};

export default CollegePage;
