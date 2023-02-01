import React from "react";

function toolBody() {
  return (
    <div className="max-w-[450px]  md:m-6">
      <div className="m-6 flex flex-col align-center my-14">
        <div className="text-center font-semibold text-[#303030]">Enter your JEE Main 2023 Details</div>
        <div className="m-3 my-5">
          <div className="text-[#787878]">Your Shift</div>
          <div>
            <input type="text"  style={{border : "solid 1px #DCDCDC"}} placeholder="Choose your shift" className="bg-[#F5F5F5] w-full my-1 h-[35px] rounded-[4px] border-solid border-1 border-black p-3"/>
          </div>
        </div>
        <div className="m-3">
          <div className="text-[#787878]">Enter your score out of 200</div>
          <div>
          <input type="number" style={{border : "solid 1px #DCDCDC"}} placeholder="Enter your JEE Marks" className="bg-[#F5F5F5] w-full my-1 h-[35px] rounded-[4px] border-solid border-1 border-black p-3"/>
          </div>
        </div>
        <button className="bg-[#EE7C00] text-white rounded-[46px] px-[1rem] py-[.4rem] text-center w-[120px] m-auto my-2">
          Predict Now
        </button>
        <div className="m-2 text-center bg-[#F5F5F5] p-2 py-3 mt-6">
            <div className="m-2 mx-0 text-sm font-semibold">Your Expected Percentile is this</div>
            <div className="m-2 text-[#EE7C00] font-semibold">99.676-99.998</div>
        </div>
      </div>
    </div>
  );
}

export default toolBody;
