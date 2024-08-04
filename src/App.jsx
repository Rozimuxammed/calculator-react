import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full h-screen flex flex-col gap-5 justify-center items-center ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {darkMode ? (
        <IoSunny className="size-9 cursor-pointer text-white" onClick={toggleDarkMode} />
      ) : (
        <IoMoon className="size-9 cursor-pointer" onClick={toggleDarkMode} />
      )}
      <form
        onSubmit={handleSubmit}
        className={`w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-4/5 border-2 rounded-2xl p-5 md:p-10 lg:p-20 ${darkMode ? "border-white" : "border-black"}`}
      >
        <Button darkMode={darkMode} />
      </form>
    </div>
  );
}
