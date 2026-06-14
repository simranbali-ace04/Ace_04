import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-4 sm:px-6 lg:px-8 py-4 m-3"
    >
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl sm:text-3xl font-heading text-olive-300">
          CONTACT
        </h1>

        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent"></div>
      </div>

      <h2 className="text-2xl sm:text-4xl font-heading mb-4">Let's Connect.</h2>

      <div className="max-w-3xl text-zinc-300 space-y-4 leading-relaxed">
        <p>
          I'm always excited to meet people who love building, learning, and
          creating meaningful things with technology. Whether you want to
          collaborate on a project, talk about hackathons, discuss an idea, or
          just have a conversation about tech, I'd love to connect.
        </p>

        <p>
          Feel free to reach out through any of the platforms below. I usually
          reply within a day (unless I'm deep in a coding session or listening
          to music).
        </p>

        <p className="text-rose-500">
          Currently open to collaborations, hackathons, projects, internships,
          and interesting opportunities.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/simranbali-ace04"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border border-zinc-700 flex items-center gap-2 text-zinc-300 hover:text-rose-500 hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <FaGithub size={18} />
          <span>GitHub</span>
          <MdArrowOutward />
        </a>

        <a
          href="https://www.linkedin.com/in/simran-bali-341a5a31b"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border border-zinc-700 flex items-center gap-2 text-zinc-300 hover:text-rose-500 hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <FaLinkedin size={18} />
          <span>LinkedIn</span>
          <MdArrowOutward />
        </a>

        <a
          href="https://x.com/ace_X04"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border border-zinc-700 flex items-center gap-2 text-zinc-300 hover:text-rose-500 hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <FaXTwitter size={18} />
          <span>X / Twitter</span>
          <MdArrowOutward />
        </a>

        <a
          href="mailto:simranbali2006@gmail.com"
          className="px-4 py-2 rounded-xl border border-zinc-700 flex items-center gap-2 text-zinc-300 hover:text-rose-500 hover:border-rose-500  hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <MdEmail size={18} />
          <span>Email</span>
          <MdArrowOutward />
        </a>
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        Response time: usually within a day.
      </p>
    </div>
  );
};

export default Contact;
