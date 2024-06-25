import React from "react";
import hamburger from "../assests/hamburger.svg";
import youtube from "../assests/youtube.png";
const Head = () => {
  return (
    <div>
      <div className="text-red-500 h-1070 w-20">
        <img alt="menu" src={hamburger} />
        <img alt="youtube-logo" src={youtube} />
      </div>
      <div>
        <input />
      </div>
    </div>
  );
};

export default Head;
