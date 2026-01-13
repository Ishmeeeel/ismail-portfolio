import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Main Branding Container */}
      <div className="z-10 text-center px-4">
        <h2 className="text-sm text-zinc-500 animate-fade-in tracking-widest uppercase">
          My Name is
        </h2>
        
        <h1 className="py-2 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Ismail Usman
        </h1>

        <div className="animate-fade-in mt-4">
          <h2 className="text-sm text-zinc-500 leading-relaxed max-w-lg mx-auto">
            I build the Logic (<b>Models</b>), run the infrastructure (<b>Cloud</b>), and work with the intelligence (<b>AI</b>)
          </h2>
        </div>
      </div>

      {/* Subtle bottom spacer to maintain overall balance */}
      <div className="mt-24" />
    </div>
  );
}
