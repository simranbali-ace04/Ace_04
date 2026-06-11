import React from "react";
import ShapeGrid from "./components/ShapeGrid";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black">
  <div className="fixed inset-0 z-0">
    <ShapeGrid
      shape="hexagon"
      speed={0}
      squareSize={7}
      borderColor="#454040"
      hoverTrailAmount={0}
      direction="diagonal"
    />
  </div>

  <main className="relative z-10 text-white">
    Hello!
  </main>
</div>
  );
};

export default App;
