import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/simranbali-ace04", icon: <FaGithub size={20} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/simran-bali-341a5a31b", icon: <FaLinkedin size={20} /> },
    { name: "X / Twitter", href: "https://x.com/ace_X04", icon: <FaXTwitter size={18} /> },
    { name: "Email", href: "mailto:simranbali2006@gmail.com", icon: <MdEmail size={20} /> },
  ];

  return (
    <div
      id="contact"
      className="relative z-10 rounded-xl border border-zinc-400 bg-zinc-50/70 dark:border-zinc-800 dark:bg-black/50 text-slate-800 dark:text-white px-6 sm:px-10 py-10 m-3 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-heading text-rose-600 dark:text-olive-300 tracking-tight transition-colors duration-300">
              Let's Connect.
            </h2>
            <div className="mt-4 mb-3 space-y-4 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed transition-colors duration-300">
              <p>
                I'm always excited to meet people who love building, learning, and
                creating meaningful things with technology. Whether it's hackathons,
                collaborations, or just a late-night chat about code, my inbox is open.
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">
                Response window: usually within 24 hours.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 p-4 rounded-xl border border-rose-100 bg-rose-50/30 dark:border-rose-950/40 dark:bg-rose-950/10 transition-colors duration-300">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wider font-semibold mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Availability Status
            </div>
            <p className="text-slate-700 dark:text-zinc-300 text-xs sm:text-sm transition-colors duration-300">
              Open to collaborations, hackathons, projects, internships, and interesting opportunities.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center divide-y divide-zinc-200 dark:divide-zinc-800 transition-colors duration-300">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between py-4 text-slate-700 dark:text-zinc-300 hover:text-rose-600 dark:hover:text-rose-400 font-normal transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:scale-110 transition-all duration-300">
                  {link.icon}
                </span>
                <span className="text-base sm:text-lg tracking-wide">{link.name}</span>
              </div>
              
              <span className="text-zinc-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <MdArrowOutward size={20} />
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;