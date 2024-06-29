import React from "react";
import usercomment from "../assests/usercomment.svg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8 m-2 " alt="userlog" src={usercomment} />
      <span className="font-bold px-2 text-sm">{name}</span>
      <span className=" font-mono text-xs ">{message}</span>
    </div>
  );
};

export default ChatMessage;
