import React from "react";
import { MdArrowOutward } from "react-icons/md";
const ProjectsCard = () => {
  return (
    <div className="bg-black/50 backdrop:blur-md p-3.5 border-2 border-zinc-500 sm:w-full rounded-2xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-semibold text-3xl ml-2.5 font-heading">GitLook</h1>
        <div className="flex gap-2 items-center">
          <a
            href="https://gitlook-ace.vercel.app/"
            className="flex items-center px-1.5 py-1 rounded-xl text-sm border font-light border-zinc-500 hover:bg-zinc-900"
          >
            live preview{" "}
            <span>
              <MdArrowOutward />
            </span>
          </a>
          <a
            href="https://github.com/simranbali-ace04/GitLook"
            className="flex items-center px-1.5 py-1 rounded-xl text-sm border font-light border-zinc-500 hover:bg-zinc-900"
          >
            github{" "}
            <span>
              <MdArrowOutward />
            </span>
          </a>
        </div>
      </div>
      <ul className="space-y-3 text-zinc-300 text-sm mb-2">
        <li className="flex gap-3">
          <span className="text-rose-500">▹</span>
          <span>
            Built a responsive web application to fetch and display developer
            profiles and repository metrics using the GitHub REST API.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-rose-500">▹</span>
          <span>
            Developed reusable React components with dynamic state management
            for profiles, repositories, and error handling.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-rose-500">▹</span>
          <span>
            Configured Vite and ESLint to optimize build performance and
            maintain clean, consistent code quality.
          </span>
        </li>
      </ul>
      <div className="flex items-center gap-2 p-2 px-6">
        <h1 className="px-1.5 border text-rose-500 font-semibold rounded-md">
          React
        </h1>
        <h1 className="px-1.5 border text-rose-500 font-semibold rounded-md">
          Tailwind CSS
        </h1>
        <h1 className="px-1.5 border text-rose-500 font-semibold rounded-md">
          REST API
        </h1>
      </div>
    </div>
  );
};

export default ProjectsCard;
