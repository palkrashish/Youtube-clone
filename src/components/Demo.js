import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  // console.log("Rendering");
  const [isDarkTheme, setIsDarkTheme] = useState("false");

  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div>
      <div
        className={
          "m-4 p-2 w-96 h-96 border border-black rounded-xl " +
          (isDarkTheme && " bg-gray-400 text-white")
        }
      >
        <button
          className="m-10 p-2 bg-zinc-600 rounded-xl  "
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          Toggle
        </button>
        <input
          className="border border-black w-72 px-2 text-black "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1 className="mt-4 font-bold text-xl"> nth:{prime} </h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
