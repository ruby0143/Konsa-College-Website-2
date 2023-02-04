import React from "react";
import "./Scholarship.css";

function Scholarship(props) {
  return (
    <div className="container">
      <div className="cnt-head text-xl m-3 font-bold text-[#303030] mt-8">Scholarship</div>
      <hr />
      <div className="cnt-body fs mt-[1.5rem]">
        {props.result.scholarships?.map((point, id) => {
          return (
            <div className="s-item" key={id}>
              <div className="s-icon">
                <img className="icon h-3" src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/scholar.png" />
              </div>
              <p className="s-text">
                {point}
              </p>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default Scholarship;
