import { HeroHighlight } from "./ui/hero-highlight";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import Github from "../../images/github.svg";
import LinkedIn from "../../images/linkedin.svg";
import Twitter from "../../images/twitter.svg";
import CountUp from "react-countup";

export default function Hero() {
  const words = ["Full Stack", "Frontend", "Backend", "Blockchain", "Solidity"];

  return (
    <HeroHighlight>
      <div className="px-4 text-center">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 leading-loose">
          <span className="text-2xl">
            &gt; _ Hello there! 👋 I&apos;m<br />
          </span>
          <span className="text-cyan-600 text-7xl font-thin">DINESH BABU</span>
          <br />
          <span className="text-3xl">
            I&apos;m a
            <FlipWords words={words} />
            Developer
          </span>
        </div>
        <div className="flex flex-row gap-6 pt-3 text-center justify-center">
          <h1 className="text-4xl justify-center text-neutral-300 flex flex-row gap-2">
            <CountUp end={8} duration={5} />{" "}
            <span className="text-xs pt-1 flex text-neutral-400">
              {" "}
               Projects
              <br /> Completed
            </span>
          </h1>
          <h1 className="text-4xl justify-center text-neutral-300 flex flex-row gap-2">
            <CountUp end={14} duration={5} />
            <span className="text-xs pt-1 flex text-neutral-400">
              {" "}
               Technologies <br /> Mastered
            </span>
          </h1>
          <h1 className="text-4xl justify-center text-neutral-300 flex flex-row gap-2">
            <CountUp end={800} duration={5} />
            <span className="text-xs pt-1 flex text-neutral-400">
              {" "}
               Code <br /> Commits
            </span>
          </h1>
        </div>
      </div>
    </HeroHighlight>
  );
}
