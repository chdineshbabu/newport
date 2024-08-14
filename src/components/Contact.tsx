import { Cover } from "./ui/cover";

export default function Contact(){
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="bg-gray-500 font-thin rounded-sm mb-8 px-1 font-light">
          &gt;_ Want my Resume? 
        </h1>
        <h1 className="font-bold text-neutral-300 text-center text-6xl p-4 pb-12">
        Click the button below to <br/> <Cover>download</Cover>
        </h1>
        <button className="card py-2 px-4 hover:shadow-neutral-600 shadow-md hover:scale-110 transition-transform delay-100"><a href="https://drive.google.com/file/d/1oaqENrqKdB07KpNqcjNhQze8_4gXleDv/view?usp=sharing" target="blank">&gt;_ Download Resume</a></button>
        </div>
    )
}