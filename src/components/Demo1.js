import React, { useState } from "react";

const Demo1 = () => {
  let [y, setY] = useState(0);
  let x = 0;
  return (
    <div className="m-4 p-2 bg-slate-400 border border-black w-96 h-96 rounded-xl ">
      <button
        className=" m-4 p-2 font-bold text-xl rounded-lg bg-white"
        onClick={() => {
          x = x + 1;
          console.log("x =", x);
        }}
      >
        Increase x
      </button>
      <span className=" font-bold  text-xl "> Let: - {x} </span>
      <button
        className=" m-4 p-2 font-bold text-xl rounded-lg bg-white"
        onClick={() => {
          setY(y + 1);
        }}
      >
        Increase y
      </button>
      <span className=" font-bold  text-xl "> State: - {y} </span>
    </div>
  );
};

export default Demo1;
