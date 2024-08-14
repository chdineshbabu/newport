import { CardSpotlight } from "./ui/card-spotlight";
import { HeroHighlight } from "./ui/hero-highlight";

export default function Me() {
  return (
    <HeroHighlight>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4 some">
        <h1 className="bg-gray-500 anime_top font-thin rounded-sm px-1 font-light">
          &gt;_ About_me.
        </h1>
        <h1 className="font-bold anime_top text-neutral-300 text-5xl p-4 pb-12">
          Highlights
        </h1>
        <div className="w-[60%] anime bg-gray-950 border-neutral-400 card rounded-md h-auto p-4 flex flex-row gap-6">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-4 h-4 mt-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"></path>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold ">
              Full Stack Developer Intern🧳
            </h1>
            <h1 className="text-neutral-500 text-sm">
              Inter • Jul-2023-Mar-2024
            </h1>
            <p className="text-sm text-neutral-200">
              Led the creation of a sophisticated website using React.js,
              Node.js, and TailwindCSS, showcasing advanced web development
              skills. Successfully completed projects on time with a strong
              focus on teamwork and quality. Developed a company&apos;s primary
              website during an internship, demonstrating professional
              expertise. Proactively integrated tools like a chatbot to enhance
              functionality and user engagement, emphasizing initiative and
              impactful development.
            </p>
          </div>
        </div>
        <div className="w-[60%] anime_right bg-gray-950 border-neutral-400 card rounded-md h-auto p-4 flex flex-row gap-6">
          <div>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 89.61L22.486 177.18 256 293.937l111.22-55.61-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16 16 16 0 0 1 16-16l-2.646 8.602 18.537 5.703a16 16 0 0 1 .008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21 16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0 0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92L256 89.61zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627 16.37 10.232 31.703 21.463 44.156 32.36 7.612 6.66 13.977 13.05 19.074 19.337 5.097-6.288 11.462-12.677 19.074-19.337 12.453-10.897 27.785-22.128 44.156-32.36 28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063 125.873 249h-6.25z"></path></svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold ">
              B.Tech in Computer Science and Engineering🐞
            </h1>
            <h1 className="text-neutral-500 text-sm">
              Vel tech University • 2021 - 2025
            </h1>
            <p className="text-sm text-neutral-200">
              I am currently enrolled in the Bachelor of Technology
              (B.Tech) program at vel Tech University, focusing on core areas like
              software development, data analysis, and artificial intelligence.
              The curriculum includes hands-on projects and internships,
              enhancing both my theoretical understanding and practical skills.
              This program is equipping me with the expertise needed to excel in
              the tech industry.
            </p>
          </div>
        </div>
        
      </div>
    </HeroHighlight>
  );
}
