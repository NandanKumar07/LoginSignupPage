import React from "react";

const Button = ({ name, onClick, Type}) => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[250px]"
        onClick={onClick}
        type={Type}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
