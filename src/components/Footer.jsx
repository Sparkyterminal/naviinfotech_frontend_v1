import React from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src="/assets/navi-infotech.png"
          alt="Company Logo"
          className="w-30 h-30 object-contain rounded-full bg-white mb-6 border-2 border-gray-700"
        />

        {/* Navigation Links */}
        {/* <ul className="flex space-x-8 text-gray-300 mb-6">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Products</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul> */}

        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.instagram.com/navi.infotech/?igsh=dTBiOGVpbGd6czNz&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 text-gray-300 hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/navi-infotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 text-gray-300 hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:sangeetha.m@naviinfo.tech"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-900 text-gray-300 hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Subscribe Form */}
        {/* <div className="flex items-center space-x-2 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full bg-black border border-gray-700 text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200">
            Subscribe
          </button>
        </div> */}

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2025 Navi Infotech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
