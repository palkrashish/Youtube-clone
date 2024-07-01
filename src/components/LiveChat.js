import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: " lorem text  ",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-full h-[600px] ml-1 p-1 border border-black bg-slate-100 rounded-2xl overflow-y-scroll ">
        {chatMessage.map((c, index) =>(
            <ChatMessage key={index} name={c.name} message={c.message} />
        )
        )}
      </div>
    </>
  );
};

export default LiveChat;
