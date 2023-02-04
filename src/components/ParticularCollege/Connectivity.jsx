import React from "react";
import "./Connectivity.css";

function Connectivty(props) {
  return (
    <div className="flex">
      <div className="container mt-[2.5rem]">
        <div className="text-xl m-3 font-bold text-[#303030]">Connectivity</div>
        <hr />
        <div className="cnt-body">
          <div className="my-[2rem] mx-[0.5rem] relative">
            <div className="dotted"></div>
            <div className="flex mb-[2rem]">
              <div className="p-[.6rem] h-11 min-w-[2.8rem] rounded-full my-[0.5rem] mx-[0.9rem]" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <img className="h-full w-full" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/castle.png" />
              </div>
              <p className="font-semibold underline mt-[.3rem]">{props.result.college_name}</p>
            </div>

            {props.result.connectivity?.map((item, index) => {
              return (
                <div className="flex justify-start mb-[2rem]" key={index}>
                  <div className="p-[.6rem] h-11 w-11 rounded-full my-[0.5rem] mx-[0.9rem]" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <img className="h-full w-full" src={item.icon} />
                  </div>
                  <div className="flex-col items-center mt-[.3rem]">
                    <div className="">
                      <p className="underline">{item.trans}</p>
                    </div>
                    <span className="underline text-[#848484]">{item.dist}</span>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>

  );
}

export default Connectivty;
