"use client";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Image from "next/image";
import DarkLogo from "../../images/dark.png";
import { FlipWordsDemo } from "./text";
import Dines from "../../images/Dinesh.png";
import Scene from "@/components/Scene";
import { useScroll, useTransform, motion, Variants } from "framer-motion";

export function HeroHighlightDemo({
  rotate,
  scale,
  translate,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) {
  //relative bottom-64 pr-56 right-96
  const { scrollY } = useScroll();
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <HeroHighlight>
      <motion.div
        className="card-container rev_left"
        initial="offscreen"
        whileInView="onscreen"
      >
        <motion.div className="">
          <Image src={DarkLogo} alt="" width={150} height={150} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="flex justify-evenly"
        >
          <motion.div className=" ">
            <FlipWordsDemo />
          </motion.div>
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className=" w-[35rem] hover:cursor-grab "
          >
            <Scene />
          </motion.div>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
