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
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Konsacollege - All Colleges</title>
        <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.konsacollege.com" />
        <meta property="og:site_name"
          content="Konsacollege - All Colleges" />
        <meta property="og:image"
          content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
        <meta property="og:determiner" content="..." />
        <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
        <meta name="twitter:image"
          content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
        <meta name="twitter:image:alt"
          content="Konsa College Logo" />
        <meta property="twitter:url" content="https://www.konsacollege.com" />
        <meta property="twitter:site" content="@konsacollege" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />
      </Helmet>
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
            id="searchbar"
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
          className={` ${searchTerm !== "" ? "inline-flex" : "hidden"
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
