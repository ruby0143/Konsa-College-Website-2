import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import axios from "axios";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function trendAnalysis() {
  const path = useLocation().pathname;
  const params = path.split('/')
  const [colleges, setColleges] = useState([]);
  const [branches, setBranches] = useState(new Map());
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [selectedRank, setRank] = useState("Mains");
  const [selectedState, setState] = useState("AI");
  const [selectedCollege, setSelectedCollege] = useState(params[2] ? params[2].split('-').join(" ") : null);
  const [selectedBranch, setBranch] = useState(params[3] ? params[3].split('-').join(' ') : null);
  const [selectedCaste, setCaste] = useState("OPEN");
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [selectedInstTypes, setTypes] = useState([]);
  const [requiredState, setRequiredState] = useState(false);
  const [requiredInst, setReqInst] = useState(false);
  const [requiredProg, setReqProg] = useState(false);
  const [reqSeat, setReqseat] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [noData, setBool] = useState(false);

  const castes = [
    "EWS",
    "EWS (PwD)",
    "OBC-NCL",
    "OBC-NCL (PwD)",
    "OPEN (PwD)",
    "SC",
    "SC (PwD)",
    "ST",
    "ST (PwD)",
  ];

  const states = [
    "HS",
    "GO",
    "JK"
  ];
  const url = "https://konsa-college-backend.vercel.app";




  const submit =
    (selectedState ? true : false) &&
    (selectedCollege ? true : false) &&
    (selectedBranch ? true : false) &&
    (selectedCaste ? true : false) &&
    (selectedGender ? true : false);




  useEffect(() => {

    axios
      .get(
        url + "/branches"
      )
      .then((res) => {
        const arr = res.data;
        arr.forEach((ele,idx) => {
          
          const col = ele.Institute;
          setColleges(function (prevState) {
            return [...prevState, col];
          });

          const programs = ele.Array;
         
          // console.log(col,programs,idx);
          if (selectedCollege === col) {
            // console.log("match");
            setFilteredBranches(programs);
          }

          branches.set(col, programs);
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    if (submit) {
      axios
        .post(url + "/trends", {
          Institute: selectedCollege,
          Program: selectedBranch,
          Gender: selectedGender,
          Caste: selectedCaste,
          Quota: selectedState,
        })
        .then((resp) => {

          const years = resp.data;
          console.log(">>", years);
          const chartEle = document.querySelector("#chart");

          if (years.y20.length === 0 && years.y21.length === 0 && years.y22.length === 0) {
            console.log("No data found");
            chartEle.classList.add("blur-[2px]");
            setBool(true);
          }
          else {
            setBool(false);
            setChartData([]);
            for (let i = 0; i < 6; i++) {
              const round = {};
              if (years.y20[i] !== undefined) {
                round.year2020 = years.y20[i].Closing_Rank;
                round.round = years.y20[i].Round;
              }
              if (years.y22[i] !== undefined) {
                round.year2022 = years.y22[i].Closing_Rank;
                round.round = years.y22[i].Round;
              }
              if (years.y21[i] !== undefined) {
                round.year2021 = years.y21[i].Closing_Rank;
                round.round = years.y21[i].Round;
              }
              setChartData(function (prev) {
                return [...prev, round];
              })
            }

            chartEle.classList.remove("blur-[2px]");
          }

        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [
    selectedState,
    selectedCollege,
    selectedBranch,
    selectedCaste,
    selectedGender,
  ]);
  // console.log(colleges,"ok");
  // console.log(selectedCollege, "okk");
  // console.log(filteredBranches, "br123");
  // console.log(branches.get("Nehru National Institute of Technology, Durgapur"),'br');
  console.log(
    selectedRank,
    selectedState,
    selectedInstTypes,
    selectedCollege,
    selectedBranch,
    selectedCaste,
    selectedGender,
    noData,
    "details"
  );
  console.log(chartData, "finalData");
  return (
    <>
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Konsacollege - Trend Analysis</title>
        <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.konsacollege.com" />
        <meta property="og:site_name"
          content="Konsacollege - Trend Analysis" />
        <meta property="og:image"
          content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
        <meta property="og:determiner" content="..." />
        <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
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
      <div className="p-3 ">
        <div className="head md:p-7">
          <h2 className="text-2xl font-bold p-2">
            Analysis Round-wise Cut-off Trends
          </h2>
          <p className="p-2">
            Compare the cut-offs of a course in various rounds over 10 years in
            the JoSAA seat allocation process. This helps understand the likely
            range of changes to the closing ranks throught the counselling
            process.
          </p>
        </div>
        <div className="options p-2 mt-2">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="rankTpye md:px-10 my-3 md:w-[50%]">
              <div>Rank Type</div>
              <div className="py-2 flex justify-between items-center">
                <div className="flex justify-center items-center" >
                  <input
                    type="radio"
                    value="Mains"
                    onChange={(e) => setRank(e.target.value)}
                    checked="checked"
                    name="rank"
                  ></input>
                  <label>JEE (Main)</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="Advance"
                    name="rank"
                    onChange={(e) => setRank(e.target.value)}
                  ></input>
                  <label>JEE (Advance)</label>
                </div>
              </div>
            </div>
            <div className="homeStates my-3 md:w-[50%] md:px-10">
              <div className="flex justify-between">
                <span>Home State</span>
                <span className="text-[10px] pt-1.5">
                  To show home state quota ranks
                </span>
              </div>
              <select
                name="states"
                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
                onChange={(e) => {
                  setState(e.target.value);
                  setRequiredState(false);
                }}
              >

                <option selected value={"AI"}>
                  {"AI"}
                </option>
                {states.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </select>
              {requiredState ? (
                <div className="py-2 text-xs text-red-500">
                  Home State is a required field
                </div>
              ) : null}
            </div>

          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="institutes my-3 md:px-10 md:w-[50%]">
              <div className="flex justify-between">
                <span>Institute</span>
              </div>
              <select
                name="colleges"
                id="clg"
                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                value={selectedCollege}
                onChange={(e) => {
                  setSelectedCollege(e.target.value);
                  setReqInst(false);
                  setFilteredBranches(branches.get(e.target.value));
                  if (selectedState === null) {
                    setRequiredState(true);
                  }
                }}

              >

                {selectedCollege ? (<option selected value={selectedCollege}>{selectedCollege}</option>) : (<option selected disabled>
                  Select a college
                </option>)}
                {colleges?.map((college, idx) => {


                  {/* console.log(college,selectedCollege); */ }
                  if (college === selectedCollege) {
                    console.log("match");
                  }
                  else {
                    if (selectedRank === "Advance") {
                      return (college.includes("Indian Institute of Technology") ? (<option value={college}>{college}</option>) : null)
                    }
                    else {
                      return (!(college.includes("Indian Institute of Technology")) ? (<option value={college}>{college}</option>) : null)
                    }
                  }


                })}
              </select>
              {requiredInst ? (
                <div className="py-2 text-xs text-red-500">
                  College field is required
                </div>
              ) : null}
            </div>

            {/* <div className="course my-3 md:px-10 md:w-[33%]">
            <div className="flex justify-between">
              <span>Course</span>
            </div>
            <select
              name="states"
              className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div> */}
            {selectedCollege ? (
              <div className="program my-3 md:px-10 md:w-[50%]">
                <div className="flex justify-between">
                  <span>Program</span>
                </div>
                <select
                  name="programs"
                  className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                  value={selectedBranch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                    setReqProg(false);
                  }}
                >
                  {selectedBranch ? (<option value={selectedBranch} selected>{selectedBranch}</option>) :
                    (<option selected disabled>
                      Select a program
                    </option>)}

                  {filteredBranches?.map((branch, idx) => {
                    {/* console.log(preSelectedBranch,branch,"this"); */ }
                    if (selectedBranch=== branch) {
                      console.log(branch,"match");
                      {/* console.log(preSelectedBranch,branch,"match"); */ }
                    }                  
                      return <option value={branch}>{branch}</option>;
                  })}
                </select>
                {requiredProg ? (
                  <div className="py-2 text-xs text-red-500">
                    Program field is required
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="seatType my-3 md:w-[50%] md:px-10">
              <div className="flex justify-between">
                <span>Seat Type</span>
              </div>
              <select
                name="castes"
                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                onChange={(e) => {
                  setCaste(e.target.value);
                  if (selectedCollege === null) {
                    setReqInst(true);
                  }
                  if (selectedBranch === null) {
                    setReqProg(true);
                  }
                  setReqseat(false);
                }}
              >
                <option selected value={"OPEN"}>
                  {"OPEN"}
                </option>
                {castes.map((caste) => {
                  return <option value={caste}>{caste}</option>;
                })}
              </select>
              {reqSeat ? (
                <div className="py-2 text-xs text-red-500">
                  Program field is required
                </div>
              ) : null}
            </div>
            <div className="gender my-3 md:w-[50%] md:px-10">
              <div className="flex justify-between">
                <span>Gender</span>
              </div>
              <select
                name="gender"
                className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
                onChange={(e) => {
                  setGender(e.target.value);
                  if (selectedCaste === null) {
                    setReqseat(true);
                  }
                  if (selectedCollege === null) {
                    setReqInst(true);
                  }
                  if (selectedBranch === null) {
                    setReqProg(true);
                  }
                }}
              >
                <option value="Female-only (including Supernumerary)">
                  Female Only
                </option>
                <option selected value="Gender-Neutral">
                  Gender Neutral
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="chart mt-7" >
          <ResponsiveContainer width="90%" height={400} >

            <LineChart
              id="chart"
              data={chartData}
              margin={{
                top: 0,
                right: 30,
                left: -10,
                bottom: 5,
              }}
            >
              <XAxis dataKey={"round"} height={80}>
                <Label value="Rounds" position="insideBottom" />
              </XAxis>
              <YAxis />
              <Tooltip />

              <Line type="monotone" dataKey="year2020" stroke="#8884d8" activeDot={{ r: 5 }} />

              <Line type="monotone" dataKey="year2021" stroke="#82ca9d" activeDot={{ r: 5 }} />

              <Line type="monotone" dataKey="year2022" stroke="#FFCCCB" activeDot={{ r: 5 }} />

              <Legend verticalAlign="top" height={80} />
            </LineChart>
          </ResponsiveContainer>
          {noData ? (<div className='absolute'>
            <div>
              <h1 className="mt-20" >No Data Available</h1>
            </div>

          </div>) : null}


        </div>
      </div>
    </>
  );
}
// tick={renderCustomAxisTick}
export default trendAnalysis;
