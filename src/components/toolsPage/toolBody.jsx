import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function toolBody() {

  useEffect(() => {
    axios.get("https://api.sheety.co/2465db155c118f5b6011ad00d0835bd4/percentilePredictorData/data")
         .then((res)=>{
            setApiResponseData(res.data.data)
         })
  },[])

  const [apiResponseData, setApiResponseData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [shift, setShift] = useState("")
  const [inputMarks, setInputMarks] = useState(0)
  const [prediction, setPrediction] = useState({})
  
  const shiftList = [
    {shift:"Easy"},
    {shift:"Moderate"},
    {shift:"Hard"},
  ]

  // on clicking predict
  const handlePredicter = () =>{
    let shiftType = shift
    let shiftVal = 0;
      if(shiftType === "Easy") shiftVal = 0.99
      else if(shiftType === "Moderate") shiftVal = 0.95 
      else shiftVal = 0.90;
      
    let marks = inputMarks

    let arr = apiResponseData

    function percentileRangeGen(arr, marks, shiftVal) {
      let pMin = []
      let pMax = []
    
      for (var i = 0; i < arr.length; i++) {
        let lowerBound = arr[i]["marksLowerBound"]
        let upperBound = arr[i]["marksUpperBound"]
        if (marks > lowerBound && marks < upperBound) {
          let r1 = Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
          let r2 = Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
          Math.max(r1, r2)
          pMin.push(arr[i]["percentile"] + Math.min(r1, r2))
          pMax.push(arr[i]["percentile"] + Math.max(r1, r2))
        }
      }
      console.log("Your Predicted Percentile is from ", Math.min(...pMin) * shiftVal, " to ", Math.max(...pMax) * shiftVal)
      return {minVal: Math.min(...pMin) * shiftVal, maxVal: Math.max(...pMax) * shiftVal}
    }
    
    setPrediction(percentileRangeGen(arr,marks,shiftVal));
  }


  return (
    <div className="max-w-[450px]  md:m-6">
      <div className="m-6 flex flex-col align-center my-14">
        <div className="text-center font-semibold text-[#303030]">Enter your JEE Main 2023 Details</div>
        <div className="m-3 my-5">
          <div className="text-[#787878]">Your Shift</div>
          <div className="relative flex flex-col items-center w-full">
            <button 
              className="bg-[#F5F5F5] w-full h-[35px] mb-2 focus:outline-none border text-[#9ca3b7] border-[#dcdcdc] rounded-sm flex items-center justify-between px-4 "
              onClick={()=>setIsOpen(prevState => !prevState)}
            >
              <span>Choose Your Shift</span>
              {!isOpen?<AiOutlineDown className="text-[#787878]" />:<AiOutlineUp className="#787878"/>}
            </button>
            
            {isOpen&&<div className="absolute top-[40px] left-0 w-full text-[#9ca3b7] border-[#dcdcdc] bg-[#F5F5F5]">
              {
                shiftList.map(shift => {
                  return <div 
                            key={shift.shift} 
                            className="w-full px-3 hover:bg-[#ffffff] shadow-sm cursor-pointer rounded-sm leading-10"
                            onClick={()=>{
                              setShift(shift.shift)
                              setIsOpen(false)
                            }}
                          >
                            {shift.shift}
                        </div>
                })
              }
            </div>}

          </div>
        </div>
        <div className="m-3">
          <div className="text-[#787878]">Enter your score out of 200</div>
          <div>
            <input 
              type="number" 
              required
              style={{border : "solid 1px #DCDCDC"}} 
              placeholder="Enter your JEE Marks" 
              className="bg-[#F5F5F5] w-full my-1 h-[35px] rounded-[4px] border-solid border-1 border-black p-3"
              onChange={(e) => setInputMarks(e.target.value)}
            />
          </div>
        </div>
        <button 
          onClick={handlePredicter}
          className="bg-[#EE7C00] text-white rounded-[46px] px-[1rem] py-[.4rem] text-center w-[120px] m-auto my-2" 
        >
          Predict Now
        </button>
        {<div className="m-2 text-center bg-[#F5F5F5] p-2 py-3 mt-6">
            <div className="m-2 mx-0 text-sm font-semibold">Your Expected Percentile is this</div>
            <div className="m-2 text-[#EE7C00] font-semibold">{`${prediction.minVal} - ${prediction.maxVal}`}</div>
        </div>}
      </div>
    </div>
  );
}

export default toolBody;
