import React from "react";

const Button = ({ name }) => {
  return (
    <div >
      <button className="px-8 py-2 m-2 bg-gray-500 text-white rounded-xl">
        {name}
      </button>
    </div>
  );
};

export default Button;
