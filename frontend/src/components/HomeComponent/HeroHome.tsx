// HeroSection.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="min-h-screen w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mt-[-100px]">
      <div className="max-w-[1600px] mx-auto h-full flex flex-col justify-between min-h-[calc(100vh-8rem)] mt-10">

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 py-8 sm:py-12">

          {/* Main Heading */}
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1200"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-normal leading-tight"
          >
            <span className="text-[#FF7E28]"> Design</span> That Inspires
            <br />
            Strategy That <span className="text-[#FF7E28]"> Delivers</span>
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl px-4 pt-5 font-mono"
          >
            We Craft Experiences that connect brands with people and turn ideas
            into impact
          </p>

          {/* CTA Button */}
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="800"
          >
            <Link
              to="/contact"
              className="bg-black/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition-colors duration-300 mt-4 sm:mt-6 inline-block"
            >
              Let's Create Together
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12 lg:mt-0">

          {/* Left Section - Stats & Social */}
          <div className="flex flex-col justify-between space-y-8">

            {/* Stats */}
            <div className="space-y-10">

              {/* Projects */}
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-gray-500 text-sm sm:text-base mb-1 font-mono">
                  Projects
                </p>
                <p className="text-black text-2xl sm:text-3xl md:text-4xl font-normal">
                  More than 250
                </p>
              </div>

              {/* About */}
              <div
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <p className="text-gray-500 text-sm sm:text-base mb-1 font-mono">
                  About
                </p>
                <p className="text-black text-2xl sm:text-3xl md:text-4xl font-normal">
                  Since 2021
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div
             
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-[#FF7E28] transition-colors duration-300 text-sm sm:text-base group"
              >
                <span className="font-medium">Behance</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-[#FF7E28] transition-colors duration-300 text-sm sm:text-base group"
              >
                <span className="font-medium">Dribbble</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-[#FF7E28] transition-colors duration-300 text-sm sm:text-base group"
              >
                <span className="font-medium">Twitter</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Middle Section - Spacer */}
          <div className="hidden lg:block"></div>

          {/* Right Section - Description */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="flex items-end float-end"
          >
            <p className="text-gray-500 text-md sm:text-base md:text-lg leading-relaxed font-mono">
              From branding to UI/UX, from design to development.{' '}
              <span className="text-black">
                We bring ideas to life with creativity and precision.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
