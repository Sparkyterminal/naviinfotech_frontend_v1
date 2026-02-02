/* eslint-disable no-unused-vars */

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Lens } from "./ui/lens";


const projectsData = [
  {
    id: 1,
    title: "The Dance District by Sahitya Yogesh",
    description:
      "The Dance District is a creative space where movement meets passion. Our studio is dedicated to helping dancers of all levels express themselves, build confidence, and grow through rhythm, technique, and community.",
    image: "assets/dancedistrict.jpeg",
    website: "https://www.thedancedistrict.in/",
  },
  {
    id: 2,
    title: "talkitoutwithyl",
    description:
      "talkitoutwithyl is a safe space to share your thoughts, feelings, and challenges. We connect you with professional guidance through one-on-one sessions designed to help you heal, grow, and find clarity.",
    image: "assets/keerthana.png",
    website: "https://www.talkitoutwithyl.com/",
  },
  {
    id: 3,
    title: "Sky Blue Event Management",
    description:
      "Sky Blue Event Management is a professional event management company that specializes in providing comprehensive event planning and execution services.",
    image: "assets/skyb.png",
    website: "https://www.skyblueeventmanagement.in/",
  },
  {
    id: 4,
    title: "Nuvo Hosting Agency",
    description:
      "Nuvo Hosting Agency specializes in providing professional hostesses and event management solutions, ensuring every event runs seamlessly and leaves a lasting impression.",
    image: "assets/nuvo.png",
    website: "https://www.nuvohosting.org/",
  },
  {
    id: 5,
    title: "Ovenia",
    description:
      "Ovenia is your one-stop e-commerce destination for premium kitchen appliances. From smart solutions to everyday essentials, we bring quality products that make cooking easier and more enjoyable.",
    image: "assets/kitchenviz.png",
    website: "https://www.oveniashop.in/",
  },
  {
    id: 6,
    title: "Madara Mahasabha",
    description:
      "Madara Mahasabha is a community website built to unite, empower, and support members of the Madara community. It serves as a platform for connection, collaboration, and cultural growth.",
    image: "assets/madara.png",
    website: "https://www.madaramahasabha.com/",
  },
  {
    id: 7,
    title: "Tarang Creators",
    description:
      "Tarang Creators is a dynamic musical team dedicated to creating soulful and energetic music experiences. They specialize in live performances, original compositions, and creative collaborations, bringing rhythm and harmony to every stage they perform on.",
    image: "assets/tarang.png",
    website: "https://www.tarangcreators.in/",
  },
];
// const projectsData = [
//   {
//     id: 1,
//     title: "The Dance District by Sahitya Yogesh",
//     description:
//       "The Dance District is a creative space where movement meets passion. Our studio is dedicated to helping dancers of all levels express themselves, build confidence, and grow through rhythm, technique, and community.",
//     image: "assets/dancedistrict.jpeg",
//     website: "https://www.thedancedistrict.in/",
//   },
//   // {
//   //   id: 2,
//   //   title: "talkitoutwithyl",
//   //   description:
//   //     "talkitoutwithyl is a safe space to share your thoughts, feelings, and challenges. We connect you with professional guidance through one-on-one sessions designed to help you heal, grow, and find clarity.",
//   //   image: "assets/keerthana.png",
//   //   website: "https://www.talkitoutwithyl.com/",
//   // },
//   {
//     id: 2,
//     title: "Sky Blue Event Management",
//     description:
//       "Sky Blue Event Management is a professional event management company that specializes in providing comprehensive event planning and execution services.",
//     image: "assets/skyb.png",
//     website: "https://www.skyblueeventmanagement.in/",
//   },
//   {
//     id: 3,
//     title: "Nuvo Hosting Agency",
//     description:
//       "Nuvo Hosting Agency specializes in providing professional hostesses and event management solutions, ensuring every event runs seamlessly and leaves a lasting impression.",
//     image: "assets/nuvo.png",
//     website: "https://www.nuvohosting.org/",
//   },
//   {
//     id: 4,
//     title: "Ovenia",
//     description:
//       "Ovenia is your one-stop e-commerce destination for premium kitchen appliances. From smart solutions to everyday essentials, we bring quality products that make cooking easier and more enjoyable.",
//     image: "assets/kitchenviz.png",
//     website: "https://www.oveniashop.in/",
//   },
//   {
//     id: 5,
//     title: "Madara Mahasabha",
//     description:
//       "Madara Mahasabha is a community website built to unite, empower, and support members of the Madara community. It serves as a platform for connection, collaboration, and cultural growth.",
//     image: "assets/madara.png",
//     website: "https://www.madaramahasabha.com/",
//   },
//   {
//     id: 6,
//     title: "BGS School Management",
//     description:
//       "BGS School Management is a smart attendance and dashboard system designed to simplify school administration. It helps track student attendance, monitor performance, and streamline daily operations.",
//     image: "assets/bgs.png",
//     website: "https://bgsckmschoolmanagement.org/",
//   },
// ];

const ProjectCard = ({ project }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 md:p-6 lg:p-8">
      <Rays />
      <Beams />
      <div className="relative z-10">
        <Lens hovering={hovering} setHovering={setHovering}>
          <div
            className={`w-full h-48 md:h-56 lg:h-64 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </Lens>
        <motion.div
          animate={{
            filter: hovering ? "blur(2px)" : "blur(0px)",
          }}
          className="py-4 relative z-20"
        >
          <h3 className="text-white text-lg md:text-xl lg:text-2xl text-left font-bold font-[neu] mb-2">
            {project.title}
          </h3>
          <p className="text-neutral-200 text-left text-sm md:text-base mt-2 mb-4 leading-relaxed font-[neu]">
            {project.description}
          </p>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-sm md:text-base font-[neu] font-medium backdrop-blur-sm border border-white/20 hover:border-white/40"
          >
            Visit Website
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section className="min-h-screen px-4 py-16 bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[neu] font-bold text-white tracking-tight">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 font-[neu] mt-4 max-w-3xl mx-auto">
          Discover our innovative solutions and creative projects that drive
          digital transformation
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Beam and Ray components (same as your original)
const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none scale-75 md:scale-90 lg:scale-100"
    >
      <g filter="url(#filter0_f_120_7473)">
        <circle cx="34" cy="52" r="114" fill="#6925E7" />
      </g>
      <g filter="url(#filter1_f_120_7473)">
        <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
      </g>
      <g filter="url(#filter2_f_120_7473)">
        <circle cx="191" cy="53" r="102" fill="#802FE3" />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7473"
          x="-192"
          y="-174"
          width="452"
          height="452"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="56"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter1_f_120_7473"
          x="70"
          y="-238"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
        <filter
          id="filter2_f_120_7473"
          x="-71"
          y="-209"
          width="524"
          height="524"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="80"
            result="effect1_foregroundBlur_120_7473"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Rays = ({ className }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute left-0 top-0 pointer-events-none z-[1] scale-75 md:scale-90 lg:scale-100",
        className
      )}
    >
      <g filter="url(#filter0_f_120_7480)">
        <path
          d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
          fill="url(#paint0_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.3"
        filter="url(#filter1_f_120_7480)"
      >
        <path
          d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
          fill="url(#paint1_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.86"
        filter="url(#filter2_f_120_7480)"
      >
        <path
          d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
          fill="url(#paint2_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        opacity="0.31"
        filter="url(#filter3_f_120_7480)"
      >
        <path
          d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
          fill="#8A50FF"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter4_f_120_7480)"
      >
        <path
          d="M34.2031 13.2222L291.721 269.534"
          stroke="url(#paint3_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter5_f_120_7480)"
      >
        <path
          d="M41 -40.9331L298.518 215.378"
          stroke="url(#paint4_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter6_f_120_7480)"
      >
        <path
          d="M61.3691 3.8999L317.266 261.83"
          stroke="url(#paint5_linear_120_7480)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter7_f_120_7480)"
      >
        <path
          d="M-1.46191 9.06348L129.458 145.868"
          stroke="url(#paint6_linear_120_7480)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_120_7480"
          x="-49.4199"
          y="-102.729"
          width="304.212"
          height="296.803"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter1_f_120_7480"
          x="-115.54"
          y="-64.0903"
          width="300.326"
          height="293.822"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter2_f_120_7480"
          x="-111.647"
          y="-103.654"
          width="317.434"
          height="311.722"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.5"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter3_f_120_7480"
          x="-212.518"
          y="-188.71"
          width="473.085"
          height="369.366"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="48"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter4_f_120_7480"
          x="25.8447"
          y="4.84521"
          width="274.234"
          height="273.065"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter5_f_120_7480"
          x="32.6416"
          y="-49.3101"
          width="274.234"
          height="273.065"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter6_f_120_7480"
          x="54.0078"
          y="-3.47461"
          width="270.619"
          height="272.68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.5"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <filter
          id="filter7_f_120_7480"
          x="-9.2002"
          y="1.32812"
          width="146.396"
          height="152.275"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.5"
            result="effect1_foregroundBlur_120_7480"
          />
        </filter>
        <linearGradient
          id="paint0_linear_120_7480"
          x1="-57.5042"
          y1="-134.741"
          x2="403.147"
          y2="351.523"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#AF53FF" />
          <stop offset="0.781583" stopColor="#B253FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_120_7480"
          x1="-122.154"
          y1="-103.098"
          x2="342.232"
          y2="379.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#AF53FF" />
          <stop offset="0.781583" stopColor="#9E53FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_120_7480"
          x1="-106.717"
          y1="-138.534"
          x2="359.545"
          y2="342.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.214779" stopColor="#9D53FF" />
          <stop offset="0.781583" stopColor="#A953FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_120_7480"
          x1="72.701"
          y1="54.347"
          x2="217.209"
          y2="187.221"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AF81FF" />
          <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_120_7480"
          x1="79.4978"
          y1="0.191681"
          x2="224.006"
          y2="133.065"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AF81FF" />
          <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_120_7480"
          x1="79.6568"
          y1="21.8377"
          x2="234.515"
          y2="174.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B981FF" />
          <stop offset="1" stopColor="#CF81FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_120_7480"
          x1="16.119"
          y1="27.6966"
          x2="165.979"
          y2="184.983"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A981FF" />
          <stop offset="1" stopColor="#CB81FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
