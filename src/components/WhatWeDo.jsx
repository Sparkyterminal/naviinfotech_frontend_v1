export default function WhatWeDoSection() {
  return (
    <section className="relative bg-black py-20 px-6 sm:px-10 lg:px-16 text-center overflow-hidden max-w-full">
      {/* Decorative Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full -translate-x-1/2" />
        <div className="absolute bottom-10 right-1/3 w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 font-[neu] tracking-tight text-white drop-shadow-md">
        What We Do
      </h2>

      {/* Paragraphs */}
      <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
        <p className="text-lg sm:text-xl leading-relaxed font-[neu]">
          At{" "}
          <span className="text-indigo-400 font-semibold">Navi Infotech</span>,
          we don’t just build stuff — we bring ideas to life. From slick
          websites to powerful apps and game-changing products, we create
          digital experiences that people love to use and remember.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed italic text-gray-400 font-[neu]">
          Think of us as your innovation partners: we design, code, and launch
          solutions that are fast, funky, and future-ready.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-[neu]">
          Whether you’re a startup with a big dream or a business ready to level
          up, we make tech that’s not just functional — it’s{" "}
          <span className="text-purple-400 font-semibold">bold, beautiful</span>
          , and built to wow.
        </p>
      </div>
    </section>
  );
}
