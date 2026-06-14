import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubGraph = () => {
  return (
    <div
      id="github"
      className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-4 sm:px-6 lg:px-8 py-4 m-3"
    >
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl sm:text-3xl font-heading text-olive-300">
          GITHUB
        </h1>

        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent"></div>
      </div>

      <p className="text-xs sm:text-sm text-zinc-400 mb-6">
        Building consistently, one commit at a time.
      </p>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center">
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
    </div>
  );
};

export default GithubGraph;
