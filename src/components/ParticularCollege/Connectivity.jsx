import React from "react";
import "./Connectivity.css";

function Connectivty(props) {
  return (
    <div className="container mt2">
      <div className="cnt-head">Connectivity</div>
      <hr />
      <div className="cnt-body">
        <div className="connectiviy">
          {/* <div className="dotted"></div> */}
          <div className="c-item">
            <div className="c-icon inline-flex items-center justify-center p-3 h-12 w-13 rounded-full ">
              <img className="icon h-7 w-7" src="src\assets\icons\castle.png" />
            </div>
            <div className="c-text m1">
              <div className="cente">{props.result.college_full_name}</div>
            </div>
          </div>
          
            {props.result.connectivity?.map((item,id)=>{
              return(
                <div className="c-item">
                <div className="c-icon inline-flex items-center justify-center p-3 h-12 w-15 rounded-full">
              <img className="icon h-7 w-7" src={item.icon}/>
            </div>
            <div className="c-text">
              <div className="center">
                {item.trans}<br />
              </div>
              <span className="light">{item.dist}</span>
            </div>
            </div>
              )
            })}

        </div>
      </div>
    </div>
  );
}

export default Connectivty;
