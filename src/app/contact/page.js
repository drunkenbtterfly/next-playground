"use client";

import { useEffect } from "react";
import BlurText from "../components/BlurText";

export default function Contact() {
  const handleAnimationComplete = () => {
    console.log("Animasi selesai!");
  };

  useEffect(() => {
    handleAnimationComplete();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Kontak</h1>
      <p>
        Email:{" "}
        <a href="mailto:email@example.com" className="text-blue-500">
          email@example.com
        </a>
      </p>
      <p>
        Instagram:{" "}
        <a href="https://instagram.com/username" className="text-blue-500">
          @username
        </a>
      </p>

      <div className="flex w-1/2">
        <BlurText
          text="Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!Isn't this so cool?!"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </div>
    </div>
  );
}
