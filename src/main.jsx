import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
  autoRaf: true,
  smoothWheel: true,
  lerp: 0.08,
  anchors: true,
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
    <Analytics />
    <SpeedInsights />
  </ThemeProvider>,
);
