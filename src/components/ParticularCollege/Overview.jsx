import React from 'react'

function Overview(props) {

  return (
    <>
      <div className="flex-row">
        {props.result.overview && <div className="overview mt-[3rem]">
          <h2 className="text-[#303030] text-xl my-3 font-bold">Overview</h2>
          <hr />
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
          <div className="mt-[1.4rem]">
            <p className="text-[14px] leading-[17px] md:leading-[20px] text-[#3A3A3A] md:tracking-[1.4px]">
              {props.result.overview}
            </p>
            <div className="flex-col mt-[2rem] justify-around align-middle">
              <div className="flex items-center justify-around md:justify-start">
                {/* ranking  */}
                <div className="nirf flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-around min-w-[150px] shadow-[1px_1px_6px_rgba(0,0,0,0.07)] hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.07)] md:mr-[4rem]">
                  <img
                    src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/NIRF.png"
                    alt="NIRF logo"
                    className="h-[32.31px]"
                  />
                  <div className="rank">
                    <p className="text-[14px] text-[#2E2E2E] text-center font-semibold">
                      {props.result.nirf}
                    </p>
                    <p className="text-[12px] text-[#434343] text-center">
                      NIRF Ranking
                    </p>
                  </div>
                </div>
                {/* campus area  */}
                <div className="area flex bg-[#FCFCFC] rounded-[3.85464px] p-2 items-center justify-evenly min-w-[150px] shadow-[1px_1px_6px_rgba(0,0,0,0.07)] hover:shadow-[3px_3px_5px_0px_rgba(0,0,0,0.07)]">
                  <img
                    src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/features/Area.png"
                    alt="Area logo"
                    className="h-[32.31px]"
                  />
                  <div className="campusArea">
                    <p className="text-[14px] text-[#2E2E2E] text-center font-semibold">
                      {props.result.college_campus_area
                        ? props.result.college_campus_area
                        : `696 Acres`}
                    </p>
                    <p className="text-[14px] text-[#2E2E2E] text-center">
                      Campus Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>}

        {/* Qualifying exams  */}
        {(props.result.exams || props.result.mode_of_admission) && (
          <>
            <div className="my-[2rem]">
              <h2 className="text-[#303030] text-[15px] font-semibold mb-[1.2rem]">
                Qualifying Exams
              </h2>
              <div
                className="flex whitespace-nowrap"
                style={{
                  overflowX: "auto",
                }}
              >
                {props.result.exams?.map((exam, index) => {
                  return (
                    <div
                      id={index}
                      className="rounded-md mr-4 border-[1px] border-[rgba(233,233,233,1)] px-4 py-[.2rem] text-center text-[#2E2E2E] text-[14px]"
                      style={{
                        background:
                          "linear-gradient(99.71deg, #F8F8F8 -20.28%, rgba(240, 240, 240, 0) 131.37%)",
                        filter: "drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.08))",
                        borderRadius: "5px",
                      }}
                    >
                      {exam}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* mode of admission  */}
            <div className="mt-[2rem]">
              <h2 className="text-[#303030] text-[15px] font-semibold mb-[1.2rem]">
                Mode Of Admission
              </h2>
              <div className="flex whitespace-nowrap" style={{ overflowX: "auto" }}>
                {props.result.mode_of_admission?.map((exam, index) => {
                  return (
                    <div
                      id={index}
                      className="rounded-md mr-4 border-[1px] border-[rgba(233,233,233,1)] px-4 py-[.2rem] text-center text-[#2E2E2E] text-[14px]"
                      style={{
                        background:
                          "linear-gradient(99.71deg, #F8F8F8 -20.28%, rgba(240, 240, 240, 0) 131.37%)",
                        filter: "drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.08))",
                        borderRadius: "5px",
                      }}
                    >
                      {exam}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Overview