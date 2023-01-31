import React, { useState, useEffect } from "react";
import axios from "axios";

function Newsletters() {
  const [News, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/news")
      .then((response) => {
        if (response.status !== 500) {
          setNews(response.data);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mb-6 sm:p-10 flex flex-col justify-center items-center">
      <h2 className="my-6 text-[20px] font-semibold text-center text-[#303030] sm:text-[1.5rem]">
        Newsletters
      </h2>
      {News.map((newsItem) => {
        return (
          <a href={newsItem.link_to_article}>
            <div
              className="box m-auto mx-3 flex px-5 py-2 mb-6 sm:py-4 sm:px-8 justify-center max-w-[850px]"
              style={{
                boxShadow: "1px 2px 6px 1px rgba(0, 0, 0, 0.13)",
                borderRadius: "5px",
              }}
            >
              <img src={newsItem.icon} alt="" className="w-10 h-10" />
              <div className="content flex-col ml-3">
                <h3 className="text-[14px] font-semibold leading-4 mb-1 sm:text-[16px]">
                  {newsItem.heading_text}
                </h3>
                <h4 className="text-[#646464] text-[12px] leading-4 mb-2 sm:text-[14px]">
                  {newsItem.sub_heading_text}
                </h4>
                <div className="bottom flex justify-between">
                  <p className="date text-[#747474] text-[12px] sm:text-[14px]">
                    {newsItem.date}
                  </p>
                  <div className="more flex w-[75px] sm:w-[90px] justify-between sm:justify-around">
                    <p className="text-[12px] font-semibold sm:text-[14px]">
                      Read more
                    </p>
                    <img
                      src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/icons/right.png"
                      alt=""
                      className="h-[10px] w-[10px] mt-[5px] sm:mt-[6.5px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Newsletters;
