export default function About() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-evenly">
        <div className="border-2 min-w-max">
          <div className="text-xl font-normal text-neutral-600 dark:text-neutral-400">
            <h1>&gt; _ About Me</h1>
          </div>
        </div>
        <div className="border-2 p-16 text-left w-[50%] text-neutral-300 ">
          As a passionate web developer, I thrive on turning ideas into dynamic,
          user-friendly websites. With expertise in modern web technologies like 
           <span className="font-thin text-white"> React, Node.js, and TailwindCSS</span>, I create seamless, visually stunning
          experiences that captivate users. My journey into the realm of <span className="font-thin text-white">web3 </span>
          has further fueled my enthusiasm for decentralized applications,
          opening new horizons for innovation. Whether it&apos;s crafting elegant <span className="font-thin text-white">
          front-end designs or building robust back-end systems with JavaScript </span> ,
          I am dedicated to pushing the boundaries of what&apos;s possible on the
          web.
        </div>
      </div>
    </div>
  );
}
