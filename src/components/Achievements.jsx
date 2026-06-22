import React from "react";
import AchievementCard from "./AchievmentsCard";

const achievements = [
  {
    title: "Top 4 & Special Mention",
    organization: "Code Wizards 2.0 • SRM University, Ghaziabad",
    description:
      "Ranked among the Top 4 teams out of 150+ teams and received a Special Mention for ConsentLens, a patient-centric healthcare platform."
  },

  {
    title: "1st Position - Project Showcase",
    organization: "BPSMV Innovation Showcase",
    description:
      "Secured 1st place in the university project showcase and received a cash prize under a Haryana Government-funded initiative."
  },

  {
  title: "Finalist - Sustain-a-thon",
  organization: "Sharda University",
  description:
    "Selected as a finalist after helping shape the team's solution strategy, validating ideas, and delivering the final pitch presentation."
},
{
  title: "Finalist - ACM Collaborative Hackathon",
  organization: "ACM",
  description:
    "Reached the finalist round by collaborating on solution design, rapid problem-solving, and presenting a functional concept within the competition timeline."
},
{
    title: "Winner - CU Ideathon",
    organization: "Chandigarh University",
    description:
      "Won the ideathon with Studease, successfully pitching the solution and securing a ₹40,000 cash prize."
  },
];

const Achievements = () => {
  return (
    <div
      id="achievements"
className="relative z-10 rounded-xl border border-zinc-400 bg-zinc-50/70 dark:border-zinc-800 dark:bg-black/50 text-slate-800 dark:text-white px-8 py-4 m-3 transition-colors duration-300"    >
      <div className="flex items-center justify-center gap-2">
<h1 className="text-3xl font-heading text-rose-600 dark:text-olive-300 mb-3">          ACHIEVEMENTS
        </h1>

<div className="h-px flex-1 bg-linear-to-r from-zinc-400 to-transparent dark:from-zinc-700"></div>      </div>

      <div className="flex flex-col gap-4">
        {achievements.map((achievement, idx) => (
          <AchievementCard
            key={idx}
            title={achievement.title}
            organization={achievement.organization}
            description={achievement.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;