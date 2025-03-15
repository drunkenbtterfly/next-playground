"use client"; // Tambahkan ini agar komponen menjadi client component

import Image from "next/image";
import Waves from "./components/Waves"; // Perbaikan path relatif
import ScrollVelocity from "./components/ScrollVelocity"; // Perbaikan path relatif
import { useState } from "react"; // Gunakan useState hanya di client component
import Lanyard from './components/Lanyard';

export default function Home() {
  const [velocity] = useState(120); // Deklarasikan velocity sebelum digunakan

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

        <ScrollVelocity
          texts={["React Bits", "Scroll Down"]}
          velocity={velocity} // Gunakan velocity yang sudah dideklarasikan
          className="custom-scroll-tex"
        />

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-center mt-4">
          {/* Teks */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold">Selamat Datang di Portofolio Saya</h1>
            <p className="text-lg">
              Saya seorang pengembang web yang berfokus pada UI/UX dan Frontend Development.
            </p>
          </div>

          {/* Model 3D Lanyard */}
          <div className="md:w-1/2 w-full flex justify-center">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      <div className="h-screen max-w-max"></div>
    </>
  );
}
