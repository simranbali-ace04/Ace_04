import React from "react";

const AchievementCard = ({ title, organization, description }) => {
  return (
    <div className="bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xs p-4 border border-zinc-300 dark:border-zinc-800 rounded-2xl font-normal transition-colors duration-300">
      {" "}
      <h1 className="font-heading text-xl sm:text-2xl font-semibold">
        {title}
      </h1>
      <p className="text-sm text-rose-500 mt-1">{organization}</p>
      <p className="dark:text-zinc-300 text-zinc-700 font-normal text-sm mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AchievementCard;
