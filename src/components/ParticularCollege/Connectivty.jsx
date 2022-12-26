import React from "react";
import "./Connectivity.css";

function Connectivty() {
  return (
    <div className="container mt2">
      <div className="cnt-head">Connectivity</div>
      <hr />
      <div className="cnt-body">
        <div className="connectiviy">
          {/* <div className="dotted"></div> */}
          <div className="c-item">
            <div className="c-icon">
              <img className="icon" src="src\assets\icons\castle.png" />
            </div>
            <div className="c-text m1">
              <div className="center">Indian Institute Of Technology, BHU</div>
            </div>
          </div>
          <div className="c-item">
            <div className="c-icon">
              <img src="src\assets\icons\train.png" />
            </div>
            <div className="c-text">
              <div className="center">
                Varanasi Junction Railway Station <br />
              </div>
              <span className="light">10.5 Km</span>
            </div>
          </div>
          <div className="c-item">
            <div className="c-icon">
              <img src="src\assets\icons\bus.png" />
            </div>
            <div className="c-text">
              <div className="center">
                IPt. Deen Dayal Upadhyaya Junction <br />
              </div>
              <span className="light">10.5 Km</span>
            </div>
          </div>
          <div className="c-item">
            <div className="c-icon">
              <img src="src\assets\icons\plane.png" />
            </div>
            <div className="c-text">
              <div className="center">
                Lal Bahadur Shastri International Airport, Babatpur <br />
              </div>
              <span className="light">10.5 Km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connectivty;
