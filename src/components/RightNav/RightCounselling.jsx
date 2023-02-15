import React, { useEffect, useState } from "react";
import axios from "axios";
function RightCounselling() {
  const [counselling, setCounselling] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://konsa-college-backend-production-0c4c.up.railway.app/councelling"
      )
      .then((response) => {
        if (response.status != 500) {
          setCounselling(response.data);
          setSkeleton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" mt-[3rem]">
      <div
        className="dontMiss mt-[1.5rem] "
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
          bordeRadius: "10px",
        }}
      >
        <h2 className="pt-5 text-[#303030] text-[18px] m-3 font-semibold">
          Don't Miss This
        </h2>
        <div className="px-2">
          <hr />
        </div>
        {counselling?.map((counsel, idx) => {
          if (idx < 4) {
            return (
              <a href={counsel.apply_link} target="_blank">
                <div className="flex justify-evenly px-1 py-4 ">
                  <h2 className="font-semibold w-[40%] px-3 lg:px-8 lg:w-[50%] ">
                    {counsel.exam_name}
                  </h2>
                  <div className="w-[60%] pl-[2rem] lg:pl-[2rem]">
                    <button className="bg-[#EE7C00] text-white rounded-[46px] px-[1.2rem] py-[.1rem] ">
                      Fill Now
                    </button>
                  </div>
                </div>
              </a>
            );
          }
        })}
      </div>
      
 
    </div>
  );
}

export default RightCounselling;
