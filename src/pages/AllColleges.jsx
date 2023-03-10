import React, { useState, useEffect, useCallback } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import CollegeContainer from "../components/HomePageComponents/InnerContainers/collegeContainer";
import CollegeSkeleton from "../components/AllColleges/Components/CollegeSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStateContext } from "../Context/useStateContext";
import ClipLoader from "react-spinners/ClipLoader";

const AllColleges = () => {
  const { setSkeleton, skeleton, loader, setLoader } = useStateContext();
  const [paginatedData, setPaginatedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [total, setTotal] = useState();

  const query = useLocation();
  // console.log("query", query);
  const limit = 12;
  const url = "https://konsa-college-backend.vercel.app";
  // const url = "http://localhost:5000";

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(event.target.value);
    const url = "https://konsa-college-backend.vercel.app/search";
    const { data } = await axios.get(url, {
      params: {
        term: value,
      },
    });
    setSearchResults(data);
    // console.log("atlas data: ", searchResults);
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  const getDataWithPagination = async () => {
    await axios
      .get(url + `/allclgs?page=1&limit=${limit}`)
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          // console.log(response?.data.total)
          setPaginatedData([...response.data.results]);
          setTotal(response?.data?.total);
          setSkeleton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMoreData = async () => {
    setLoader(true);
    const page = Math.ceil(paginatedData.length / limit) + 1;
    await axios
      .get(url + `/allclgs?page=${page}&limit=${limit}`)
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          setPaginatedData([...paginatedData, ...response.data.results]);
          // console.log(response.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataWithPagination();
    getMoreData();
  }, []);

  return (
    <>
      <div
        className="w-[full]  h-[30vh] flex flex-col justify-center items-center p-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(238, 124, 0, 0.5) -68.86%, rgba(238, 124, 0, 0) 100%)",
        }}
      >
        <div className="text-xl md:text-2xl font-semibold text-gray-700 font-roboto">
          Explore From 200+ Colleges.....
        </div>

        <div className=" relative w-[90%] md:w-[60%] lg:w-[45%]  flex flex-row justify-between items-center bg-white rounded-xl p-3 md:px-6 mt-3">
          <input
            // value={searchTerm}
            onChange={optimisedVersion}
            className="placeholder:text-xl w-[80%] font-roboto focus:outline-none text-gray-600 text-xl"
            placeholder="Search your Colleges....."
          ></input>
          <span>
            <img
              className="w-[23px] h-[23px]"
              src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/Vector.png"
            ></img>
          </span>
        </div>
        <div
          className={` ${
            searchTerm !== "" ? "inline-flex" : "hidden"
          } w-[90%] md:w-[60%] lg:w-[45%] z-30 relative desk:top-[-35px] mob:top-[-30px]`}
        >
          {/* <div className="absolute rounded-md max-h-[300px] w-full overflow-y-scroll overflow-x-hidden bg-white shadow-md mt-8 md:mt-10 transition-all duration-300">
            {searchResults?.map((college, index) => {
              return (
                <Link
                  key={index}
                  to={`/college/${college.college_uuid}`}
                  className="text-gray-800 md:cursor-pointer block font-medium text-sm md:text-base px-6 py-2 shadow-sm hover:bg-slate-100"
                >
                  {college.college_name}
                </Link>
              );
            })}
          </div> */}
        </div>
      </div>
      <div className="mb-[50px]">
        {skeleton ? (
          <div className="w-full p-6 flex justify-center flex-col items-center">
            <div className="grid grid-cols-1 gap-10  xs:grid-cols-2  sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
              <CollegeSkeleton />
              <CollegeSkeleton />
              <CollegeSkeleton />
              <CollegeSkeleton />
              <CollegeSkeleton />
              <CollegeSkeleton />
              <CollegeSkeleton />
              <CollegeSkeleton />
            </div>
          </div>
        ) : (
          <>
            {searchTerm.length ? (
              <div className="w-full p-6 flex justify-center flex-col items-center">
                <div className="grid grid-cols-1 gap-10  xs:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
                  {searchResults.map((college) => {
                    return (
                      <CollegeContainer
                        key={college.college_uuid}
                        collegeName={college.college_name}
                        collegeLogo={college.college_logo_link}
                        collegeBanner={college.header_photo_link}
                        collegeId={college.college_uuid}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <InfiniteScroll
                dataLength={paginatedData.length}
                next={getMoreData}
                hasMore={paginatedData.length < total}
              >
                <div className="w-full p-6 flex justify-center flex-col items-center">
                  <div className="grid grid-cols-1 gap-12  xs:grid-cols-2  sm:grid-cols-2   lg:grid-cols-3  xl:grid-cols-4">
                    {paginatedData?.map((college) => {
                      return (
                        <>
                          <CollegeContainer
                            key={college.college_uuid}
                            collegeName={college.college_name}
                            collegeLogo={college.college_logo_link}
                            collegeBanner={college.header_photo_link}
                            collegeId={college.college_uuid}
                          />
                        </>
                      );
                    })}
                  </div>
                  {loader ? (
                    <div className="w-full flex justify-center items-center h-[200px]">
                      <ClipLoader
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  ) : null}
                </div>
              </InfiniteScroll>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AllColleges;
