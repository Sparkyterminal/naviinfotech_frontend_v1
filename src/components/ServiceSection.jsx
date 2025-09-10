import React from "react";
import { ServiceCards } from "./ServiceCards";

const ServiceSection = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[neu] font-bold text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-[neu] mt-4 max-w-xl mx-auto">
          Discover our comprehensive range of solutions designed to elevate your business
        </p>
      </div>

      {/* Services Cards Section */}
      <div className="w-full max-w-7xl pb-16 sm:pb-20 lg:pb-24 flex justify-center">
        {/* Cards are assumed to be responsive, but you can wrap below in a responsive grid if needed */}
        <ServiceCards />
      </div>
    </section>
  );
};

export default ServiceSection;
