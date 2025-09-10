import React from "react";
import { WobbleCardDemo } from "./WobbleCardDemo";

export default function AboutSection() {
  return (
    <section className="min-h-screen px-4 py-16 bg-black font-[neu]">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[neu] font-bold text-white tracking-tight">
            About Us
          </h2>
          <p className="max-w-6xl text-lg md:text-xl text-zinc-300 mt-6 leading-relaxed">
            At{" "}
            <span className="font-semibold text-[#f7c873]">Navi Infotech</span>,
            we believe technology should work for you—not the other way around.
            We're a team of passionate developers, designers, and
            problem-solvers who create digital solutions that help businesses
            grow.
          </p>
        </div>
      </div>

      {/* Wobble Cards Section */}
      <div className="max-w-7xl mx-auto">
        <WobbleCardDemo />
      </div>
    </section>
  );
}
