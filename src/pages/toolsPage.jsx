import React, { useState, useEffect } from "react";
import ToolsHead from "../components/toolsPage/toolsHead";
import ToolBody from "../components/toolsPage/toolBody";
import RightSection from "../components/ParticularCollege/RightSection";
import axios from "axios";

const ToolsPage = () => {
  const [news, setNews] = useState([]);
  const [exams, setExams] = useState([]);
  const [counselling, setCounselling] = useState([]);
  const [skeleton,setSkeleton]=useState()

  useEffect(() => {
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
  });

  return (
    <div>
      <ToolsHead />
      <div className="flex w-full mt-10">
        <div className="w-full md:max-w-[65%] flex  justify-center bg-white px-4 ">
          <ToolBody />
        </div>
        {/* <div className="md:max-w-[34%] pr-[1rem] md:inline-block hidden">
          <RightSection
            news={news}
            exams={exams}
            counselling={counselling}
          ></RightSection>
        </div> */}
      </div>
    </div>
  );
};

export default ToolsPage;
