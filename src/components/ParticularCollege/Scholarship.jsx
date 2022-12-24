import React from "react";
import "./Scholarship.css";

function Scholarship() {
  return (
    <div className="container">
      <div className="cnt-head">Scholarship</div>
      <hr />
      <div className="cnt-body fs mt4">
        <div className="s-item">
          <div className="s-icon">
            <img className="icon" src="src\assets\icons\scholar.png" />
          </div>
          <div className="s-text">
              100 % Tution Fee waiver for sc/st/PH students.
          </div>
        </div>
        <div className="s-item">
          <div className="s-icon">
            <img className="icon" src="src\assets\icons\scholar.png" />
          </div>
          <div className="s-text">
              Full remission of the Tution fee for genreal and OBC students
              whose family income is less than Rs. 1 lakh per annum
          </div>
        </div>
        <div className="s-item">
          <div className="s-icon">
            <img className="icon" src="src\assets\icons\scholar.png" />
          </div>
          <div className="s-text">
              Full remission of the Tution fee for genreal and OBC students
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scholarship;
