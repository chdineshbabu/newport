"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Image from "next/image";
import DarkLogo from '../../images/dark.png'
import { FlipWordsDemo } from "./text";

export function HeroHighlightDemo() {
  //relative bottom-64 pr-56 right-96
  return (
    <HeroHighlight>
      <div className="">
      <Image 
      src={DarkLogo}
      alt=""
      width={150}
      height={150}
      />
      </div>
      <div className="flex justify-between">
        <div className=" border-2">
          <FlipWordsDemo />
        </div>
        <div className="border-2">
          Image
        </div>
      </div>
      
    </HeroHighlight>
  );
}
