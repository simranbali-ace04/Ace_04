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
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

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
const learning = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="relative z-10 rounded-xl border border-zinc-400 bg-zinc-50/70 dark:border-zinc-800 dark:bg-black/50 text-slate-700 dark:text-white px-4 sm:px-6 lg:px-8 py-4 m-3">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-3xl font-heading text-rose-600 dark:text-olive-300 mb-3">
          SKILLS
        </h1>
        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent text"></div>
      </div>
      <div className="flex flex-wrap gap-2 items-center text-slate-700 dark:text-zinc-200">
        {skill.map((data, idx) => (
          <h1
            key={idx}
            className="px-2 py-0.5 rounded-xl flex items-center border gap-0.5 font-normal active:scale-95 cursor-default
          hover:scale-105 hover:border-rose-500 hover:shadow-[0_0_12px_rgba(244,63,94,0.2)] duration-200"
          >
            {data.name} <span>{data.icon}</span>
          </h1>
        ))}
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {learning.map((tech, idx) => (
            <div
              key={idx}
              className="
          px-1 py-0.5
          rounded-xl
          flex items-center gap-1.5
          border border-zinc-700
          text-slate-700 dark:text-zinc-300
            bg-white/40 dark:bg-zinc-950/40
            cursor-default
            duration-200
            hover:scale-105
            hover:border-rose-500
            hover:shadow-[0_0_12px_rgba(244,63,94,0.2)]
        "
            >
              <span>{tech.icon}</span>

              <span>{tech.name}</span>

              <span className="text-[10px] px-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium">
                Learning
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
