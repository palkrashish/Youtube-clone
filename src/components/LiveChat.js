import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setliveMessage] = useState("");
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
      <form
        className="w-full p-2 ml-2 mt-1 border border-black"
        onSubmit={(e) => {
          console.log("onSubmit", liveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ashish",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-90 px-2 mt-2 p-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setliveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2  bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
