import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sm:w-4/5 lg:w-3/5 relative z-20 rounded-xl border border-zinc-400 dark:border-zinc-800 bg-zinc-50/80 dark:bg-black/40 text-slate-800 dark:text-white p-2 px-6 flex flex-wrap items-center justify-between mt-4">
      <a href="#home" className="tracking-widest font-semibold">ACE.</a>

      <div className="hidden sm:flex flex-row gap-5 items-center">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#achievements" className="hover:underline">Achievements</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <button onClick={toggleTheme}
          className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <FiMoon size={22} className="font-bold" />
          ) : (
            <IoSunnyOutline size={22} className="font-bold" />
          )}
        </button>
      </div>

      <div className="sm:hidden flex items-center gap-3">
        <button onClick={toggleTheme}
          className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <FiMoon size={22} className="font-bold" />
          ) : (
            <IoSunnyOutline size={22} className="font-bold" />
          )}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        className={`sm:hidden overflow-hidden w-full ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 pt-4 pb-3 border-t border-zinc-400 dark:border-zinc-800 mt-3">
          <a href="#projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#achievements" className="hover:underline" onClick={() => setIsOpen(false)}>Achievements</a>
          <a href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
