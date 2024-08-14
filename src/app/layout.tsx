import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../Styles/globals.css";
import { FloatingNavDemo } from "./navbar";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <div className="min-h-[500vh]">
          <FloatingNavDemo />
          <Scene />
          {children}
        </div>
      </body>
    </html>
  );
}

