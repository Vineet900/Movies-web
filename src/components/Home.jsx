import React, { useEffect, useState } from "react";
import Sidenav from "./tamplates/Sidenav";
import Topnav from "./Topnav";
import axios from "../utils/axios";
import Header from "./tamplates/Header";
import HorizontalCards from "./tamplates/HorizontalCards";
import Dropdown from "./tamplates/Dropdown";
import Loading from "./Loading";

function Home() {
  document.title = "MOVIES 4U | HOMEPAGE";

  const [wallpapper, setwalpapper] = useState(null);
  const [Trending, setTrending] = useState(null);
  const [category, setcategory] = useState("all");

  const GetHeaderwalpapper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwalpapper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpapper && GetHeaderwalpapper();
  }, [category]);
  // console.log(Trending);

  return wallpapper && Trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-screen overflow-auto overflow-x-auto">
        <Topnav />
        <Header data={wallpapper} />

        <div className="p-5 flex justify-between">
          <h1 className=" text-3xl text-zinc-400 font-semibold">Trending</h1>

          <Dropdown
            title="filter"
            option={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={Trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
//12:55
