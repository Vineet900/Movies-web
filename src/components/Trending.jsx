import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./tamplates/Dropdown";
import axios from "../utils/axios";
import Cards from "./tamplates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Trending = () => {
  const navigate = useNavigate();

  document.title = "MOVIES 4U | Trending";
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-fill pr-4"
          ></i>
          Trending
        </h1>
        <div className="w-[80%] flex items-center ">
          <Topnav />
          <Dropdown
            title="Category"
            option={["movies", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[3%]"></div>
          <Dropdown
            title="Duration"
            option={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasmore}
        loader={
          <h1 className="text-4xl pb-5 text-zinc-500 flex justify-center font-semibold bg-[#14131d]">
            Loading...
          </h1>
        }
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
//52:12
