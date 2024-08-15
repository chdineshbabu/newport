import { FlipWords } from "./ui/flip-words";

export default function PreLoader() {
    const words = [ "नमस्ते",'Hello!', "నమస్కారం", "வணக்கம்"];
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black text-2xl bg-opacity-100 flex justify-center items-center z-50">
            <FlipWords words={words} duration={50} />
        </div>
    );
}
