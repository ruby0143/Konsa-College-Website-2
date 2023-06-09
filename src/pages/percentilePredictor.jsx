import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import data from "../components/toolsPage/test";
import { Helmet } from "react-helmet";

const PercentilePredictor = () => {
  useEffect(() => {
    setApiResponseData(data);
  }, []);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [apiResponseData, setApiResponseData] = useState([]);
  const [shift, setShift] = useState("-- Enter your shift --");
  const [inputMarks, setInputMarks] = useState("");
  const [prediction, setPrediction] = useState({});
  const [showPercentile, setShowPercentile] = useState(false);
  const totalPeople=900000

  const shiftList = [
    { type: "6th Morning" },
    { type: "6th Evening" },
    { type: "7th Morning" },
    { type: "7th Evening" },
  ];

  const handlePredictor = () => {

    if (shift !== "-- Enter Your Shift --" && inputMarks !== "") {
      let shiftType = shift;
      let shiftVal = 0;

      switch(shift) {
        case "6th Morning":
          shiftVal = 0.93;
          break;
        case "6th Evening":
          shiftVal = 0.98;
          break;
        case "7th Morning":
          shiftVal = 0.95;
          break;
        case "7th Evening":
          shiftVal = 0.99;
          break;
        default:
          shiftVal = 1;
          break;
      }

      let marks = inputMarks;

      let arr = apiResponseData;

      function percentileRangeGen(arr, marks, shiftVal) {
        let p = [];
        marks = marks * shiftVal;

        for (var i = 0; i < arr.length; i++) {
          let lowerBound = arr[i]["Marks Lower Bound"];
          let upperBound = arr[i]["Marks Upper Bound"];
          if (marks > lowerBound && marks < upperBound) {
//             let r1 =
//               Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
//             let r2 =
//               Math.round(Math.random().toFixed(4) * 100000000) / 100000000;

//             pMin.push(arr[i]["Percentile"] + Math.min(r1, r2));
//             pMax.push(arr[i]["Percentile"] + Math.max(r1, r2));
            p.push(arr[i]["Percentile"]);
          }
        }
        var minVal = Math.min(...p)
        var minRank=((100-minVal)*totalPeople)/100

        var maxVal = Math.max(...p)
        var maxRank=((100-maxVal)*totalPeople)/100

        minRank = Math.max(minRank, 1)
        maxRank = Math.max(maxRank, 1) + (minRank * 0.1)

        return { minVal: minRank, maxVal: maxRank };
      }

      setShowPercentile(true);
      setPrediction(percentileRangeGen(arr, marks, shiftVal));
      setShift("-- Enter Your Shift --");
      setInputMarks("");
    }
  };

  return (
    <>
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Konsacollege - Rank Predictor</title>
        <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.konsacollege.com" />
          <meta property="og:site_name"
            content="Konsacollege - Rank Predictor"/>
          <meta property="og:image"
            content="../../assets/collegesetu.png" />
          <meta property="og:determiner" content="..." />
          <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
          <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
          <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
          <meta name="twitter:image"
            content="../../assets/collegesetu.png" />
          <meta name="twitter:image:alt"
            content="Konsa College Logo" />
          <meta property="twitter:url" content="https://www.konsacollege.com" />
          <meta property="twitter:site" content="@konsacollege" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
      </Helmet>
      <div className="bg-[#F5F5F5] ">
        <h2 className="pt-[80px] mob:pt-[18px] font-roboto font-bold mob:font-semibold text-[30px] mob:text-[18px] text-[#3C3B3B] text-center tracking-wider">
          Rank Predictor
        </h2>
        <h3 className="pt-[20px] mob:pt-[8px] font-roboto font-bold mob:font-semibold text-[22px] mob:text-[17px] text-[#3C3B3B] text-center tracking-wider">
          JEE Mains 2023
        </h3>
        <div className=" flex justify-center mb-[60px] mob:mb-[40px]">
          <p className="text-center w-[80%]  mt-[20px] mob:mt-[8px] text-xl mob:text-base font-normal mob:font-light text-[#3C3B3B] desk:leading-6 mob:leading-4 desk:tracking-wider">
          Don't rely on guesswork to determine your rank – use our innovative tool to get a precise understanding of your performance compared to your peers!
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
                {...register("shift", { required: "shift field is required" })}
                onChange={e => setShift(e.target.value)}
                value={shift}
              >
                <option className='text-[#ACACAC]' value="">-- Enter your shift --</option>
                {
                  shiftList.map((shift, idx) => {
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
                  {...register("score", { required: "marks field is required" })}
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
                    id="toolSubmit"
                    className="text-[#FFFFFF] p-1 mob:text-sm"
                    type="submit"
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
                      Your Expected Rank is
                    </p>
                    <p className="text-[#F3F3F3]  text-center  desk:leading-9 desk:tracking-wide text-[28px] mob:text-[17px] font-bold mob:font-normal">
                      {`${parseFloat(prediction.maxVal).toFixed(0)} - ${parseFloat(prediction.minVal).toFixed(0)}`}
                    </p>
                  </div>
                )
              ) : (
                <p className="text-[#F3F3F3] mob:hidden  text-center  leading-9 tracking-wide text-[28px] font-bold">
                 Clicking on  <span className="bg-[#EE7C00] p-1 rounded-sm px-2">Predict Now</span>  is easier than checking your actual result! All the best anyways!
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
