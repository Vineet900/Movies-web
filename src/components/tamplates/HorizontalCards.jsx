import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] mr-5 mb-5 bg-zinc-900 h-[36vh] rounded-md overflow-hidden"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="text-white p-3 h-[45%] overflow-y-auto">
              <h1 className=" text-xl font-semibold ">
                {d.title || d.orignal_name || d.orignal_title}
              </h1>
              <p className=" ">
                {d.overview?.slice(0, 50)} ...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 text-white font-black text-center">
          Nothing to Show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;

//2:15:22
//30:16 part-3
