import React, { useState, useEffect } from "react";
import Branches from "../components/toolsPage/branches";
import Rounds from "../components/toolsPage/rounds";
import Seat from "../components/toolsPage/seat";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

const viewBranchWise = () => {
  const animatedComponents = makeAnimated();
  const [selectedSeat, setSeat] = useState("OPEN");
  const [selectedGender, setGender] = useState("Gender-Neutral");
  // const [selectedRound, setRound] = useState("6");
  const [examTypes, setExamTypes] = useState("JEE");
  const [defaultData, setDefault] = useState([]);
  const [selected, setBranches] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [noData, setBool] = useState(false);
  let Institute = [];

  const chartData1 = [
    { name: "Round 1", cr: 1200 },
    { name: "Round 2", cr: 1500 },
    { name: "Round 3", cr: 500 },
    { name: "Round 4", cr: 900 },
    { name: "Round 5", cr: 1600 },
    { name: "Round 6", cr: "200" },
  ];

  const Gender = ["Gender-Neutral", "Female-only (including supernumerary)"];
  const url = "https://konsa-college-backend.vercel.app";

  useEffect(() => {
    axios.get(url + "/y22?page=1&limit=2000").then((res) => {
      if (examTypes === "JEE") {
        setDefault(res.data.results);
      } else {
        const filter = res.data.results.filter((clg) =>
          clg.Institute.includes("Indian Institute of Technology")
        );
        setDefault(filter);
      }
    });
  }, [examTypes]);

  useEffect(() => {
    if (selected.length > 0 && defaultData.length > 0) {
      console.log("inside", selected);
      const filter = defaultData?.filter((clg) =>
        clg.Academic_Program_Name.includes(selected)
      );
      console.log("colleges", filter);
      setFilterData(filter);
      if (filter.length > 0) {
        for (let i = 0; i < filter.length; i++) {
          const college = filter[i].Institute;
          if (Institute.includes(college)) {
          } else {
            Institute.push(college);
          }
        }
        setInstitutes(Institute);
      }
    }
  }, [selected, defaultData]);
  console.log("selected Institute", selectedInstitute);

  useEffect(() => {
    if (selectedInstitute.length > 0 && selectedGender && selectedSeat) {
      const filter = [];
      for (let i = 1; i < 6; i++) {
        filter[i - 1] = filterData.filter(
          (clg) =>
            clg.Institute.includes(selectedInstitute) &&
            clg.Round.includes(i) &&
            clg.Gender === selectedGender &&
            clg.Seat_Type === selectedSeat
        );
      }
      console.log(filter);
    }
  }, [selectedInstitute]);

  return (
    <>
      <div className="p-3">
        <div className="head md:p-5">
          <h2 className="text-2xl font-bold p-2">
            Analyse Branch-wise Cut-off Trends
          </h2>
          <p className="mt-2 ml-2">
            Compare the cut-offs for courses in a particular branch of
            engineering over 10 years in the JoSAA seat allocation process.
          </p>
          <p className="ml-2">
            This helps understand the popularity and perception of a branch
            among engineering aspirants, and thus helps understand the demand
            for a particular branch during the counselling process.
          </p>
        </div>
      </div>
      <div className="rankTpye md:px-10 md:w-[50%]">
        <div className="text-sm font-medium">Rank Type</div>
        <div className="py-1 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="flex items-center text-sm">
              <input
                id="default-radio-1"
                type="radio"
                value="Mains"
                name="rank"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setExamTypes(e.target.value)}
              />
              <label
                for="default-radio-1"
                className="ml-2 text-sm  text-gray-700 "
              >
                JEE (Main)
              </label>
            </div>
          </div>
          <div>
            <div class="flex items-center text-sm">
              <input
                id="default-radio-2"
                type="radio"
                value="Advance"
                name="rank"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cancel"
                onChange={(e) => setExamTypes(e.target.value)}
              />
              <label
                for="default-radio-2"
                className="ml-2 text-sm  text-gray-700 "
              >
                JEE (Advance)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="instituteType flex flex-row my-1 ml-5 md:w-full md:px-5 justify-start gap-10">
        <div className="homeStates my-1 md:w-1/3 ">
          <div className="flex justify-between font-medium">
            <span>Branches</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
            onChange={(e) => {
              setBranches(e.target.value);
            }}
          >
            {Branches?.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        {institutes.length > 0 && (
          <div className="homeStates my-1 md:w-1/3 ">
            <div className="flex justify-between font-medium">
              <span>College</span>
            </div>
            <select
              name="states"
              className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
              onChange={(e) => {
                setSelectedInstitute(e.target.value);
              }}
            >
              {institutes?.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </select>
          </div>
        )}
      </div>
      <div className="w-full flex flex-row justify-start text-sm">
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Seat type</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setSeat(e.target.value);
              setRequiredState(false);
            }}
          >
            {Seat.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="homeStates my-1 md:w-1/3 md:px-10 mb-12">
          <div className="flex justify-between font-medium">
            <span>Gender</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setGender(e.target.value);
              setRequiredState(false);
            }}
          >
            {Gender.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        {/* <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Display rounds</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
            onChange={(e) => {
              setRound(e.target.value);
              setRequiredState(false);
            }}
          >
            {Rounds.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div> */}
      </div>
      <div className="chart mt-7">
        <ResponsiveContainer width="90%" height={400}>
          <LineChart
            id="chart"
            data={chartData1}
            margin={{
              top: 0,
              right: 30,
              left: -10,
              bottom: 5,
            }}
          >
            <XAxis dataKey={"name"} height={80}>
              {/* <Label value="Rounds" position="insideBottom" /> */}
            </XAxis>
            <YAxis />
            <Tooltip />
            {!noData ? (
              <>
                <Line
                  type="monotone"
                  dataKey="cr"
                  stroke="#8884d8"
                  activeDot={{ r: 5 }}
                />
              </>
            ) : null}

            <Legend verticalAlign="top" height={80} />
          </LineChart>
        </ResponsiveContainer>
        {noData ? (
          <div className="absolute">
            <div>
              <h1 className="mt-20 text-xl">No Data Available</h1>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default viewBranchWise;
