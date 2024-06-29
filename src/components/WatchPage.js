import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentConainer from "./CommentConainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const params = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" flex flex-col">
      <div className="px-2 mt-2 rounded-lg flex ">
        <div>
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-1 w-full">
          <LiveChat />
        </div>
      </div>
      {/* Comment container here */}
      <CommentConainer />
    </div>
  );
};

export default WatchPage;
