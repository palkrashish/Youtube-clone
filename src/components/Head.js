import React, { useEffect, useState } from "react";
import hamburger from "../assests/hamburger.svg";
import youtube from "../assests/youtube.png";
import profile from "../assests/profile.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { json } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [susggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      youtubeSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const youtubeSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    console.log(searchQuery);

    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };
  const dispath = useDispatch("");
  const toggleMenuHandler = () => {
    dispath(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 m-1 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-12 cursor-pointer "
          alt="menu"
          src={hamburger}
        />
        <a href="">
          <img className=" h-12 mx-3 " alt="youtube-logo" src={youtube} />
        </a>
      </div>
      <div className=" col-span-10 px-10 ">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full  "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className=" border border-gray-500 px-7 py-2 rounded-r-full bg-gray-100 ">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className=" absolute z-10 bg-white py-2 px-2 w-[27rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {susggestions.map((s) => (
                <li key={s} className=" py-2 px-3 shadow-sm hover:bg-gray-400  ">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" col-span-1 ">
        <img className="h-10" alt="user-icon" src={profile} />
      </div>
    </div>
  );
};

export default Head;
