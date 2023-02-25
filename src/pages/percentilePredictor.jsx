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
  const [inputMarks, setInputMarks] = useState(-1);
  const [prediction, setPrediction] = useState({});
  const [shiftError, setShiftError] = useState("");
  const [inputMarksError, setInputMarksError] = useState("");
  const [isError, setIsError] = useState(false);
  const [showPercentile, setShowPercentile] = useState(false);

  const shiftList = [
    { shift: "Easy" },
    { shift: "Moderate" },
    { shift: "Hard" },
  ];

  const handleValidationError = () => {
    if (inputMarks === -1) {
      setInputMarksError("Score required to be entered!");
      setIsError(true);
    }

    if (shift === "") {
      setShiftError("Shift required to be selected!");
      setIsError(true);
    } else {
      handlePredicter();
    }
  };

  const handlePredicter = () => {
    setShowPercentile(false);
    if (!isError) {
      console.log(isError);
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
            // console.log(upperBound, ">", marks, ">", lowerBound);
            let r1 =
              Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
            let r2 =
              Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
            pMin.push(arr[i]["Percentile"] + Math.min(r1, r2));
            pMax.push(arr[i]["Percentile"] + Math.max(r1, r2));
            // console.log(pMin);
            // console.log(pMax);
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
        console.log(`Min Val: ${minVal} & Max Val: ${maxVal}`);
        return { minVal: minVal, maxVal: maxVal };
      }
      setShowPercentile(true);
      setPrediction(percentileRangeGen(arr, marks, shiftVal));
      setShift("");
      setInputMarks(-1);
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
            <div className="desk:w-[53%] flex-col font-roboto p-[40px] bg-[url('/Stroke.svg')] bg-contain">
              <h4 className="mt-[22px] mob:mt-[11px] text-center font-bold text-sm mob:font-medium">
                Enter your JEE Mains 2023 Details
              </h4>
              <h6 className="mt-[35px] mob:mt-[20px] mob:text-[13px]">
                Your Shift
              </h6>
              <div
                className="relative flex flex-row mt-[8px] justify-start items-center w-full p-[6px] rounded-[2px] bg-[#ffffff]"
                style={{ border: "1px solid #D3D3D3" }}
              >
                <button
                  className="text-[#ACACAC] text-sm tracking-wide w-[90%] flex justify-start"
                  onClick={() => {
                    setIsOpen((prevState) => !prevState);
                  }}
                >
                  {shift !== "" ? (
                    <p className="text-[#ACACAC] text-sm mob:text-xs tracking-wide ">
                      {shift}
                    </p>
                  ) : (
                    <p className="text-[#ACACAC] text-sm mob:text-xs tracking-wide ">
                      Choose your Shift
                    </p>
                  )}
                </button>
                {!isOpen ? (
                  <AiOutlineDown className="text-[#ACACAC] w-[10%]" />
                ) : (
                  <AiOutlineUp className="text-[#ACACAC] w-[10%]" />
                )}

                {isOpen && (
                  <div className="absolute top-[35px] left-0 right-[1px] w-full text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]">
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

              <h6 className="mt-[26px] mob:text-[13px] mob:mt-[18px] ">
                Enter score out of 300{" "}
              </h6>
              <input
                className="rounded-[2px] bg-[#FFFFFF] mt-[8px] text-[#ACACAC] text-sm mob:text-xs tracking-wide focus:outline-none w-full p-[6px]"
                style={{
                  boxShadow:
                    "0px 1.52083px 1.52083px 1.52083px rgba(204, 204, 204, 0.1)",
                  border: "0.760417px solid #CCCCCC",
                }}
                type="number"
                // value={inputMarks}
                placeholder="Enter your JEE Marks"
                onChange={(e) => setInputMarks(e.target.value)}
                required
                min="-10"
                max="300"
              ></input>
              {inputMarks !== "" && inputMarks === -1 && (
                <div className="text-red-600">{inputMarksError}</div>
              )}

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
                    onClick={handleValidationError}
                  >
                    Predict Now
                  </button>
                </div>
              </div>
            </div>

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

export default CollegePredictor;
