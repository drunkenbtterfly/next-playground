"use client";

import Image from "next/image";
import Waves from "./components/Waves";
import ScrollVelocity from "./components/ScrollVelocity";
import { useState } from "react";
import Lanyard from './components/Lanyard';

export default function Home() {
  const [velocity] = useState(50);

  return (
    <>
      {/* <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 200, 0)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={80}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={20}
          className="z-60 top-14"
        /> */}

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-center mt-12">
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold">SKIBIDI SKIBIDI SKIBIDI SKIBIDI</h1>
            <p className="text-lg">
              just skibidi just skibidi just skibidi just skibidi just skibidi just skibidi just skibidi just skibidi
            </p>
          </div>

          <div className="md:w-1/2 w-full flex justify-center">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
        <ScrollVelocity
          texts={["IPAN", "SKIBIDI"]}
          velocity={velocity}
          className="custom-scroll-tex"
        />
      <div className="h-screen max-w-max"></div>
    </>
  );
}
