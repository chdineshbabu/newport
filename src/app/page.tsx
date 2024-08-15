'use client'
import Image from "next/image";
import { HeroHighlightDemo } from "./hero";
import About from "@/components/About";
import Skills from "@/components/Skill";
import Aboutt from "@/components/Aboutt";
import Me from "@/components/Me";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { ShootingStars } from "@/components/ui/shooting-stars";
import motion,{ useScroll, useTransform } from "framer-motion"
import Hero from "@/components/Hero";
import Scene from "@/components/Scene";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    
    <main className="page">
      
      <Scene />
      <Hero />
      <Aboutt />
      <Me />
      <Project />
      <hr />
      <Contact />
      <ShootingStars />
      
    </main>
  );
}
