import React from "react";

const Quote = () => {
  return (
    <div className="relative z-10 rounded-xl border border-zinc-400 bg-zinc-50/70 dark:border-zinc-800 dark:bg-black/50 text-slate-700 dark:text-white px-4 sm:px-6 lg:px-8 py-4 m-3 transition-colors duration-300" style={{ willChange: 'background-color, border-color' }}>
      <div className="bg-white/40 dark:bg-zinc-950/40 backdrop-blur-xs border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-center transition-colors duration-300" style={{ willChange: 'background-color, border-color' }}>
        <p className="text-slate-700 dark:text-zinc-300 italic text-sm sm:text-base">
          "The only thing we're allowed to do is believe that we won't regret
          the choice we made."
        </p>

        <p className="text-rose-600 dark:text-rose-500 font-medium text-sm mt-2">
          — Levi Ackerman
        </p>
      </div>
    </div>
  );
};

export default Quote;
