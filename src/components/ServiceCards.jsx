import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Web Development",
    description:
      "Lightning-fast, responsive websites built to wow your audience and scale with your brand.",
    link: "#",
  },
  {
    title: "Mobile App Development",
    description:
      "Sleek, high-performing apps for Android & iOS that users love to tap on again and again.",
    link: "#",
  },
  {
    title: "Product Development",
    description:
      "From idea to launch, we turn bold concepts into digital products that actually solve problems.",
    link: "#",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, modern, user-first designs that make every click feel simple, smart, and satisfying.",
    link: "#",
  },
  {
    title: "Support & Maintenance",
    description:
      "Stay worry-free with updates, security, and optimizations that keep your product running smooth.",
    link: "#",
  },
  {
    title: "Digital Strategy & Consulting",
    description:
      "Smart strategies, the right tools, and a clear roadmap to help your business grow without limits.",
    link: "#",
  },
];

export function ServiceCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[neu]">
      <HoverEffect
        items={projects}
        className="text-xl leading-relaxed"
      />
    </div>
  );
}
