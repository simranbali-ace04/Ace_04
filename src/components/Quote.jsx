import React from "react";

const Quote = () => {
  return (
    <div className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-4 sm:px-6 lg:px-8 py-4 m-3">

      <div className="border border-zinc-800 rounded-xl px-4 py-3 text-center">
        <p className="text-zinc-300 italic text-sm sm:text-base">
          "The only thing we're allowed to do is believe that we won't regret the choice we made."
        </p>

        <p className="text-rose-500 text-sm mt-2">
          — Levi Ackerman
        </p>
      </div>
    </div>
  );
};

export default Quote;