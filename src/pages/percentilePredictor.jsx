import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import data from "../components/toolsPage/test";

const PercentilePredictor = () => {
  useEffect(() => {
    setApiResponseData(data);
  }, []);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [apiResponseData, setApiResponseData] = useState([]);
  const [shift, setShift] = useState("-- Enter Your Shift --");
  const [inputMarks, setInputMarks] = useState("");
  const [prediction, setPrediction] = useState({});
  const [showPercentile, setShowPercentile] = useState(false);

  const shiftList = [
    { type: "Easy" },
    { type: "Moderate" },
    { type: "Hard" },
  ];

  const handlePredictor = () => {

    if (shift !== "-- Enter Your Shift --" && inputMarks !== "") {
      let shiftType = shift;
      let shiftVal = 0;

      if (shiftType === "Easy") shiftVal = 0.9;
      else if (shiftType === "Moderate") shiftVal = 1;
      else shiftVal = 1.1;

      let marks = inputMarks;

      let arr = apiResponseData;

      function percentileRangeGen(arr, marks, shiftVal) {
        let pMin = [];
        let pMax = [];
        marks = marks * shiftVal;

        for (var i = 0; i < arr.length; i++) {
          let lowerBound = arr[i]["Marks Lower Bound"];
          let upperBound = arr[i]["Marks Upper Bound"];
          if (marks > lowerBound && marks < upperBound) {
            let r1 =
              Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
            let r2 =
              Math.round(Math.random().toFixed(4) * 100000000) / 100000000;

            pMin.push(arr[i]["Percentile"] + Math.min(r1, r2));
            pMax.push(arr[i]["Percentile"] + Math.max(r1, r2));
          }
        }
        var minVal =
          Math.min(...pMin)
            .toString()
            .split(".")[0] +
          "." +
          Math.min(...pMin)
            .toString()
            .split(".")[1]
            .substring(1, 5);

        var maxVal =
          Math.max(...pMax)
            .toString()
            .split(".")[0] +
          "." +
          Math.max(...pMax)
            .toString()
            .split(".")[1]
            .substring(1, 5);

        return { minVal: minVal, maxVal: maxVal };
      }
      setShowPercentile(true);
      setPrediction(percentileRangeGen(arr, marks, shiftVal));
      setShift("-- Enter Your Shift --");
      setInputMarks("");
    }
  };

  return (
    <>
      <div className="bg-[#F5F5F5] ">
        <h2 className="pt-[80px] mob:pt-[18px] font-roboto font-bold mob:font-semibold text-[30px] mob:text-[18px] text-[#3C3B3B] text-center tracking-wider">
          Percentile Predictor
        </h2>
        <h3 className="pt-[20px] mob:pt-[8px] font-roboto font-bold mob:font-semibold text-[22px] mob:text-[17px] text-[#3C3B3B] text-center tracking-wider">
          JEE Mains 2023
        </h3>
        <div className=" flex justify-center mb-[60px] mob:mb-[40px]">
          <p className="text-center w-[80%]  mt-[20px] mob:mt-[8px] text-xl mob:text-base font-normal mob:font-light text-[#3C3B3B] desk:leading-6 mob:leading-4 desk:tracking-wider">
            Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
            tellus pellentesque sodales eget quam enim.
          </p>
        </div>
        <div className=" flex justify-center bg-[url('/cpbg.svg')] desk:bg-cover  mob:bg-cover mob:bg-no-repeat mob:bg-bottom">
          <div
            className="desk:w-[60%] mob:w-[80%] desk:h-[450px] bg-[#FFFFFF] flex desk:flex-row mob:flex-col mb-[80px] mob:mb-[150px]"
            style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
          >
            <form 
              onSubmit={handleSubmit(handlePredictor)}
              className="desk:w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain bg-no-repeat"
            >
              <h4 className="mt-[22px] mob:mt-[11px] text-center font-bold text-sm mob:font-medium">
                Enter your JEE Mains 2023 Details
              </h4>

              <h6 className="mt-[26px] mob:text-[13px] mob:mt-[18px] mb-2">Your Shift</h6>

              <select 
                  className={`w-full rounded-[2px] px-1 h-[35px] text-[#ACACAC] text-sm bg-[#ffffff] cursor-pointer focus:outline-none border ${errors.shift ? "border-red-500" : "border-gray-300"}`}
                  {...register("shift",{required: "shift field is required"})}
                  onChange={e=>setShift(e.target.value)}
                >
                  <option className='text-[#ACACAC]' value="">{shift}</option>
                  {
                    shiftList.map((shift,idx)=>{
                      return (
                        <option 
                          key={idx} 
                          value={shift.type}
                          className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer"
                        >
                          {shift.type}
                        </option>
                      )
                    })
                  }
                </select>
    
                {errors.shift && <div 
                  className='text-sm text-red-500 mt-1'
                >
                  {errors.shift.message}
                </div>}

              <h6 className="mt-[26px] mob:text-[13px] mob:mt-[18px] ">
                Enter score out of 300
              </h6>
              <div  
                className="relative flex mt-[8px] justify-betweeb h-[34px] items-center w-full rounded-[2px]" 
                >
                <input
                  {...register("score", { required: "name field is required" })} 
                  className={`rounded-[2px] bg-[#FFFFFF] text-[#ACACAC] text-sm mob:text-xs tracking-wide focus:outline-none border ${errors.score ? "border-red-500" : "border-gray-300"} w-full h-full p-[6px]`}
                  type="number"
                  value={inputMarks}
                  placeholder="Enter your JEE Marks"
                  onChange={(e) => setInputMarks(e.target.value)}
                  min="-10"
                  max="300"
                />
              </div>

                {errors.score && <div 
                  className='text-sm text-red-500 mt-1'
                >
                  {errors.score.message}
                </div>}

              <div className="w-full flex justify-center mt-[44px] mob:mt-[30px]">
                <div
                  className="desk:w-[50%] bg-[#EE7C00] mob:px-8 rounded-[2px] mob:rounded-2xl flex justify-center"
                  style={{
                    boxShadow:
                      "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                  }}
                >
                  <button
                    className="text-[#FFFFFF] p-1 mob:text-sm"
                    type="submit"
                    id="toolSubmit"
                  >
                    Predict Now
                  </button>
                </div>
              </div>
            </form>

            <div
              className="desk:w-[47%] flex justify-center flex-col  items-center "
              style={{
                background:
                  "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
                padding: showPercentile ? "15px" : null,
              }}
            >
              {showPercentile ? (
                JSON.stringify(prediction) !== "{}" && (
                  <div>
                    <p className="text-[#F3F3F3]  text-center  desk:leading-9 desk:tracking-wide text-[28px] mob:text-[17px] font-bold mob:font-normal">
                      Your Expected Percentile is
                    </p>
                    <p className="text-[#F3F3F3]  text-center  desk:leading-9 desk:tracking-wide text-[28px] mob:text-[17px] font-bold mob:font-normal">
                      {`${prediction.minVal} - ${prediction.maxVal}`}
                    </p>
                  </div>
                )
              ) : (
                <p className="text-[#F3F3F3] mob:hidden  text-center  leading-9 tracking-wide text-[28px] font-bold">
                  Lorem ipsum dolor sit amet consectetur. Lobortis porta
                  volutpat tellus pellentes
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PercentilePredictor;
