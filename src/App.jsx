import React from "react";
import ShapeGrid from "./components/ShapeGrid";
import HeroDarkImg from "./components/HeroDarkImg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="absolute min-h-screen bg-black flex items-center justify-center">
      <div className="fixed inset-0 z-0">
        <ShapeGrid
          shape="hexagon"
          speed={0.2}
          squareSize={5}
          borderColor="#212020"
          direction="diagonal"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 p-2">
        <Navbar />

        <div className="w-3/5 min-h-screen relative z-10 rounded-2xl border border-zinc-800 bg-black/45 text-white">
          <HeroDarkImg />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
