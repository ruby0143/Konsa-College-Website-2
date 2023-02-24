import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";

function trendAnalysis() {
  const [colleges, setColleges] = useState([]);
  const [branches, setBranches] = useState(new Map());
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [selectedRank, setRank] = useState("Mains");
  const [selectedState, setState] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedBranch, setBranch] = useState(null);
  const [selectedCaste, setCaste] = useState(null);
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [selectedInstTypes, setTypes] = useState([]);
  const [requiredState, setRequiredState] = useState(false);
  const [requiredInst, setReqInst] = useState(false);
  const [requiredProg, setReqProg] = useState(false);
  const [reqSeat, setReqseat] = useState(false);
  const [chart, setChart] = useState([]);
  const [noData,setBool] = useState(false);

  const castes = [
    "EWS",
    "EWS (PwD)",
    "OBC-NCL",
    "OBC-NCL (PwD)",
    "OPEN",
    "OPEN (PwD)",
    "SC",
    "SC (PwD)",
    "ST",
    "ST (PwD)",
  ];

  const states = [
    "AI",
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
 

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let label = '';

    switch (payload.value) {

      case '1':
        label = "Round 1";
        break;

      case '2':
        label = "Round 2";
        break;
      case '3':
        label = "Round 3";
        break;
      case '4':
        label = "Round 4";
        break;
      case '5':
        label = "Round 5";
        break;
      case '6':
        label = "Round 6";
        break;

      default:
        label = "";
    }

    return (
      <text x={x - 12} y={y + 4} width={24} height={24} fill="#666" textAnchor="middle">{label}</text>);

  };

  useEffect(() => {

    axios
      .get(
        url+"/branches"
      )
      .then((res) => {
        const arr = res.data;
        arr.forEach((ele) => {
          const col = ele.Institute;
          setColleges(function (prevState) {
            return [...prevState, col];
          });
          const programs = ele.Array;
          const arrPgs = programs.split("'");
          setFilteredBranches(arrPgs);
          branches.set(col, arrPgs);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (submit) {
      axios
        .post(url+"/trends", {
          Institute: selectedCollege,
          Program: selectedBranch,
          Gender: selectedGender,
          Caste: selectedCaste,
          Quota : selectedState,
        })
        .then((resp) => {
          console.log(resp.data);
          const chartEle = document.querySelector("#chart");
          if(resp.data.length === 0){
            console.log("No data found");
            
            chartEle.classList.add("blur-[2px]");
            setBool(true);
          }
          else{
            setBool(false);
            setChart(resp.data);
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

  return (
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
            <div className="py-2 flex justify-between">
              <div>
                <input
                  type="radio"
                  value="Mains"
                  onChange={(e) => setRank(e.target.value)}
                  checked
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
              <option selected disabled>
                Select a state
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
              className="my-3 p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
              onChange={(e) => {
                setSelectedCollege(e.target.value);
                setReqInst(false);
                setFilteredBranches(branches.get(e.target.value));
                if (selectedState === null) {
                  setRequiredState(true);
                }
              }}
            >
              <option selected disabled>
                Select a college
              </option>
              {colleges?.map((college, idx) => {
                if(selectedRank === "Advance"){
                  return (college.includes("Indian Institute of Technology") ? (<option value={college}>{college}</option>) : null)
                }
                else{
                  return (!(college.includes("Indian Institute of Technology")) ? (<option value={college}>{college}</option>) : null)
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
                onChange={(e) => {
                  setBranch(e.target.value);
                  setReqProg(false);
                }}
              >
                <option selected disabled>
                  Select a program
                </option>
                {filteredBranches?.map((branch, idx) => {
                  if (idx % 2 != 0) {
                    return <option value={branch}>{branch}</option>;
                  }
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
              <option selected disabled>
                Select a caste
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
      <div className="chart mt-5 " >
        <ResponsiveContainer width="90%" height={300} >

          <LineChart
            id="chart"
            data={chart}
            margin={{
              top: 20,
              right: 30,
              left: -10,
              bottom: 5,
            }}
          >
            <XAxis dataKey={"Round"} />
            <YAxis />
            <Tooltip />
            <Legend />
          
            <Line type="monotone" dataKey="Closing_Rank" stroke="#8884d8" activeDot={{ r: 5 }} />

            <Line type="monotone" dataKey="Opening_Rank" stroke="#82ca9d" activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        {noData ? (<div className='absolute'>
        <div>
          <h1 className="mt-20" >No Data Available</h1>
        </div>
        
        </div>) : null}
        
        
      </div>
    </div>
  );
}
// tick={renderCustomAxisTick}
export default trendAnalysis;
