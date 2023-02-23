import React, { useEffect, useState } from "react";
import { createChart } from "lightweight-charts";
import axios from "axios";

function trendAnalysis() {
  const [colleges, setColleges] = useState([]);
  const [branches, setBranches] = useState(new Map());
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [selectedRank, setRank] = useState("Mains");
  const [selectedState, setState] = useState(null);
  const [selectedCollege, setSelectefCollege] = useState(null);
  const [selectedBranch, setBranch] = useState(null);
  const [selectedCaste, setCaste] = useState(null);
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [selectedInstTypes, setTypes] = useState([]);
  const [requiredState, setRequiredState] = useState(false);
  const [requiredInst, setReqInst] = useState(false);
  const [requiredProg, setReqProg] = useState(false);
  const [reqSeat, setReqseat] = useState(false);

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
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const url = "https://konsa-college-backend.vercel.app";


  useEffect(() => {
    const ele = document.querySelector("#chart");

    const chart = createChart(ele, { width: 500, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 0.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 },
    ]);

    axios
      .get(url+"/branches")
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
          <div className="rankTpye md:px-10 my-3 md:w-[33%]">
            <div>Rank Type</div>
            <div className="py-2 flex justify-between">
              <div>
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
          <div className="homeStates my-3 md:w-[33%] md:px-10">
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
          <div className="instituteTypes my-3 md:px-10 md:w-[33%]">
            <div className="flex justify-between">
              <span>Institute Types</span>
            </div>
            <div className="opts mt-3 flex justify-between">
              <div className="">
                <input
                  type="checkbox"
                  value="NITs"
                  onChange={(e) =>
                    setTypes(function (prev) {
                      return [...prev, e.target.value];
                    })
                  }
                ></input>
                <label className="px-2">NITs</label>
              </div>
              <div className="">
                <input
                  type="checkbox"
                  value="IITs"
                  onChange={(e) =>
                    setTypes(function (prev) {
                      return [...prev, e.target.value];
                    })
                  }
                ></input>
                <label className="px-2">IITs</label>
              </div>
              <div className="">
                <input
                  type="checkbox"
                  value="GFTIs"
                  onChange={(e) =>
                    setTypes(function (prev) {
                      return [...prev, e.target.value];
                    })
                  }
                ></input>
                <label className="px-2">GFTIs</label>
              </div>
            </div>
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
                setSelectefCollege(e.target.value);
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
                return <option value={college}>{college}</option>;
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
                if(selectedCollege === null){
                  setReqInst(true);
                }
                if(selectedBranch === null){
                  setReqProg(true);
                }
              }}
            >
              <option value="Female-Only">Female Only</option>
              <option selected value="Gender-Neutral">
                Gender Neutral
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="chart mt-5 " id="chart"></div>
    </div>
  );
}

export default trendAnalysis;
