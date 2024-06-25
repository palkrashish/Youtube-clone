import React from "react";
import hamburger from "../assests/hamburger.svg";
import youtube from "../assests/youtube.png";
import profile from "../assests/profile.png";
const Head = () => {
  return (
    <div className=" grid grid-flow-col p-5 m-1 shadow-lg ">
      <div className="flex col-span-1 ">
        <img className=" h-12 " alt="menu" src={hamburger} />
        <img className=" h-12 mx-3 " alt="youtube-logo" src={youtube} />
      </div>
      <div className=" col-span-10 ">
        <input className="w-1/2 text-center border border-gray-600 p-2 rounded-l-full " type="text"  />
        <button className=" border border-gray-500 px-7 py-2 rounded-r-full bg-gray-100 " >🔍</button>
      </div>
      <div className="h-10 w-10 col-span-1 ">
        <img alt="user-icon" src={profile} />
      </div>
    </div>
  );
};

export default Head;
