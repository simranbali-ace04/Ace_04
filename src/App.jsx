import React from "react";
import ShapeGrid from "./components/ShapeGrid";
import HeroDarkImg from "./components/HeroDarkImg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Quote from "./components/Quote";
import GithubGraph from "./components/GithubGraph";
import Contact from "./components/Contact";
import { useTheme } from "./ThemeContext";
import HeroLightImg from "./components/HeroLightImg";

const App = () => {
  const { isDark } = useTheme();
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      <div className="fixed inset-0 z-0 bg-white dark:bg-black">
        <ShapeGrid
          shape="hexagon"
          speed={0.2}
          squareSize={5}
          borderColor={isDark ? "#212020" : "#EFDDE0"}
          direction="diagonal"
        />
      </div>
      <div
        id="#home"
        className="relative z-10 flex flex-col justify-center items-center gap-5 p-2 min-h-screen"
      >
        <Navbar />
        <div className="w-full sm:w-4/5 lg:w-3/5 rounded-2xl border border-zinc-400 dark:border-zinc-800 bg-zinc-50/20 dark:bg-black/45 backdrop-blur-xs overflow-hidden">
          <div className="relative w-full h-32 sm:h-48 md:h-64">
            <div
              className={`absolute inset-0 w-full h-full transition-opacity ease-in-out ${
                isDark ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <HeroLightImg />
            </div>

            <div
              className={`absolute inset-0 w-full h-full transition-opacity ease-in-out ${
                isDark ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <HeroDarkImg />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Skills />
            <Quote />
            <GithubGraph />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
