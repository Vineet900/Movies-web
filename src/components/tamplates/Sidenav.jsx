import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="ri-tv-fill text-[#6556cd] text-2xl mr-2"></i>
        <span className="text-2xl">MOVIES 4U</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-slideshow-4-fill"></i> Tv shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-team-fill"></i> Peoples
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link to="/about" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-information-fill"></i> About
        </Link>
        <Link to="/contact" className="hover:bg-[#6556cd] hover:text-white duration-300 p-5 rounded-lg">
          <i className="mr-2 ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
//30:44
