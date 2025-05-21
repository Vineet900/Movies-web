import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./Dropdown";
import Topnav from "../Topnav";
import Loading from "../Loading";
import Cards from "./Cards";

const Movie = () => {
  document.title = "MOVIES 4U | Movies";
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return movie.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl  font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-fill pr-4"
          ></i>
          Movie<small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="w-[80%] flex items-center ">
          <Topnav />
          <Dropdown
            title="Category"
            option={["popular" , "top_rated" , "upcoming" , "now_playing"]}
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
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasmore}
        loader={
          <h1 className="text-4xl pb-5 text-zinc-500 flex justify-center font-semibold bg-[#14131d]">
            Loading...
          </h1>
        }
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
//1:11:06
