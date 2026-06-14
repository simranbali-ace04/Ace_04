import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const skill = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel />,
  },
];
const Skills = () => {
  return (
    <div className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-4 sm:px-6 lg:px-8 py-4 m-3">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-3xl font-heading text-olive-300 mb-3">SKILLS</h1>
        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent text"></div>
      </div>
      <div className="flex flex-wrap  gap-2 items-center text-zinc-200">
        {skill.map((data, idx) => (
          <h1
            className="px-2 py-0.5 rounded-xl flex items-center border gap-0.5 font-normal active:scale-95 cursor-default
          hover:scale-105 hover:border-rose-500 hover:shadow-[0_0_12px_rgba(244,63,94,0.2)] transition-all duration-200"
          >
            {data.name} <span>{data.icon}</span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Skills;
