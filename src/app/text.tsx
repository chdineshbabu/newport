import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import Github from "../../images/github.svg";
import LinkedIn from "../../images/linkedin.svg";
import Twitter from "../../images/twitter.svg";
import CountUp from 'react-countup';

export function FlipWordsDemo() {
  const words = ["Full Stack", "Frontend", "Backend", "Blockchain", "Solidity"];

  return (
    <div className="h-[32rem] flex flex-col justify-center items-start px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 min-w-[38rem]">
        <span className="text-lg">
          &gt; _ Hi, I&apos;m <br />
        </span>
        <span className="text-cyan-600 text-6xl font-bold">DINESH BABU</span>
        <br />
        <span className="text-2xl">
          I am a
          <FlipWords words={words} />
          Developer
        </span>
      </div>
      <div className="flex flex-row gap-6 py-4 items-start">
        <button className="justify-start bg-transparent hover:bg-cyan-600 text-cyan-800 font-semibold hover:text-white py-1 px-4 border border-cyan-600 hover:border-transparent rounded">
          Resume
        </button>
        <div className="text-white hover:scale-125 transition-transform">
          <a href="https://github.com/chdineshbabu" target="_blank">
            <Image src={Github} alt="" width={30} height={30} />
          </a>
        </div>
        <div className="text-white hover:scale-125 transition-transform">
          <a
            href="https://www.linkedin.com/in/dinesh-babu-ch-4b9902136/"
            target="_blank"
          >
            <Image src={LinkedIn} alt="" width={30} height={30} />
          </a>
        </div>
        <div className="text-white hover:scale-125 transition-transform">
          <a href="" target="_blank">
            <Image src={Twitter} alt="" width={30} height={30} />
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-4 pt-3">
        <h1 className="text-4xl justify-center text-neutral-300 flex flex-row"><CountUp end={8} duration={5}/> <span className="text-xs pt-1 flex text-neutral-400"> Projects<br /> Completed</span></h1>
        <h1 className="text-4xl justify-center text-neutral-300 flex flex-row"><CountUp end={14} duration={5}/><span className="text-xs pt-1 flex text-neutral-400"> Technologies <br /> Mastered</span></h1>
        <h1 className="text-4xl justify-center text-neutral-300 flex flex-row"><CountUp end={800} duration={5}/><span className="text-xs pt-1 flex text-neutral-400"> Code <br /> Commits</span></h1> 
      </div>
    </div>
  );
}
