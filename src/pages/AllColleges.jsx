import React, { useState, useEffect } from "react";
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
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const query = useLocation();
  // console.log("query", query);
  const PORT = 5000;
  const limit = 12;
  const url = "https://konsa-college-backend.vercel.app";

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    (async () => {
      const url = "https://konsa-college-backend.vercel.app/search";
      const { data } = await axios.get(url, {
        params: {
          term: searchTerm,
        },
      });

      setSearchResults(data);
    })();

    console.log("atlas data: ", searchResults);
  }, [searchTerm]);

  const getData = async () => {
    await axios
      .get(url + "/allcolleges")
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          setResult(response.data);
          setSkeleton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataWithPagination = async () => {
    await axios
      .get(url + `/allclgs?page=1&limit=${limit}`)
      .then((response) => {
        if (response.status === 500) {
          console.log("College Not Found!");
        } else {
          setPaginatedData([...response.data.results]);
          setSkeleton(false);
          // if(result.length>50){setLoader(false)}
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
          if (result.length > 50) {
            setLoader(false);
            console.log(loader);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataWithPagination();
    getMoreData();
    getData();
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
                hasMore={paginatedData.length < result.length}
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
