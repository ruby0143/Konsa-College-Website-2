import React from "react";

function Scholarship(props) {
  return (
    <div className="container">
      <div className="cnt-head text-xl my-3 font-bold text-[#303030] mt-8">Scholarship</div>
      <hr />
      <div className="cnt-body text-[13px] mt-[1.5rem]">
        {props.result.scholarships?.map((point, id) => {
          return (
            <div className="my-2 w-full flex" key={id}>
              <div className="pt-[5px] mr-[8px] w-[5%]">
                <img className="w-[30px] h-3" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/scholar.png" />
              </div>
              <div className="w-[95%]"><p className="leading-[15.23px] tracking-[.05rem]">
                {point}
              </p></div>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default Scholarship;
