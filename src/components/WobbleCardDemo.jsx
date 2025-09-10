"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-cards";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full font-[neu]">
      {/* Full Width Top Card - Our Approach */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 bg-gradient-to-r from-[#2d3748] to-[#4a5568] min-h-[350px] lg:min-h-[300px] order-1"
        className="flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[neu] font-bold tracking-tight text-white mb-6">
            Our Approach
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutral-200   leading-relaxed">
            We understand your goals, design smart solutions, and deliver results that matter. Whether you need a new website, a mobile app, or a complete product, we bring ideas to life with innovation and precision.
          </p>
        </div>
      </WobbleCard>

      {/* Left Bottom Card - Our Mission */}
      <WobbleCard 
        containerClassName="col-span-1 bg-gradient-to-br from-[#f7c873] to-[#e6b85c] min-h-[300px] order-2 lg:order-2"
        className="flex items-center justify-center">
        <div className="max-w-sm text-center px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-[neu] font-bold tracking-tight text-[#15181f] mb-4">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-[#2d2d2d]   leading-relaxed">
            To empower businesses with digital solutions that are modern, reliable, and scalable.
          </p>
        </div>
      </WobbleCard>

      {/* Right Bottom Card - Our Vision */}
      <WobbleCard 
        containerClassName="col-span-1 bg-gradient-to-br from-[#4299e1] to-[#2b77cb] min-h-[300px] order-3 lg:order-3"
        className="flex items-center justify-center">
        <div className="max-w-sm text-center px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-[neu] font-bold tracking-tight text-white mb-4">
            Our Vision
          </h2>
          <p className="text-base md:text-lg text-neutral-200   leading-relaxed">
            To be a trusted partner for businesses worldwide in their digital journey.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}