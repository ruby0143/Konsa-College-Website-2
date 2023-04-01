import React, { useState, useEffect } from "react";
import "./Fee.css";
import { VictoryPie, VictoryLabel } from "victory"
import json from "../../../result.json"

function FeeStructure(props) {
  const [skel, setSkel] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if (!props.result.Fee) {
        setSkel(true);
      }
    }, 5000);

  }, []);
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
    <>
      {props.result.fees ?
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
        </div> : !skel &&  (
          <div
            role="status"
            className="w-full h-[300px] border border-gray-200 rounded shadow animate-pulse  dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-full mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
    </>
  );
}

export default FeeStructure;
