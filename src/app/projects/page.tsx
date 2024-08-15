"use client";

import Card from "@/components/Card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Define the type for the project
interface Project {
  title: string;
  date: string;
  desc: string;
  used: string;
  code: string;
  site: string;
}

// Sample project data
const projects: Project[] = [
  {
    title: "Blog Site",
    date: "Aug-2022-Sep-2022",
    desc: "Introducing our blog site, a platform where you can publish and share your thoughts with the world. Built with React.js, Tailwind CSS, and Firebase, our site combines dynamic performance with stunning, responsive design. React.js ensures a seamless user experience, while Tailwind CSS provides a modern and flexible styling approach. Firebase offers robust backend support, handling data storage and real-time updates effortlessly. Join us in sharing your ideas and engaging with a global audience through this cutting-edge platform.",
    used: "ReactJs, Node, JavaScript, Tailwind",
    code: "https://github.com/chdineshbabu/blog-site",
    site: "https://blog-site-ten-neon.vercel.app/",
  },
  {
    title: "CryptoPay",
    date: "Jan-2023-Feb-2023",
    desc: "Introducing CryptoPay, the secure and efficient platform for transferring cryptocurrency between accounts. Built on the Ethereum blockchain and leveraging Web3.js, CryptoPay ensures seamless and transparent transactions with robust decentralization. Our platform enables instant crypto transfers with top-notch security, thanks to Ethereum's smart contracts and Web3.js integration. Experience the future of finance with our user-friendly interface and cutting-edge technology, designed to make cryptocurrency transactions fast, reliable, and accessible to everyone.",
    used: "ReactJs, Node, JavaScript, Tailwind, Web3js",
    code: "https://github.com/chdineshbabu/cryptopay",
    site: "https://cryptopay-sable.vercel.app/",
  },
  {
    title: "CryptoLottery",
    date: "Feb-2023-Mar-2023",
    desc: "Introducing Crypto Lottery, where your chance to win big meets the world of cryptocurrency! Our platform allows you to place bids in crypto for a shot at becoming the lucky winner of a prize pool composed of all the accumulated crypto. Built on the Ethereum blockchain and powered by smart contracts, Crypto Lottery ensures fairness and transparency. Experience the excitement of lottery draws with the security of blockchain technology, and maybe you'll be our next grand prize winner!",
    used: "ReactJs, Node, JavaScript, Tailwind, Web3js",
    code: "https://github.com/chdineshbabu/CryptoLottery",
    site: "https://crypto-lottery-xi.vercel.app/",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center gap-4 justify-center m-20">
      <h1 className="bg-gray-500 rounded-sm px-1 font-light anime_top">
        &gt;_ My_Projects.
      </h1>
      <h1 className="text-6xl font-semibold">Check out my latest work</h1>
      <h1 className="text-xl text-center anime_top">
        I&apos;ve worked on a variety of projects, from simple websites to
        complex web applications.
        <br /> Here are a few of my favorites.
      </h1>
      <motion.div
        ref={ref}
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: isInView ? 0 : -200,
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Card items={projects} />
      </motion.div>
    </div>
  );
}
