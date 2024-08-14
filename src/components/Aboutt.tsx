"use client";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { HeroHighlight } from "./ui/hero-highlight";

export default function Aboutt() {
    const [triggerEffect, setTriggerEffect] = useState(false);
    const words = 'I love building web apps using ReactJs, NextJs, TailwindCSS, PostgresSQL and Prisma. 🚀';

    useEffect(() => {
        const handleScroll = () => {
            if (!triggerEffect) {
                setTriggerEffect(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [triggerEffect]);

    return (
        <HeroHighlight>
            <div className="min-h-screen flex justify-center items-center text-4xl m-44 text-center">
                {triggerEffect && <TextGenerateEffect className="text-4xl rev_top" words={words} />}
            </div>
        </HeroHighlight>
    );
}
