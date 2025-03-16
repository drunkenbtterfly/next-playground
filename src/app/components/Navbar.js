"use client";

import { useState, useEffect } from "react";
import Link from "next/link"

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <nav className={`w-full p-4 z-10 fixed transition-all duration-300 ${
              isScrolled ? "bg-transparent text-white opacity" : "bg-white/70 text-black"
            }`}>
        <h1
          onClick={togglePopup}
          className="flex justify-center font-bold cursor-pointer"
        >
          IPANSKIBIDI
        </h1>
      </nav>

      {showPopup && (
        <div className="fixed inset-0 flex items-start justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl relative">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-black"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-2 text-black">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/portofolio" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
