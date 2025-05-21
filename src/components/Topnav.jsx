import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const Getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    Getsearches();
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto  items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className=" text-zinc-400 text-3xl ri-close-fill right-0"
        ></i>
      )}

      <div className="z-[100] absolute w-[50%] max-h-[50vh] top-[100%] left-[5%] bg-zinc-100 overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
          to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-200 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-200"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.orignal_name || s.orignal_title}
            </span>
          </Link>
        ))}
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-200 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-200">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;

//52:46
