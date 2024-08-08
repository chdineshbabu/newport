import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
    const words = ["Full Stack", "Frontend", "Backend", "Blockchain", "Solidity"];

    return (
        <div className="h-[32rem] flex flex-col justify-center items-start px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 min-w-[40rem]">
                <span className="text-lg">&gt; _ Hi, I&apos;m <br /></span>
                <span className="text-cyan-600 text-6xl font-bold">DINESH BABU</span><br />
                <span className="text-2xl">
                    I am a
                    <FlipWords words={words} />
                    Developer</span>


            </div>
            <div className="flex flex-col py-4 items-start">
                <button className="justify-start bg-transparent hover:bg-cyan-600 text-cyan-800 font-semibold hover:text-white py-1 px-4 border border-cyan-600 hover:border-transparent rounded">
                    Resume
                </button>
                <div></div>

            </div>
            <div>
            </div>
        </div>
    );
}
