import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubGraph = () => {
  return (
    <div
      id="github"
      className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-4 sm:px-6 lg:px-8 py-4 m-3"
    >
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl sm:text-3xl font-heading text-olive-300">
          GITHUB
        </h1>

        <div className="h-px flex-1 bg-gradient-to-r from-zinc-700 to-transparent"></div>
      </div>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm text-zinc-400 mb-6">
        Building consistently, one commit at a time.
      </p>

      {/* Graph */}
      <div className="flex justify-center items-center">
        <div className="origin-center scale-[0.42] xs:scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
          <GitHubCalendar
            username="simranbali-ace04"
            colorScheme="dark"
            blockSize={10}
            blockMargin={4}
            fontSize={12}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                title: `${activity.count} contributions on ${activity.date}`,
              })
            }
            theme={{
              dark: [
                "#18181b", // zinc-900
                "#3f3f46", // zinc-700
                "#881337", // rose-900
                "#be123c", // rose-700
                "#f43f5e", // rose-500
              ],
            }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-2 mt-4 text-xs text-zinc-500">
        <span>Less</span>

        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-zinc-900"></div>
          <div className="w-3 h-3 rounded-sm bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-sm bg-rose-900"></div>
          <div className="w-3 h-3 rounded-sm bg-rose-700"></div>
          <div className="w-3 h-3 rounded-sm bg-rose-500"></div>
        </div>

        <span>More</span>
      </div>
    </div>
  );
};

export default GithubGraph;
