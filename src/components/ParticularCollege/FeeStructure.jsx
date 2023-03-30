import React, { useState, useEffect } from "react";
import "./Fee.css";
import { VictoryPie, VictoryLabel } from "victory"
import json from "../../../result.json"

function FeeStructure(props) {
  const [fee, setFee] = useState([])
  const [totalValue, setTotalValue] = useState([])
  // const collegeName = props.result.college_name
  // // console.log(collegeName)
  // const feeArray = []
  // json.map((data)=>{
  //   const feeData = Object.keys(data);
  //   feeArray.push(...feeData)
  // })
  // const feeData = []
  // feeArray.map((feeCollege)=>{
  //   feeData.push(feeCollege)
  // })
  // feeData.map((data)=>{
  //   if(data === collegeName){
  //     json.map((clgData)=>{
  //       console.log(clgData)
  //     })
  //   }
  // })


  const colors = [
    "#DF4A41",
    "#E99B3B",
    "#F6D658",
    "#A3D44F",
    "#5FBFE9",
    "#618EA4",
  ];

  const abc = () => {
    return json.fees.map((j, i) => ({
      x: i + 1,
      y: parseInt(Object.values(j)[0]),
    }));
  };

  console.log(abc());

  const totalAmount = abc().pop()
  console.log(totalAmount)

  let xyz = () => {
    return json.fees.map((j, i) => {
      return { x: Object.keys(j)[0], y: parseInt(Object.values(j)[0]), z: colors[i % colors.length] }
    })
  }


  useEffect(() => {
    setFee(abc());
    setTotalValue(xyz())
  }, []);


  return (
    <div className="flex">
      <div className="container">
        <div className="text-xl my-3 font-bold text-[#303030]">Fee Structure</div>
        <hr />
        <div className="college-fee">
          <div className="text-md my-3 mt-5 font-semibold text-[#303030] text-[17px] md:-mb-[2rem]">College Fees</div>
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
                  data={
                    fee.map((data) => {
                      return data
                    }).slice(0, -1)
                    // { x: 1, y: 100000 },
                    // { x: 2, y: 12000 },
                    // { x: 3, y: 9000 },
                    // { x: 4, y: 6350 },
                    // { x: 5, y: 5750 },
                    // { x: 6, y: 365 },
                  }
                  innerRadius={70}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 16, color: "#787878", fontFamily: "inherit", fontWeight: 500, fill: "#787878", padding: "0 3rem" }}
                  x={150}
                  y={150}
                  text={[`₹${totalAmount.y}`, "COLLEGE FEES"]}
                />
              </svg>
            </div>
            <div className="labels md:w-[60%]">
              {totalValue.map((value, i) => {
                const isLast = i === totalValue.length - 1;
                return (<>

                  <div className={`label justify-between ${isLast ? 'last-label' : ''}`}>
                    <div className="flex justify-start w-[70%]">
                      <div className="label-color w-5 h-5 rounded-full p-2"
                        style={{ backgroundColor: value.z }}></div>
                      <div className="label-text">{value.x}</div>
                    </div>
                    <div className="label-right w-[20%]">₹{value.y}</div>
                  </div>
                </>)

              })}
              {/* <div className="label">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeeStructure;
