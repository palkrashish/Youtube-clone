import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-full h-[600px] ml-1 p-1 border border-black bg-slate-100 rounded-2xl overflow-y-scroll flex flex-col-reverse ">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <div className="w-full p-2 ml-2 mt-0 border border-black ">
        <input className="w-90" type="text" />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </div>
    </>
  );
};

export default LiveChat;
