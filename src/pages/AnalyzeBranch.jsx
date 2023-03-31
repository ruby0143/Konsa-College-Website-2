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
  const [Duration,setSelectedDuration]=useState("4 Years")
  const [filterData, setFilterData] = useState([]);
  const [noData, setBool] = useState(false);
  let Institute = [];

  const Gender = ["Gender-Neutral", "Female-only (including supernumerary)"];
  const duration = ["4 Years","5 Years"]
  const url = "https://konsa-college-backend.vercel.app";
  // const url = "http://localhost:5000";
  let array = [];

  useEffect(() => {
    axios.get(url + "/y22?page=1&limit=5000").then((res) => {
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
    if (selectedInstitute) {
      axios
        .post(url + "/analyze-branch-wise", {
          Seat: selectedSeat,
          Gender: selectedGender,
          Branch: selected,
          Institute: selectedInstitute,
          Duration: Duration,
        })
        .then((response) => {
          console.log(response.data);
          for (let i = 0; i < response.data.y20.length; i++) {
            console.log("in loop y20");

            array.push({
              name: "2020 Round " + response.data.y20[i].Round,
              Opening_Rank: response.data.y20[i].Opening_Rank,
            });
          }
          for (let i = 0; i < response.data.y21.length; i++) {
            console.log("in loop y20");

            array.push({
              name: "2021 Round " + response.data.y21[i].Round,
              Opening_Rank: response.data.y21[i].Opening_Rank,
            });
          }
          for (let i = 0; i < response.data.y22.length; i++) {
            console.log("in loop y20");

            array.push({
              name: "2022 Round " + response.data.y22[i].Round,
              Opening_Rank: response.data.y22[i].Opening_Rank,
            });
          }

          console.log("chart", array);
          setChartData(array);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedInstitute,selectedSeat,selected,selectedGender,Duration]);

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
        <div className="homeStates my-1 md:w-1/3 ">
            <div className="flex justify-between font-medium">
              <span>Duration</span>
            </div>
            <select
              name="states"
              className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
              onChange={(e) => {
                setSelectedDuration(e.target.value);
              }}
            >
              {duration?.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </select>
          </div>
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
              data={chartData}
              margin={{
                top: 0,
                right: 30,
                left: -10,
                bottom: 5,
              }}
            >
              <XAxis dataKey={"name"} height={80}>
                <Label value="Rounds" position="insideBottom" />
              </XAxis>
              <YAxis />
              <Tooltip />
              {!noData ? (
                <>
                  <Line
                    type="monotone"
                    dataKey="Opening_Rank"
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
