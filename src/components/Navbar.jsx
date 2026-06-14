import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="w-full sm:w-4/5 lg:w-3/5 relative z-20 rounded-xl border border-zinc-800 bg-black/40 text-white p-2 px-6 flex items-center justify-between mt-4">
      <a href="#home" className="tracking-widest font-semibold">ACE.</a>
      <div className="flex flex-row gap-5 items-center">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#achievements" className="hover:underline">Achievements</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button><IoSunnyOutline size={22} className="font-bold"/></button>
      </div>
    </div>
  );
};

export default Navbar;
