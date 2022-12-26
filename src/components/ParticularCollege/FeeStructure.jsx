import React from "react";
import "./Fee.css";
import { VictoryPie, VictoryLabel } from "victory";

function FeeStructure() {
  return (
    <div className="container">
      <div className="cnt-head mt4">Fee Structure</div>
      <hr />
      <div className="college-fee">
        <div className="cnt-head mt4">College Fees</div>
        <br />
        <div className="chart">
          <svg width={320} height={320} className="chart-style">
            <VictoryPie
              standalone={false}
              width={300}
              height={300}
              colorScale={[
                "#DF4A41",
                "#E99B3B",
                "#F6D658",
                "#A3D44F",
                "#5FBFE9",
                "#618EA4",
              ]}
              data={[
                { x: 1, y: 100000 },
                { x: 2, y: 12000 },
                { x: 3, y: 9000 },
                { x: 4, y: 6350 },
                { x: 5, y: 5750 },
                { x: 6, y: 365 },
              ]}
              innerRadius={70}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 18 }}
              x={150}
              y={150}
              text={["Rs 135000", "HOSTEL FEES"]}
            />
          </svg>
        </div>
        <div className="labels">
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#DF4A41" }}
              ></div>
              <div className="label-text">Tution Fee (per semester)</div>
            </div>
            <div className="label-right">₹1,00,000</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#E99B3B" }}
              ></div>
              <div className="label-text">
                Mess Advance <br />
                (per semester)
              </div>
            </div>
            <div className="label-right">₹12,000</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#F6D658" }}
              ></div>
              <div className="label-text">
                Caution Money <br />
                (one Time Refundable)
              </div>
            </div>
            <div className="label-right">₹9,000</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#A3D44F" }}
              ></div>
              <div className="label-text">Other fees (per semester)</div>
            </div>
            <div className="label-right">₹6350</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#5FBFE9" }}
              ></div>
              <div className="label-text">One Time Fees</div>
            </div>
            <div className="label-right">₹5750</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#618EA4" }}
              ></div>
              <div className="label-text">Annual Fee</div>
            </div>
            <div className="label-right">₹365</div>
          </div>
          <div className="label mt2">
            <div className="label-left">
              <div className="label-text l-spl bold">Total Fee</div>
            </div>
            <div className="label-right r-spl bold">₹ 1,33,465</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="hostel-fee">
        <div className="cnt-head">Hostel Fees</div>
        <br />
        <div className="chart">
          <svg width={320} height={320} className="chart-style">
            <VictoryPie
              standalone={false}
              width={300}
              height={300}
              colorScale={[
                "#DF4A41",
                "#E99B3B",
                "#F6D658",
                "#A3D44F",
                "#5FBFE9",
                "#618EA4",
              ]}
              data={[
                { x: 1, y: 100000 },
                { x: 2, y: 12000 },
                { x: 3, y: 9000 },
                { x: 4, y: 6350 },
                { x: 5, y: 5750 },
                { x: 6, y: 365 },
              ]}
              innerRadius={70}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 18 }}
              x={150}
              y={150}
              text={["Rs 135000", "HOSTEL FEES"]}
            />
          </svg>
        </div>
        <div className="labels">
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#DF4A41" }}
              ></div>
              <div className="label-text">Tution Fee (per semester)</div>
            </div>
            <div className="label-right">₹1,00,000</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#E99B3B" }}
              ></div>
              <div className="label-text">
                Mess Advance <br />
                (per semester)
              </div>
            </div>
            <div className="label-right">₹12,000</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#F6D658" }}
              ></div>
              <div className="label-text">
                Caution Money <br />
                (one Time Refundable)
              </div>
            </div>
            <div className="label-right">₹9,000</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#A3D44F" }}
              ></div>
              <div className="label-text">Other fees (per semester)</div>
            </div>
            <div className="label-right">₹6350</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#5FBFE9" }}
              ></div>
              <div className="label-text">One Time Fees</div>
            </div>
            <div className="label-right">₹5750</div>
          </div>
          <div className="label">
            <div className="label-left">
              <div
                className="label-color"
                style={{ backgroundColor: "#618EA4" }}
              ></div>
              <div className="label-text">Annual Fee</div>
            </div>
            <div className="label-right">₹365</div>
          </div>
          <div className="label mt2">
            <div className="label-left">
              <div className="label-text l-spl bold">Total Fee</div>
            </div>
            <div className="label-right r-spl bold">₹ 1,33,465</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeStructure;
