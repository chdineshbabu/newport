"use client";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";

interface Project {
  title: string;
  date: string;
  desc: string;
  used: string;
  code: string;
  site: string;
}

export default function Card({ items }: { items: Project[] }) {
  return (
    <div>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col mx-auto justify-center items-center m-6"
        >
          <div className="card p-4 shadow-lg shadow-slate-950 w-[70%]">
            <LinkPreview url={item.site} className="font-bold">
              <h1 className="text-3xl py-1 font-thin">{item.title}</h1>

              <h1 className="font-light opacity-60 text-xs">{item.date}</h1>
              <br />
              <p className="font-light">{item.desc}</p>
              <br />
              <p className="font-thin">{item.used}</p>
              <div className="flex flex-row gap-2 py-3">
                <div className="flex items-center card w-fit p-1 hover:scale-110 hover:shadow-white shadow-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path>
                  </svg>
                  <h1 className="text-sm ">
                    <a href={item.site}>Website</a>
                  </h1>
                </div>
                <div className="flex items-center card w-fit p-1 hover:scale-110 hover:shadow-white shadow-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                  </svg>
                  <h1 className="text-sm ">
                    <a href={item.code}>Code</a>
                  </h1>
                </div>
              </div>
            </LinkPreview>
          </div>
        </div>
      ))}
    </div>
  );
}
