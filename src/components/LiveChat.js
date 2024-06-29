import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: "Ashish Kumar Pal",
          message: " lorem text  ",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className=" w-full h-[600px] ml-1 p-1 border border-black bg-slate-100 rounded-2xl ">
      <ChatMessage
        name="Ashish Pal"
        message="Nice a way explaning the redux and useState"
      />
    </div>
  );
};

export default LiveChat;
