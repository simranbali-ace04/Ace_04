import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "../ThemeContext";
const Navbar = () => {

  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="w-full sm:w-4/5 lg:w-3/5 relative z-20 rounded-xl border border-zinc-400 dark:border-zinc-800 bg-zinc-50/80 dark:bg-black/40 text-slate-800 dark:text-white p-2 px-6 flex items-center justify-between mt-4 transition-colors duration-300" style={{ willChange: 'background-color, border-color' }}>
      <a href="#home" className="tracking-widest font-semibold">ACE.</a>
      <div className="flex flex-row gap-5 items-center">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#achievements" className="hover:underline">Achievements</a>
        <a href="#contact" className="hover:underline">Contact</a>

        <button onClick={toggleTheme} 
          className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
          aria-label="Toggle theme"
          >
          { isDark ? (
            <FiMoon size={22} className="font-bold"/>
          ) : (
            <IoSunnyOutline size={22} className="font-bold" />
          )}
          </button>
      </div>
    </div>
  );
};

export default Navbar;
