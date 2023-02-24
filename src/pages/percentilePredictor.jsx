import React, { useState, useEffect } from "react";
import data from "../components/toolsPage/test";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const CollegePredictor = () => {
  useEffect(() => {
    setApiResponseData(data);
  }, []);

  const [apiResponseData, setApiResponseData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [shift, setShift] = useState("");
  const [inputMarks, setInputMarks] = useState("");
  const [prediction, setPrediction] = useState({});
  const [shiftError, setShiftError] = useState("");
  const [inputMarksError, setInputMarksError] = useState("");
  const [isError, setIsError] = useState(false);

  const shiftList = [
    { shift: "Easy" },
    { shift: "Moderate" },
    { shift: "Hard" },
  ];

  const handlePredicter = () => {

    if (!isError) {
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
            let r1 = Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
            let r2 = Math.round(Math.random().toFixed(4) * 100000000) / 100000000;

            pMin.push(arr[i]["Percentile"] + Math.min(r1, r2));
            pMax.push(arr[i]["Percentile"] + Math.max(r1, r2));
          }
        }
        var minVal =
          Math.min(...pMin).toString().split(".")[0] + "." +
          Math.min(...pMin).toString().split(".")[1].substring(1, 5);
        
        var maxVal = Math.max(...pMax).toString().split(".")[0] + "." +
          Math.max(...pMax).toString().split(".")[1].substring(1, 5);

        return { minVal: minVal, maxVal: maxVal };
      }

      setPrediction(percentileRangeGen(arr, marks, shiftVal));
      setShift("");
      setInputMarks("");
    }
  };

  const handleValidationError = () => {
    
    if(inputMarks === "" || shift === "") setIsError(true)

    if(isError){
      if (inputMarks === "") {
        setInputMarksError("Score required to be entered!");
      }
      
      if (shift === "") {
        setShiftError("Shift required to be selected!");
      } 
      console.log("error m aya");
      return 
    } else {
      handlePredicter()
    }
    
  };

  return (
    <div className="bg-[#F5F5F5]">
      <h2 className="pt-[80px] font-roboto font-bold text-[30px] text-[#3C3B3B] text-center tracking-wider">
        Percentile Predictor
      </h2>
      <h3 className="pt-[20px] font-roboto font-bold text-[22px] text-[#3C3B3B] text-center tracking-wider">
        JEE Mains 2023
      </h3>
      <div className=" flex justify-center mb-[60px]">
        <p className="text-center w-[80%] mt-[20px] text-xl font-normal text-[#3C3B3B] leading-6 tracking-wider">
          Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat tellus
          pellentesque sodales eget quam enim. Risus et diam quis risus nunc ut
          porttitor tellus imperdiet. Id nunc turpis donec aliquam .
        </p>
      </div>
      <div className="flex justify-center bg-[url('/cpbg.svg')] bg-cover ">
        <div
          className="w-[60%] h-[450px] bg-[#FFFFFF] flex flex-row mb-[80px]"
          style={{ boxShadow: "-3px 0px 4px 2px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
            <h4 className="mt-[22px] text-center font-bold">
              Enter your JEE Mains 2023 Details
            </h4>

            {/* SHIFT */}
            <h6 className="mt-[35px]">Your Shift</h6>
            <div  
              className="relative flex mt-[8px] justify-betweeb h-[34px] items-center w-full rounded-[2px] bg-[#ffffff]" style={{border:"1px solid #D3D3D3"}}
            >
                <input 
                  type="text"
                  placeholder="Choose Your Shift" 
                  required
                  value={shift}
                  onChange={(e)=>{setShift(e.target.value),setIsOpen(true)}}
                  className="focus:outline-none text-[#ACACAC] text-sm tracking-wide w-[90%] h-full p-2"
                />
                <div onClick={()=>setIsOpen(prev=>!prev)} className="w-[10%] h-full flex justify-center items-center cursor-pointer">
                  {!isOpen ? (
                    <AiOutlineDown className="text-[#ACACAC]" />
                  ) : (
                    <AiOutlineUp className="text-[#ACACAC]" />
                  )}
                </div> 
             
              {isOpen && (
                <div className="absolute z-10 top-[35px] left-0 right-[1px] w-full text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]">
                  {shiftList.map((shift) => {
                    return (
                      <div
                        key={shift.shift}
                        className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                        onClick={() => {
                          setShift(shift.shift);
                          setIsOpen(false);
                        }}
                      >
                        {shift.shift}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {shiftError !== "" && shift === "" && (
              <div className="text-red-600">{shiftError}</div>
            )}

            {/* SCORE */}
            <h6 className="mt-[26px]">Enter score out of 300 </h6>
            <div  
              className="relative flex mt-[8px] justify-betweeb h-[34px] items-center w-full rounded-[2px] bg-[#ffffff]" style={{border:"1px solid #D3D3D3"}}
            >
              <input
                className="focus:outline-none text-[#ACACAC] text-sm tracking-wide w-[100%] h-full p-2"
                type="number"
                value={inputMarks}
                placeholder="Enter your JEE Marks"
                onChange={(e) => setInputMarks(e.target.value)}
                required
                min="-10"
                max="300"
              />
            </div>

            {inputMarksError !== "" && inputMarks === "" && (
              <div className="text-red-600">{inputMarksError}</div>
            )}

            <div className="w-full flex justify-center mt-[44px]" onClick={handleValidationError}>
              <div
                className="w-[50%] bg-[#EE7C00] cursor-pointer rounded-[2px] flex justify-center"
                style={{
                  boxShadow:
                    "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                }}
              >
                <button
                  className="text-[#FFFFFF] p-1"
                >
                  Predict Now
                </button>
              </div>
            </div>
          </div>

          <div
            className="w-[47%] flex justify-center flex-col p-3 items-center"
            style={{
              background:
                "linear-gradient(158.5deg, #FFC88B 5.02%, #EE7C00 101.84%)",
            }}
          >
            { JSON.stringify(prediction) !== "{}" ? (
                <div>
                  <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
                    Your Expected Percentile is
                  </p>
                  <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
                    {`${prediction.minVal} - ${prediction.maxVal}`}
                  </p>
                </div>
              )
             : (
              <p className="text-[#F3F3F3]  text-center  leading-9 tracking-wide text-[28px] font-bold">
                Lorem ipsum dolor sit amet consectetur. Lobortis porta volutpat
                tellus pellentes
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePredictor;
