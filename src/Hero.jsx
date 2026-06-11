import React from "react";
import ShinyText from "./components/ShinyText";
import Carousel from "./components/Carousel";
import TextType from "./components/TextType";

const Hero = () => {
  return (
    <div className="relative z-10 rounded-xl border min-h-60 border-zinc-800 bg-black/50 text-white px-8 py-4 m-2">
      <div className="flex items-center gap-10 h-full">
        <div>
          <ShinyText
            className="font-semibold mb-2 px-8"
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
          <div style={{ height: "100px", position: "relative" }}>
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
          <h1 className="font-light text-zinc-300">Turning curiosity into code and ideas into impactful digital experiences.</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
