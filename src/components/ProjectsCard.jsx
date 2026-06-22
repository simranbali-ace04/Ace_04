import React from "react";
import { MdArrowOutward } from "react-icons/md";
const ProjectsCard = (props) => {
  return (
    <div className="bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xs p-4 border border-zinc-400 dark:border-zinc-800 sm:w-full rounded-2xl transition-colors duration-300">
      {" "}
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-semibold text-2xl sm:text-3xl ml-2.5 font-heading">
          {props.name}
        </h1>
        <div className="flex flex-wrap gap-2 items-center">
          <a
            href={props.link}
            className="flex items-center px-1.5 py-1 rounded-xl text-sm border border-zinc-500 dark:hover:bg-zinc-900 hover:bg-zinc-200"
          >
            live preview
            <span>
              <MdArrowOutward />
            </span>
          </a>
          <a
            href={props.github}
            className="flex items-center px-1.5 py-1 rounded-xl text-sm border border-zinc-500 dark:hover:bg-zinc-900 hover:bg-zinc-200"
          >
            github{" "}
            <span>
              <MdArrowOutward />
            </span>
          </a>
        </div>
      </div>
      <ul className="space-y-2.5 text-slate-700 dark:text-zinc-300 mb-3 font-normal leading-relaxed transition-colors duration-300">
        {props.description.map((data, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-rose-500">▹</span>
            <span>{data}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {props.techStack.map((tech, idx) => (
          <h1
            key={idx}
            className="px-1.5 border text-rose-500 font-semibold rounded-md"
          >
            {tech}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
