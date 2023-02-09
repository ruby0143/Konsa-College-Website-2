import React, { useEffect, useState } from "react";
import axios from "axios";

function RightNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://konsa-college-backend-production-0c4c.up.railway.app/news")
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

  function zuluToLongDate(zuluTime) {
    const date = new Date(zuluTime);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="newsFeeds mt-[3rem]">
      <h2 className=" text-[#303030] text-[18px] m-3 -ml-0 font-semibold">
        News Feeds
      </h2>
      <div className="px-2">
        <hr />
      </div>
      <div className="flex-row mt-[1.4rem] ">
        {news?.map((newsItem, idx) => {
          if (idx < 4) {
            return (
              <div>
                <a href={newsItem.link_to_article}>
                  <div className="flex justify-start mb-5">
                    <img
                      src={newsItem.icon}
                      alt=""
                      className="w-[4rem] h-[4rem]"
                    />
                    <div className="content flex-col ml-3">
                      <p className="font-bold text-[#363636] mb-2 text-[12px]">
                        {newsItem.heading_text}
                      </p>
                      <span className="text-[#A7A7A7] tracking-wide text-[11px]">
                        {zuluToLongDate(newsItem.date)}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default RightNews;
