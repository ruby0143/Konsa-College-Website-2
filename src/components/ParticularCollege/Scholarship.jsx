import React from "react";
import "./Scholarship.css";

function Scholarship(props) {
  return (
    <div className="container">
      <div className="cnt-head">Scholarship</div>
      <hr />
      <div className="cnt-body fs mt4">
        {props.result.scholarships.map((point,id)=>{
          return(
             <div className="s-item" key={id}>
               <div className="s-icon">
               <img className="icon" src="src\assets\icons\scholar.png" />
               </div>
                <div className="s-text">
                {point}
                </div>
              </div>
          )
        })}
        
      </div>
    </div>
  );
}

export default Scholarship;
