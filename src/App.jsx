import React from "react";
import ShapeGrid from "./components/ShapeGrid";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      <div className="fixed inset-0 z-0">
        <ShapeGrid
          shape="hexagon"
          speed={0.2}
          squareSize={5}
          borderColor="#212020"
          direction="diagonal"
        />
      </div>
      <div className="w-3/5 min-h-screen relative z-10 rounded-2xl border border-zinc-800 bg-black/70 backdrop-blur-md text-white my-20">
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, molestias?</h1>
      </div>
    </div>
  );
};

export default App;
