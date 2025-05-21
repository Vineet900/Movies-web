import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./Dropdown";
import Topnav from "../Topnav";
import Loading from "../Loading";
import Cards from "./Cards";

const Popular = () => {
  document.title = "MOVIES 4U | Popular";
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-fill pr-4"
          ></i>
          Popular
        </h1>
        <div className="w-[80%] flex items-center ">
          <Topnav />
          <Dropdown
            title="Category"
            option={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[3%]"></div>
          {/* <Dropdown
            title="Duration"
            option={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          /> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasmore}
        loader={
          <h1 className="text-4xl pb-5 text-zinc-500 flex justify-center font-semibold bg-[#14131d]">
            Loading...
          </h1>
        }
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
//1:04:42
