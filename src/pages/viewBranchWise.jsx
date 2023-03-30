import React, { useState, useEffect, CSSProperties } from "react";
import Branches from "../components/toolsPage/branches";
import Rounds from "../components/toolsPage/rounds";
import Seat from "../components/toolsPage/seat";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import "antd/dist/reset.css";
import { Table } from "antd";
import ClipLoader from "react-spinners/ClipLoader";

const viewBranchWise = () => {
  const animatedComponents = makeAnimated();
  const [examTypes, setExamTypes] = useState("");
  const [selectedSeat, setSeat] = useState("OPEN");
  const [selectedGender, setGender] = useState("Gender-Neutral");
  const [selectedRound, setRound] = useState("Last Round Only");
  const [minimum, setMinimum] = useState();
  const [maximum, setMaximum] = useState();
  const [defaultData, setDefault] = useState([]);
  const [selected, setBranches] = useState([]);
  const [filterData, setFilter] = useState([]);
  const [callFunction, setCall] = useState(false);
  const [loader, setLoader] = useState(false);

  const Gender = ["Gender-Neutral", "Female-only (including supernumerary)"];
  const columns = [
    { title: "Institute", dataIndex: "Institute" },
    { title: "Program", dataIndex: "Academic_Program_Name" },
    { title: "Round", dataIndex: "Round" },
    { title: "Opening Rank", dataIndex: "Opening_Rank" },
    { title: "Closing Rank", dataIndex: "Closing_Rank" },
    { title: "Gender", dataIndex: "Gender" },
    { title: "Seat", dataIndex: "Seat_Type" },
  ];
  const page = 1;
  const limit = 2000;
  let array = [];
  // const url = "http://localhost:5000";
  const url = "https://konsa-college-backend.vercel.app";
  const getData = async () => {
    await axios
      .get(url + `/y22?page=${page}&limit=${limit}`)
      // .get(url + `/y22`)
      .then((response) => {
        if (response.status === 500) {
          console.log("No Response");
        } else {
          console.log(response?.data.results);
          if (examTypes) {
            if (examTypes === "ADVANCE") {
                if(maximum && minimum){

                  setLoader(true)
                  for (let x = 0; x < response?.data.results.length; x++) {
                    // console.log("in min max....");
                    let temp1 = parseInt(response?.data.results[x].Opening_Rank);
                    let temp2 = parseInt(response?.data.results[x].Closing_Rank);
                    if ((minimum < temp1 && maximum > temp2)&& response?.data.result[x].includes("Indian Institute of Technology")) {
                      array.push(response?.data.results[x]);
                    }
                  }
                  setDefault(array);
                  setLoader(false)
                

                }else{
                  setLoader(true)
                  console.log(examTypes);
                  const filter = response?.data.results.filter((clg) => {
                    if ((minimum < temp1 && maximum > temp2)&& !response?.data.result[x].includes("Indian Institute of Technology")) {
                      return clg;
                    }
                  });
                  setDefault(filter);
                  setLoader(false)
                }
            } else {
              if(maximum && minimum){

                setLoader(true)
                for (let x = 0; x < response?.data.results.length; x++) {
                  // console.log("in min max....");
                  let temp1 = parseInt(response?.data.results[x].Opening_Rank);
                  let temp2 = parseInt(response?.data.results[x].Closing_Rank);
                  if (minimum < temp1 && maximum > temp2) {
                    array.push(response?.data.results[x]);
                  }
                }
                setDefault(array);
                setLoader(false)
                 

              }else{
                setLoader(true)
                const filter = response?.data.results.filter((clg) => {
                  if (!clg.Institute.includes("Indian Institute of Technology")) {
                    return clg;
                  }
                });
                setDefault(filter);
                setLoader(false)
              }
            }
          } else {
            if (maximum && minimum) {
              setLoader(true)
              for (let x = 0; x < response?.data.results.length; x++) {
                // console.log("in min max....");
                let temp1 = parseInt(response?.data.results[x].Opening_Rank);
                let temp2 = parseInt(response?.data.results[x].Closing_Rank);
                if (minimum < temp1 && maximum > temp2) {
                  array.push(response?.data.results[x]);
                }
              }
              setDefault(array);
              setLoader(false)
            } else {
              // array.push(response?.data.results[x]);
              setDefault(response?.data.results);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
      setLoader(false)
  };

  useEffect(() => {
    getData();
  }, [minimum, maximum, examTypes]);

  useEffect(() => {
    setLoader(true)
    if (callFunction) {
      setLoader(true)
      axios
        .post(url + "/branch-wise", {
          Caste: selectedSeat,
          Round: selectedRound,
          Gender: selectedGender,
        })
        .then((response) => {
          if (response.status === 500) {
            console.log("No Response");
          } else {
            console.log(">>>>", response);
            array = [];
            if (selected.length > 0) {
              for (let i = 0; i < selected.length; i++) {
                for (let x = 0; x < response.data.length; x++) {
                  if (
                    response.data[x].Academic_Program_Name.includes(
                      selected[i].value
                    )
                  ) {
                    if (maximum && minimum) {
                      console.log("in min max");
                      let temp1 = parseInt(response.data[x].Opening_Rank);
                      let temp2 = parseInt(response.data[x].Closing_Rank);
                      if (minimum < temp1 && maximum > temp2) {
                        array.push(response.data[x]);
                      }
                    } else {
                      array.push(response.data[x]);
                    }
                    // array.push(response.data[x]);
                  }
                }
              }
              console.log("array", array);
              setFilter(array);
              setLoader(false)
            } else {
              setFilter(response.data);
              setLoader(false)
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoader(true)
      if (selected.length > 0) {
        for (let i = 0; i < selected.length; i++) {
          for (let x = 0; x < defaultData.length; x++) {
            if (
              defaultData[x].Academic_Program_Name.includes(selected[i].value)
            ) {
              if (maximum && minimum) {
                console.log("in min max");
                let temp1 = parseInt(defaultData[x].Opening_Rank);
                let temp2 = parseInt(defaultData[x].Closing_Rank);
                if (minimum < temp1 && maximum > temp2) {
                  array.push(defaultData[x]);
                }
              } else {
                array.push(defaultData[x]);
              }
            }
          }
        }
        setFilter(array);
        setLoader(false)
        console.log("data", array);
      }
    } setLoader(false)
  }, [
    setFilter,
    selectedGender,
    selectedRound,
    selectedSeat,
    callFunction,
    selected,
    minimum,
    maximum,
  ]);

  return (
    <>
      <div className="p-3 ">
        <div className="head md:p-5">
          <h2 className="text-2xl font-bold p-2">View Branch-wise Cut-offs</h2>
          <p className="p-2">
            Filter by branch allows you to filter the cut-off data with the
            selected branch and further narrow down with your choice of
            institutes.
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
                onClick={() => setExamTypes("JEE")}
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
                onClick={() => setExamTypes("ADVANCE")}
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
      <div className="instituteType my-1 ml-5 md:w-[50%] md:px-5">
        <div className="flex justify-between text-sm font-medium">
          <span>Branches</span>
        </div>
        <div className="mt-1 text-sm">
          <Select
            onChange={(e) => {
              setBranches(e);
            }}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={Branches}
          />
        </div>
      </div>
      <div className={!callFunction?"w-full flex flex-row justify-start text-sm text-gray-400":"w-full flex flex-row justify-start text-sm"}>
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Seat type</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setSeat(e.target.value);
              setCall(true);
            }}
          >
            {Seat.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Gender</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setGender(e.target.value);
              setCall(true);
            }}
          >
            {Gender.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="homeStates my-1 md:w-1/3 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Display rounds</span>
          </div>
          <select
            name="states"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md"
            onChange={(e) => {
              setRound(e.target.value);
              setCall(true);
            }}
          >
            {Rounds.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="w-full flex flex-row justify-start mb-5 text-sm">
        <div className="homeStates my-1 md:w-1/2 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Minimum Rank</span>
          </div>
          <input
            type="number"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setMinimum(e.target.value);
              // setRequiredState(false);
            }}
          ></input>
        </div>
        <div className="homeStates my-1 md:w-1/2 md:px-10">
          <div className="flex justify-between font-medium">
            <span>Maximum Rank</span>
          </div>
          <input
            type="number"
            className="p-2 w-full border-solid border-[#D1D5DB] border rounded-md "
            onChange={(e) => {
              setMaximum(e.target.value);
              // setRequiredState(false);
            }}
          ></input>
        </div>
      </div>
      <div className="w-full mobs:w-[320px] ml-10 mb-7 text-sm border rounded-lg mr-10 text-gray-500 overflow-x-auto">
        {loader ? (
<div className="w-full flex flex-wrap justify-center md:my-5 ">
<ClipLoader
            // color={color}
            // loading={loading}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
</div>
        ):(
          <Table
          columns={columns}
          dataSource={filterData.length > 0 ? filterData : defaultData}
          responsive
        ></Table>
        )}

      </div>
    </>
  );
};

export default viewBranchWise;
