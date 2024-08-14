import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useScroll, useTransform } from "framer-motion";

useGLTF.preload("../../public/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/robot_playground.glb");
  const { actions } = useAnimations(animations, scene);

  // Using framer-motion's scroll hooks
  const { scrollYProgress } = useScroll();
  const animationProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play().paused = true;
    }
  }, [actions]);

  useFrame(() => {
    if (actions["Experiment"]) {
      const action = actions["Experiment"];
      action.time = (animationProgress.get() * action.getClip().duration) / 2;
    }
  });

  return (
    <group ref={group} scale={[3, 3, 3]} position={[0, -2.5, -2.5]}> {/* Adjust the scale value as needed */}
      <primitive object={scene} />
    </group>
  );
}
