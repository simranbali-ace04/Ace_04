import React from "react";
import { MdArrowOutward } from "react-icons/md";
const ProjectsCard = (props) => {
  return (
    <div className="bg-black/50 backdrop:blur-md p-3.5 border-2 border-zinc-500 sm:w-full rounded-2xl">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-semibold text-3xl ml-2.5 font-heading">
          {props.name}
        </h1>
        <div className="flex gap-2 items-center">
          <a
            href={props.link}
            className="flex items-center px-1.5 py-1 rounded-xl text-sm border font-light border-zinc-500 hover:bg-zinc-900"
          >
            live preview
            <span>
              <MdArrowOutward />
            </span>
          </a>
          <a
            href={props.github}
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
        {props.description.map((data, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-rose-500">▹</span>
            <span>{data}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 p-2 px-6">
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
