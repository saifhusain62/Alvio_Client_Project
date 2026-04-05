// HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import Aboutimg from '../../assets/aboutimg.png'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 md:py-20">
      <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 lg:gap-10 items-center">
        
        {/* ===================== LEFT SIDE ===================== */}
        <div className="flex flex-col items-start gap-y-7 sm:gap-5 order-2 lg:order-1 text-center lg:text-left lg:items-start items-center p-9">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-5xl font-normal leading-tight tracking-tight">
            {/* <span className="text-black">Turning </span>
            <span className="text-[#FF7E28]">good design</span>
            <span className="text-black"> into unforgettable </span>
            <span className="text-[#FF7E28]">experiences</span> */}
            Turning <span className="text-[#FF7E28]">good design</span> <br /> into unforgettable <span className="text-[#FF7E28]">experiences</span>
          </h1>

          {/* Subtext */}
          <p className="font-mono text-gray-500 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed pt-8">
            From startups to global companies, we craft stories that connect
            brands with people through design and innovation.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-black/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition-colors duration-300 mt-4 sm:mt-6 inline-block pt-5"
          >
            Let's Create Together
          </Link>
        </div>

        {/* =================== CENTER IMAGE =================== */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[32rem] xl:h-[28rem] rounded-sm overflow-hidden ">
            <img
              src={Aboutimg} 
              alt="Creative design showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ==================== RIGHT SIDE ==================== */}
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-center gap-8 sm:gap-10 lg:gap-12 order-3 text-center lg:text-right">
          
          {/* Clients */}
          <div>
            <p className="font-mono text-gray-500 text-xs sm:text-sm md:text-base tracking-wide uppercase">
              Clients
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-none mt-1">
              150+
            </p>
          </div>

          {/* Projects */}
          <div>
            <p className="font-mono text-gray-500 text-xs sm:text-sm md:text-base tracking-wide uppercase">
              Projects
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-none mt-1">
              250+
            </p>
          </div>

          {/* Commitment */}
          <div>
            <p className="font-mono text-gray-500 text-xs sm:text-sm md:text-base tracking-wide uppercase">
              Commitment
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-none mt-1">
              110%
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
