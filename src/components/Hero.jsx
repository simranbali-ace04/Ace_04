import React from "react";
import ShinyText from "./ShinyText";
import Carousel from "./Carousel";
import TextType from "./TextType";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative z-10 rounded-xl border border-zinc-800 bg-black/50 text-white px-8 py-4 m-3">
      <div className="flex items-center gap-10 h-full mb-8">
        <div>
          <ShinyText
            className="font-semibold mb-5 px-8"
            text="Heyy, I'm"
            speed={2}
            delay={0}
            color="#615f5f"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <div style={{ height: "100px", position: "relative"}}>
            <Carousel
              round={true}
              baseWidth={150}
              loop={true}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-serif text-olive-300 mt-4">
            Simran Bali{" "}
            <span className="text-3xl text-zinc-400 italic">aka Ace</span>
          </h1>

          <div className="flex flex-row  ">
            <h1 className="text-olive-300 px-7">20, she/her </h1>

            <div>
              <TextType
                className="text-olive-300 tracking-wider "
                text={[
                  "| Full Stack Developer in progress",
                  "| Building things that matter",
                  "| Breaking things to fix them",
                  "| Learning in public",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                deletingSpeed={40}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              />
            </div>
          </div>
          <h1 className="font-light text-zinc-300">
            Turning curiosity into code and ideas into impactful digital
            experiences.
          </h1>
          <div className="flex flex-row gap-5 items-center">
            <button className="bg-rose-800 px-4 py-1.5 rounded-md font-light flex items-center justify-center gap-1 active:scale-95 hover:bg-rose-600">
              Resume{" "}
              <span>
                <IoDocumentTextOutline size={16} />
              </span>
            </button>
            <div className="flex items-center gap-5 justify-center">
              <a
                href="https://github.com/simranbali-ace04"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/simran-bali-341a5a31b"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://x.com/ace_X04"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-155 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <FaXTwitter size={24} />
              </a>

              <a
                href="mailto:simranbali2006@@gmail.com"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <MdEmail size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
