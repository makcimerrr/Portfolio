"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import { Typewriter } from 'react-simple-typewriter'
import GraphemeSplitter from 'grapheme-splitter'
import {TypeAnimation} from "react-type-animation";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const splitter = new GraphemeSplitter();

export default function Home() {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        // Attente de 2 secondes avant de montrer le typewriter
        const timer = setTimeout(() => {
            setShowTypewriter(true);
        }, 4000); // Délai en millisecondes (ici, 2000 ms = 2 secondes)

        return () => clearTimeout(timer);
    }, []);

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
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          {showTypewriter ? (
              <Typewriter
            words={['FullStackDeveloper','Freelancer', 'Software Tester','Backend Developer','DevOps Engineer','Software Engineer', 'Web Developer','Software Developer', 'WebDesigner', 'Maxime Dubois']}
            cursor
            cursorStyle='_'
            loop
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={2000}
        />
              ):(
                  'Maxime Dubois'
          )}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
            <h2 className="text-sm text-zinc-200 ">
                <TypeAnimation
                    splitter={(str) => splitter.splitGraphemes(str)}
                    sequence={[
                        'Hello 🇬🇧',
                        2000,
                        'Ciao 🇮🇹',
                        2000,
                        '你好 🇨🇳',
                        2000,
                        'Здравейте 🇧🇬 ',
                        2000,
                        'Hola 🇪🇸',
                        2000,
                        'Bonjour 🇫🇷',
                        2000,
                        'नमस्ते 🇮🇳',
                        2000
                    ]}
                    style={{fontSize: '2em'}}
                    repeat={Infinity}
                />
            </h2>
            <br/>
                <h2 className="text-sm text-zinc-500 ">
                    I'm a FullStack Developer from{" "}
                    <Link
                        target="_blank"
                        href="https://zone01rouennormandie.org/"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Zone01 Rouen Normandie
                    </Link> in France.
                </h2>
        </div>
    </div>
);

}
