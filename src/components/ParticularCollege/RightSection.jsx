import React,{useState,useEffect} from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

function RightSection(props) {
  const [phone, setPhone] = useState();
  const postPhone = () => {
    const doc = {
      name: "",
      phone: phone,
    };

    axios
      .post("https://konsa-college-backend-production-0c4c.up.railway.app/phone", doc)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-row px-10">
      <div className="newsFeeds mt-[3rem]">
        <h2 className=" text-[#303030] text-[18px] m-3 -ml-0 font-semibold">
          News Feeds
        </h2>
        <hr />
        <div className="flex-row mt-[1.4rem] ">
          {props.news?.map((newsItem, idx) => {
            if (idx < 4) {
              return (
                <a href={newsItem.link_to_article}>
                  <div className="flex justify-between mb-8">
                    <img src={newsItem.icon} alt="" />
                    <div className="content flex-col ml-3">
                      <p className="font-bold text-[#363636] mb-2 text-[16px]">
                        {newsItem.heading_text}
                      </p>
                      <span className="text-[#A7A7A7] tracking-wide">
                        {newsItem.date}
                      </span>
                    </div>
                  </div>
                </a>
              );
            }
          })}
        </div>
      </div>
      <div className="flex-col md:inline-block hidden">
        <div
          className="dontMiss mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
            bordeRadius: "10px",
          }}
        >
          <h2 className=" text-[#303030] text-md m-3 font-semibold">
            Don't Miss This
          </h2>
          <hr />
          {props.counselling?.map((counsel, idx) => {
            if (idx < 4) {
              return (
                <a href={counsel.apply_link}>
                  <div className="flex justify-between px-4 py-6">
                    <h2 className="">{counsel.exam_name}</h2>
                    <button className="bg-[#EE7C00] text-white rounded-[46px] px-[2rem]">
                      Fill Now
                    </button>
                  </div>
                </a>
              );
            }
          })}
        </div>
        <div
          className="explore mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
            bordeRadius: "10px",
          }}
        >
          <h2 className=" text-[#303030] text-md m-3 font-semibold">
            Exams To Explore
          </h2>
          <hr />
          <div className="flex-col">
            {props.exams?.map((exam, idx) => {
              if (idx < 4) {
                return (
                  <a href={exam.apply_link}>
                    <div className="flex">
                      <img
                        className="w-[30px] md:w-[100px] md:h-[80px]"
                        src={exam.img}
                        alt=""
                      />
                      <div className="content flex-col">
                        <p>{exam.exam_name}</p>
                      </div>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="flex-col md:inline-block hidden">
        <div
          className="dontMiss mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
            bordeRadius: "10px",
          }}
        >
          <h2 className=" text-[#303030] text-md m-3 font-semibold">
            Related Colleges
          </h2>
          <hr />
          <div className="flex justify-between px-4 py-6">
            <img src="" alt="" />
            <p>Indian Institute of Technology Delhi</p>
          </div>
        </div>
        <div
          className="subscribe mt-[3rem] md:mx-[1.5rem] md:mt-[5rem]"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
            bordeRadius: "10px",
          }}
        >
          <h3 className="text-center py-5 text-[18px] font-semibold">
            Subscribe to Our Newsletter
          </h3>
          <div
            style={{ boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.1)" }}
            className="flex justify-between"
          >
            <input
              type="text"
              placeholder="Please enter your Mobile No."
              className="p-3 bg-[#F5F5F5] w-[80%]"
              onChange={e=>{
                setPhone(e.target.value);
              }}
              value={phone}
            />
            <AiOutlineArrowRight className="w-20% h-6 w-6 m-3" onClick={postPhone}></AiOutlineArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
