import React, { useEffect, useRef, useState } from "react";

const Demo1 = () => {
  let [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);
  //   console.log(ref);
  const i = useRef()
  useEffect(() => {
    i.current = setInterval(() => {
    //   console.log("Namaste", Math.floor(Math.random() * 100) + 1);
    }, 2000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="m-4 p-2 bg-slate-400 border border-black w-96 h-96 rounded-xl ">
      <button
        className=" m-4 p-2 font-bold text-xl rounded-lg bg-white"
        onClick={() => {
          x = x + 1;
        //   console.log("x =", x);
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
      <hr />
      <hr />
      <hr />
      <hr />

      <button
        className=" m-4 p-2 font-bold text-xl rounded-lg bg-white"
        onClick={() => {
          ref.current = ref.current + 1;
        //   console.log(ref);
        }}
      >
        Increase Ref
      </button>
      <span className=" font-bold  text-xl "> Ref: - {ref.current} </span>
      <div>
        <button
          className="bg-red-800 m-4 p-2 text-white font-bold rounded-lg "
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          Stop Priniting
        </button>
      </div>
    </div>
  );
};

export default Demo1;
