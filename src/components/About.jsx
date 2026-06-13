import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineUserGroup,
} from "react-icons/hi";

import { PiLightningBold } from "react-icons/pi";
import { IoHeadsetOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-8 py-4 m-3">
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-3xl font-heading text-olive-300">ABOUT</h1>
        <div className="h-px flex-1 bg-linear-to-r from-zinc-700 to-transparent"></div>
      </div>

      <div className="text-md font-light m-4 flex flex-col gap-3 text-olive-200 ">
        <h1>
          I'm <span className="text-rose-500">Simran Bali</span> , a Computer
          Science student who enjoys building things that solve real problems
          and make life a little easier. I love turning ideas into projects,
          exploring new technologies, and learning by building along the way.
          I'm still figuring things out, making mistakes, and growing every day
          and honestly, that's part of the fun.
        </h1>
        <h1>
          I enjoy participating in{" "}
          <span className="text-rose-500">hackathons</span> , meeting people who
          share the same passion for tech, and building under pressure. As a{" "}
          <span className="text-rose-500">co-founder</span> and{" "}
          <span className="text-rose-500">Tech Head</span> of my college's tech
          society, I love creating spaces where people can learn, connect, and
          grow together. Outside of tech, you'll usually find me listening to
          music, swimming , cycling, sketching, or planning my next big goal.
        </h1>
      </div>
      <div className="mt-6 border-t border-zinc-800 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex items-center gap-3 lg:border-r lg:border-zinc-800 lg:pr-6">
            <HiOutlineAcademicCap
              size={24}
              className="text-rose-500 shrink-0"
            />
            <p className="text-sm text-olive-200">Computer Science Student</p>
          </div>

          <div className="flex items-center gap-3 lg:border-r lg:border-zinc-800 lg:pr-6">
            <HiOutlineCode size={24} className="text-rose-500 shrink-0" />
            <p className="text-sm text-olive-200">Building with Curiosity</p>
          </div>

          <div className="flex items-center gap-3 lg:border-r lg:border-zinc-800 lg:pr-6">
            <HiOutlineUserGroup size={24} className="text-rose-500 shrink-0" />
            <p className="text-sm text-olive-200">Co-founder & Tech Head</p>
          </div>

          <div className="flex items-center gap-3 lg:border-r lg:border-zinc-800 lg:pr-6">
            <PiLightningBold size={24} className="text-rose-500 shrink-0" />
            <p className="text-sm text-olive-200">
              Love Building Under Pressure
            </p>
          </div>

          <div className="flex items-center gap-3">
            <IoHeadsetOutline size={24} className="text-rose-500 shrink-0" />
            <p className="text-sm text-olive-200">
              Music. Sketches. Big Plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
