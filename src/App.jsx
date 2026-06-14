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

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        <ShapeGrid
          shape="hexagon"
          speed={0.2}
          squareSize={5}
          borderColor="#212020"
          direction="diagonal"
        />
      </div>
      <div id="#home" className="relative z-10 flex flex-col justify-center items-center gap-5 p-2 min-h-screen">
        <Navbar />
        <div className="w-full sm:w-4/5 lg:w-3/5 rounded-2xl border border-zinc-800 bg-black/45 text-white">
          <HeroDarkImg />
          <div className="flex flex-col gap-3">
          <Hero />
          <About />
          <Projects />
          <Achievements />
          <Skills />
          <Quote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
