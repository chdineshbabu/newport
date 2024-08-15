"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect } from "react";


function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  const { scrollYProgress } = useScroll();

  const yRange = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const xRange = useTransform(scrollYProgress, [0, 1], [0,-100]);

  useEffect(() => {
    yRange.onChange((val) => console.log("Y Offset: ", val));
    xRange.onChange((val) => console.log("Opacity: ", val));
  }, [yRange, xRange]);

  return (
    <motion.div
    style={{
      y: yRange,
      x: xRange,
    }}
     className="z-10 fixed right-0 bottom-10">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="h-96">
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
