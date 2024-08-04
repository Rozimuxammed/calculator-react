import React, { useState } from "react";
import { CgMathDivide, CgMathEqual } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { LuMinus } from "react-icons/lu";

function Button({ darkMode }) {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <>
      <div className="container m-auto flex flex-col gap-7 items-center justify-center">
        <input
          className={`w-[300px] h-[50px] rounded-lg bg-transparent text-2xl text-right px-3 outline-none ${
            darkMode ? "text-white" : "text-black"
          }`}
          type="text"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-9 md:gap-6 lg:gap-9 md:flex-wrap">
          <button
            onClick={handleClear}
            className="w-60 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            AC
          </button>
          <button
            onClick={() => handleClick("/")}
            className="w-14 h-14 ml-44 bg-orange-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            <CgMathDivide />
          </button>
        </div>
        <d md:gap-6 lg:gap-9iv className="grid grid-cols-4 gap-9 md:gap-6 lg:gap-9 md:flex-wrap">
          <button
            onClick={() => handleClick("7")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            9
          </button>
          <button
            onClick={() => handleClick("*")}
            className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            <HiOutlineX />
          </button>
        </d>
        <div className="grid grid-cols-4 gap-9 md:gap-6 lg:gap-9 md:flex-wrap">
          <button
            onClick={() => handleClick("4")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            6
          </button>
          <button
            onClick={() => handleClick("-")}
            className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            <LuMinus />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-9 md:gap-3 lg:gap-9 md:flex-wrap">
          <button
            onClick={() => handleClick("1")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            3
          </button>
          <button
            onClick={() => handleClick("+")}
            className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            <FaPlus />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10 md:gap-6 lg:gap-9 md:flex-wrap">
          <button
            onClick={() => handleClick("0")}
            className="w-36 h-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="w-14 h-14 ml-14 bg-gray-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            .
          </button>
          <button
            onClick={handleCalculate}
            className="w-14 h-14 ml-7 bg-orange-500 rounded-full flex items-center justify-center text-2xl text-white"
          >
            <CgMathEqual />
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
