import React from "react";

const AchievementCard = ({
  title,
  organization,
  description,
}) => {
  return (
    <div className="bg-black/50 backdrop-blur-md p-4 border border-zinc-800 rounded-2xl font-normal">
      <h1 className="font-heading text-xl sm:text-2xl font-semibold">
        {title}
      </h1>

      <p className="text-sm text-rose-500 mt-1">
        {organization}
      </p>

      <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AchievementCard;