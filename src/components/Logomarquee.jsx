import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  { src: "/assets/ai.png", alt: "Logo 1" },
  { src: "/assets/aws.png", alt: "Logo 2" },
  { src: "/assets/java.png", alt: "Logo 3" },
  { src: "/assets/mongo.png", alt: "Logo 4" },
  { src: "/assets/node.png", alt: "Logo 5" },
  { src: "/assets/react.png", alt: "Logo 6" },
  { src: "/assets/next.png", alt: "Logo 7" },
  { src: "/assets/python.png", alt: "Logo 8" },
  { src: "/assets/dock.png", alt: "Logo 9" },
  { src: "/assets/ts.png", alt: "Logo 10" },
  { src: "/assets/kotlin.png", alt: "Logo 11" },
];

const logos2 = [
  { src: "/assets/css.png", alt: "Logo 1" },
  { src: "/assets/angular.png", alt: "Logo 2" },
  { src: "/assets/go.png", alt: "Logo 3" },
  { src: "/assets/flutter.png", alt: "Logo 4" },
  { src: "/assets/postgres.png", alt: "Logo 5" },
  { src: "/assets/ui.png", alt: "Logo 6" },
  { src: "/assets/sql.png", alt: "Logo 7" },
  { src: "/assets/vue.png", alt: "Logo 8" },
  { src: "/assets/kuber.png", alt: "Logo 9" },
  { src: "/assets/figma.png", alt: "Logo 10" },
  { src: "/assets/js.png", alt: "Logo 11" },
];

export default function Logomarquee() {
  return (
    <div className="my-4 md:my-8 mx-2 md:mx-0 px-3 md:px-6 py-4 md:py-6 rounded-md bg-white/10 backdrop-blur-sm overflow-hidden">
      {/* First Marquee: default left-to-right */}
      <div className="overflow-hidden">
        <Marquee
          gradient={true}
          gradientColor={[255, 255, 255, 0.05]}
          speed={50}
          pauseOnHover={false}
          loop={0}
          style={{ overflow: 'visible' }}
        >
          {logos.map(({ src, alt }, idx) => (
            <div key={idx} className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 h-12 sm:h-14 md:h-16 lg:h-20">
              <img
                src={src}
                alt={alt}
                className="h-full w-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-none object-contain transition-transform duration-300 hover:scale-105"
                style={{ filter: "brightness(1.15)" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
      
      {/* Second Marquee: right-to-left */}
      <div className="overflow-hidden mt-4 md:mt-8">
        <Marquee
          direction="right"
          gradient={true}
          gradientColor={[255, 255, 255, 0.05]}
          speed={50}
          pauseOnHover={false}
          loop={0}
          style={{ overflow: 'visible' }}
        >
          {logos2.map(({ src, alt }, idx) => (
            <div key={idx} className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 h-12 sm:h-14 md:h-16 lg:h-20">
              <img
                src={src}
                alt={alt}
                className="h-full w-auto max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-none object-contain transition-transform duration-300 hover:scale-105"
                style={{ filter: "brightness(1.15)" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}