import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import data from './test'

function toolBody() {

  useEffect(() => {
    
    setApiResponseData(data)
    // axios.get("https://api.sheety.co/2465db155c118f5b6011ad00d0835bd4/percentilePredictorData/data")
    //      .then((res)=>{
            // setApiResponseData(res.data.data)
        //  })
  },[])

  const [apiResponseData, setApiResponseData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [shift, setShift] = useState("")
  const [inputMarks, setInputMarks] = useState(-1)
  const [prediction, setPrediction] = useState({})

  // err validations
  const [shiftError, setShiftError] = useState("")
  const [inputMarksError, setInputMarksError] = useState("")
  const [isError, setIsError] = useState(false)
  
  const shiftList = [
    {shift:"Easy"},
    {shift:"Moderate"},
    {shift:"Hard"},
  ]

  const handleValidationError = () =>{

    if(inputMarks === -1){
      setInputMarksError("Score required to be entered!")
      setIsError(true)
    }

    if(shift === ""){
      setShiftError("Shift required to be selected!")
      setIsError(true)
    }

    else {
      setIsError(false)
    }
  }
  
  const handlePredicter = (e) =>{
    e.preventDefault();
    
    if(!isError){
      console.log(isError)
      console.log("api function call")
      let shiftType = shift
      let shiftVal = 0;
        if(shiftType === "Easy") shiftVal = 0.9
        else if(shiftType === "Moderate") shiftVal = 1 
        else shiftVal = 1.1;
        
      let marks = inputMarks

      let arr = apiResponseData

      function percentileRangeGen(arr, marks, shiftVal) {
        let pMin = []
        let pMax = []
        marks = marks*shiftVal

        for (var i = 0; i < arr.length; i++) {
          let lowerBound = arr[i]["Marks Lower Bound"]
          let upperBound = arr[i]["Marks Upper Bound"]
          if (marks > lowerBound && marks < upperBound) {
            console.log(upperBound, ">", marks, ">", lowerBound)
            let r1 = Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
            let r2 = Math.round(Math.random().toFixed(4) * 100000000) / 100000000;
            pMin.push(arr[i]["Percentile"] + Math.min(r1, r2))
            pMax.push(arr[i]["Percentile"] + Math.max(r1, r2))
            console.log(pMin)
            console.log(pMax)
          }
        }
        var minVal = Math.min(...pMin).toString().split(".")[0]+"."+Math.min(...pMin).toString().split(".")[1].substring(1,5)
        var maxVal = Math.max(...pMax).toString().split(".")[0]+"."+Math.max(...pMax).toString().split(".")[1].substring(1,5)
        console.log(`Min Val: ${minVal} & Max Val: ${maxVal}`)
        return {minVal: minVal, maxVal: maxVal}
      }
      
      setPrediction(percentileRangeGen(arr,marks,shiftVal));

      setShift("")
      setInputMarks()

    }  else {
      return ;
    }
  }

  return (
    <div className="w-[90%] lg:w-[50%]  md:m-6">
      <form className="m-6 flex flex-col align-center my-14" onSubmit={handlePredicter}>
        <div className="text-center md:text-2xl font-semibold text-[#303030]">Enter your JEE Main 2023 Details</div>
        <div className="mx-3 my-5 md:mt-8">
          <div className="text-[#787878] md:text-xl">Your Shift <span className="text-red-600">*</span></div>
          <div className="relative flex flex-col items-center w-full">
            <button 
              className="bg-[#F5F5F5] w-full h-[35px] md:h-[45px] mb-2 focus:outline-none border text-[#9ca3b7] border-[#dcdcdc] rounded-sm flex items-center justify-between px-4 "
              onClick={()=>setIsOpen(prevState => !prevState)}
            >
              {shift !== ""?<span>{shift}</span>:<span>Choose Your Shift</span>}
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
          {shiftError !== "" && shift === "" && <div className="text-red-600">{shiftError}</div>}  
        </div>
        <div className="mx-3 my-5">
          <div className="text-[#787878] md:text-xl">Enter your score out of 300 <span className="text-red-600">*</span></div>
          <div>
            <input 
              type="number" 
              required min="-10" max="300"
              style={{border : "solid 1px #DCDCDC"}} 
              placeholder="Enter your JEE Marks" 
              className="bg-[#F5F5F5] w-full my-1 h-[35px] md:h-[45px] rounded-[4px] border-solid border-1 border-black p-3"
              onChange={(e) => setInputMarks(e.target.value)}
              />
          </div>
              {inputMarksError !== "" && inputMarks === -1 && <div className="text-red-600">{inputMarksError}</div>}  
        </div>
        <button 
          type="submit"
          className="bg-[#EE7C00] text-white rounded-[46px] px-[1rem] py-[.4rem] text-center w-[120px] md:w-[180px] md:text-xl m-auto my-2 md:my-4" 
          onClick={handleValidationError}
        >
          Predict Now
        </button>
        {JSON.stringify(prediction) !== '{}' && <div className="m-2 text-center bg-[#F5F5F5] p-2 py-3 mt-6">
            <div className="m-2 mx-0 text-sm font-semibold">Your Expected Percentile is this</div>
            <div className="m-2 text-[#EE7C00] font-semibold">{`${prediction.minVal} - ${prediction.maxVal}`}</div>
        </div>}
      </form>
    </div>
  );
}

export default toolBody;
