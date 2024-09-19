import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../Styles/globals.css";
import { FloatingNavDemo } from "./navbar";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DINESH | PORTFOLIO",
  description: "This is the personal portfoilo of Dinesh babu cheemaladari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>

        <div className="res_text text-center p-14">
          <h1 className="  ">
            This is not Supported in Small screens, Use your Laptop or Desktop
          </h1>
          <br />
          <h1>Here is My resume Have a look</h1>
          <button className="card py-2 px-4 hover:shadow-neutral-600 shadow-md hover:scale-110 transition-transform delay-100">
            <a
              href="https://drive.google.com/file/d/1oaqENrqKdB07KpNqcjNhQze8_4gXleDv/view?usp=sharing"
              target="blank"
            >
              &gt;_ Download Resume
            </a>
          </button>
        </div>
        
        <div className="min-h-[500vh]">
          <Scene />
          {children}
        </div>
      </body>
    </html>
  );
}
