import React from "react";
import home2 from "../assets/home2.png";
import home1 from "../assets/homeTop.jpeg"

function Hero() {
  return (
    <section className="text-center relative w-full h-[810px] flex items-center justify-center bg-white">

      {/* Background Image */}
      <img 
        src={home1} 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Dark overlay (optional — remove if you don’t want it) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-xl px-10 text-black">
        <button className="bg-amber-50 text-sm font-semibold border border-white/80 px-3 py-1 rounded-md">
          Smarter Spend. Better Returns
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Unlock Clarity on Every Ad Dollar
        </h1>

        <p className="mt-4 text-black-900">
          AdShark is your single source of truth for marketing attribution.
        </p>
        <p className="text-black-900">
          Cut through channel noise and scale faster.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-white/70 bg-white/20 text-white placeholder-black/60 px-4 py-2 rounded-lg backdrop-blur-md"
          />
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
