import React, { useEffect } from "react";
import { createChart, } from "lightweight-charts";
import { ChartComponent } from "../components/chartComponent";
function trendAnalysis() {
  useEffect(()=>{
    const ele = document.querySelector("#chart");
    console.log(ele,"ok");

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

  },[])


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
                <input type="radio" value="Mains"></input>
                <label>JEE (Main)</label>
              </div>
              <div>
                <input type="radio" value="Advance"></input>
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
              className="my-3 p-2 w-full border-solid border-black border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
          <div className="instituteTypes my-3 md:px-10 md:w-[33%]">
            <div className="flex justify-between">
              <span>Home State</span>
            </div>
            <div className="opts mt-3 flex justify-between">
              <div className="">
                <input type="checkbox"></input>
                <label className="px-2">NITs</label>
              </div>
              <div className="">
                <input type="checkbox"></input>
                <label className="px-2">IITs</label>
              </div>
              <div className="">
                <input type="checkbox"></input>
                <label className="px-2">GFTIs</label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="institutes my-3 md:px-10 md:w-[33%]">
            <div className="flex justify-between">
              <span>Institue</span>
            </div>
            <select
              name="colleges"
              className="my-3 p-2 w-full border-solid border-black border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
          <div className="course my-3 md:px-10 md:w-[33%]">
            <div className="flex justify-between">
              <span>Course</span>
            </div>
            <select
              name="states"
              className="my-3 p-2 w-full border-solid border-black border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
          <div className="program my-3 md:px-10 md:w-[33%]">
            <div className="flex justify-between">
              <span>Program</span>
            </div>
            <select
              name="states"
              className="my-3 p-2 w-full border-solid border-black border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="seatType my-3 md:w-[50%] md:px-10">
            <div className="flex justify-between">
              <span>Seat Type</span>
            </div>
            <select
              name="states"
              className="my-3 p-2 w-full border-solid border-black border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
          <div className="gender my-3 md:w-[50%] md:px-10">
            <div className="flex justify-between">
              <span>Gender</span>
            </div>
            <select
              name="states"
              className="my-3 p-2 w-full border-solid border-black border rounded-md"
            >
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            </select>
          </div>
        </div>
      </div>
      <div className="chart mt-5 " id="chart">
        
        
      </div>
    </div>
  );
}

export default trendAnalysis;
