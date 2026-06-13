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
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-10 mb-6">
        <div className="flex flex-col items-center sm:items-start shrink-0 w-full sm:w-auto">
          <ShinyText
            className="font-semibold mb-3 text-sm sm:text-base text-center sm:text-left w-full sm:px-8"
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
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <div style={{ height: "150px", width: "150px", flexShrink: 0 }}>
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
        </div>

        <div className="flex flex-col gap-3 text-center sm:text-left w-full min-w-0 font-heading">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-olive-300 sm:mt-4 font-semibold leading-tight">
            Simran Bali{" "}
            <span className="text-lg sm:text-2xl text-zinc-400 italic block sm:inline">
              aka Ace
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1">
            <span className="text-olive-300 text-sm sm:text-base sm:px-7">
              20, she/her
            </span>
            <TextType
              className="text-olive-300 tracking-wider text-sm sm:text-base"
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
            />
          </div>

          <p className="font-light text-zinc-300 text-sm sm:text-base">
            Turning curiosity into code and ideas into impactful digital
            experiences.
            Always learning, always building, and always chasing the next challenge.
          </p>

          <div className="flex flex-row flex-wrap gap-4 items-center justify-center sm:justify-start">
            <button className="bg-rose-800 px-4 py-1.5 rounded-md font-light flex items-center gap-1 active:scale-95 hover:bg-rose-600 text-sm">
              Resume <IoDocumentTextOutline size={15} />
            </button>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/simranbali-ace04"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/simran-bali-341a5a31b"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://x.com/ace_X04"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="mailto:simranbali2006@gmail.com"
                className="text-zinc-500 hover:text-white hover:scale-150 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              >
                <MdEmail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
