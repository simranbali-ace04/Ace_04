import React from "react";
import ProjectsCard from "./ProjectsCard";
import { FaLongArrowAltRight } from "react-icons/fa";

const projects = [
  {
    name: "GitLook",
    description: [
      "Built a responsive web application to fetch and display developer profiles and repository metrics using the GitHub REST API",
      "Developed reusable React components with dynamic state management for profiles, repositories, and error handling",
      "Configured Vite and ESLint to optimize build performance and maintain clean, consistent code quality",
    ],
    techStack: ["React", "Tailwind CSS", "REST API"],
    link: "https://gitlook-ace.vercel.app",
    buttonText: "live preview",
    github: "https://github.com/simranbali-ace04/GitLook",
  },
  {
    name: "Leafy",
    description: [
      "Built a VS Code extension that gamifies coding sessions by growing a virtual garden based on developer activity and coding time.",
      "Implemented persistent state management using the VS Code Extension API to track garden progress, unlock collectibles, and maintain user data across sessions.",
      "Packaged and released the extension through GitHub Releases, enabling installation via downloadable builds while preparing for publication on the VS Code Marketplace.",
    ],
    techStack: ["JavaScript", "VS Code API", "Node.js", "HTML", "CSS"],
    link: "https://github.com/simranbali-ace04/Leafy/releases",
    buttonText: "download",
    github: "https://github.com/simranbali-ace04/Leafy",
  },
  {
    name: "VaultWise",
    description: [
      "Built a responsive password vault interface using React and Vite to help users securely organize and view account credentials.",
      "Structured the UI using localized sub-components like newCredentials and passwordCard to separate entry forms from the credential list displays.",
      "Utilized Tailwind CSS to implement utility-first layouts, ensuring a consistent user experience across mobile and desktop devices.",
    ],
    techStack: ["React", "Tailwind CSS", "Local Storage"],
    link: "https://vault-wise-ace.vercel.app/",
    buttonText: "live preview",
    github: "https://github.com/simranbali-ace04/VaultWise",
  },
  {
    name: "ConsentLens",
    description: [
      "Secured a Special Mention and ranked in the Top 4 teams at Code Wizards 2.0 (SRM Ghaziabad) for building a patient-friendly healthcare application.",
      "Designed and developed the entire frontend using Next.js and Tailwind CSS, creating a clean landing page and easy-to-use dashboards for doctors and patients.",
      "Built simple, interactive user forms for collecting patient consent and next-of-kin (kin's) consent to streamline hospital onboarding workflows.",
    ],
    techStack: ["Next.js", "Gemini API", "Supabase", "Tailwind CSS", "Node.js"],
    link: "https://consentlens-xi.vercel.app/",
    buttonText: "live preview",
    github: "https://github.com/simranbali-ace04/consentlens",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-10 rounded-xl border border-zinc-400 bg-zinc-50/70 dark:border-zinc-800 dark:bg-black/50 text-slate-800 dark:text-white px-8 py-4 m-3"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-2">
        <h1 className="text-3xl font-heading text-rose-600 dark:text-olive-300">
          PROJECTS
        </h1>
        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent"></div>
      </div>
      <div className="text-sm sm:text-base font-light m-4 flex flex-col gap-5 text-slate-700 dark:text-olive-200">
        {projects.map((project, idx) => (
          <ProjectsCard
            key={idx}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            buttonText={project.buttonText}
            github={project.github}
          />
        ))}

        <a
          href="https://github.com/simranbali-ace04"
          className="flex justify-center items-center gap-1.5 font-normal text-slate-800 dark:text-zinc-200 hover:underline mt-2"
        >
          View Projects{" "}
          <span>
            <FaLongArrowAltRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
