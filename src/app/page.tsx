'use client'

import { useEffect, useState } from 'react';
import Aboutt from "@/components/Aboutt";
import Me from "@/components/Me";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Hero from "@/components/Hero";
import PreLoader from "@/components/PreLoad";

export default function Home() {
  const [showPreLoader, setShowPreLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page">
      {showPreLoader && <PreLoader />}
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
