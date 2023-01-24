import React from "react";
import "./Fee.css";
import { VictoryPie, VictoryLabel } from "victory";

function FeeStructure() {
  return (
    <div className="container md:max-w-[60%] md:mx-[3rem] md:my-[5rem]">
      <div className="text-xl m-3 font-semibold text-[#303030]">Fee Structure</div>
      <hr />
      <div className="college-fee">
        <div className="text-md m-3 mt-5 font-semibold text-[#303030] text-[17px] md:-mb-[2rem]">College Fees</div>
        <div className="md:flex md:items-center">
          <div className="chart -mt-[3rem] md:inline-block">
            <svg width={320} height={280} className="chart-style">
              <VictoryPie
                standalone={false}
                width={310}
                height={310}
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
                style={{ fontSize: 16, color: "#787878", fontFamily: "inherit", fontWeight: 500, fill: "#787878", padding: "0 3rem" }}
                x={150}
                y={150}
                text={["₹ 1,33,465", "COLLEGE FEES"]}
              />
            </svg>
          </div>
          <div className="labels md:w-[60%]">
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#DF4A41" }}
                ></div>
                <div className="label-text">Tution Fee (per semester)</div>
              </div>
              <div className="label-right">₹ 1,00,000</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#E99B3B" }}
                ></div>
                <div className="label-text">
                  Mess Advance (per semester)
                </div>
              </div>
              <div className="label-right">₹ 12,000</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#F6D658" }}
                ></div>
                <div className="label-text">
                  Caution Money (one Time Refundable)
                </div>
              </div>
              <div className="label-right">₹ 9,000</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#A3D44F" }}
                ></div>
                <div className="label-text">Other fees (per semester)</div>
              </div>
              <div className="label-right">₹ 6,350</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#5FBFE9" }}
                ></div>
                <div className="label-text">One Time Fees</div>
              </div>
              <div className="label-right">₹ 5,750</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#618EA4" }}
                ></div>
                <div className="label-text">Annual Fee</div>
              </div>
              <div className="label-right">₹ 365</div>
            </div>
            <div className="label my-[1.5rem]">
              <div className="label-left">
                <div className="bold text-[14px] text-[#303030] mt-[.2rem]">Total Amount</div>
              </div>
              <div className="bold text-[14px] text-[#303030]">₹ 1,33,465</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hostel-fee mt-[3rem]">
        <div className="text-md m-3 mt-5 md:-mb-[2rem] font-semibold text-[#303030] text-[17px]">Hostel Fees</div>
        <div className="md:flex md:items-center">
          <div className="chart -mt-[3rem] md:inline-block">
            <svg width={320} height={280} className="chart-style">
              <VictoryPie
                standalone={false}
                width={300}
                height={310}
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
                style={{ fontSize: 16, color: "#787878", fontFamily: "inherit", fontWeight: 500, fill: "#787878", padding: "0 3rem" }}
                x={150}
                y={150}
                text={["₹ 1,33,465", "HOSTEL FEES"]}
              />
            </svg>
          </div>
          <div className="labels md:w-[60%]">
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#DF4A41" }}
                ></div>
                <div className="label-text">Tution Fee (per semester)</div>
              </div>
              <div className="label-right">₹ 1,00,000</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#E99B3B" }}
                ></div>
                <div className="label-text">
                  Mess Advance (per semester)
                </div>
              </div>
              <div className="label-right">₹ 12,000</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#F6D658" }}
                ></div>
                <div className="label-text">
                  Caution Money (one Time Refundable)
                </div>
              </div>
              <div className="label-right">₹ 9,000</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#A3D44F" }}
                ></div>
                <div className="label-text">Other fees (per semester)</div>
              </div>
              <div className="label-right">₹ 6,350</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#5FBFE9" }}
                ></div>
                <div className="label-text">One Time Fees</div>
              </div>
              <div className="label-right">₹ 5,750</div>
            </div>
            <div className="label">
              <div className="label-left">
                <div
                  className="label-color"
                  style={{ backgroundColor: "#618EA4" }}
                ></div>
                <div className="label-text">Annual Fee</div>
              </div>
              <div className="label-right">₹ 365</div>
            </div>
            <div className="label my-[1.5rem]">
              <div className="label-left">
                <div className="bold text-[14px] text-[#303030] mt-[.2rem]">Total Amount</div>
              </div>
              <div className="bold text-[14px] text-[#303030]">₹ 1,33,465</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeStructure;
