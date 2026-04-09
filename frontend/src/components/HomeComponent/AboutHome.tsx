// HeroSection.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutimg from "../../assets/aboutimg.png";

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden py-10">
      {/* Main Grid Container matching your brand style */}
      <div className="mx-auto max-w-[1600px] border-x border-gray-100">
        
        {/* The 3-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 border-b border-gray-100">
          
          {/* LEFT SIDE: Heading & Call to Action */}
          <div className="p-10 lg:p-14 flex flex-col justify-center min-h-[450px]">
            
            <h1 
               data-aos="fade-down" 
    className="font-sans text-[24px] md:text-[34px] lg:text-[42px] xl:text-[52px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]"
            >
              Turning <br />
              <span className="text-[#ff7a21]">good design</span> <br />
              into memorable <br />
              experiences.
            </h1>

            <p 
              data-aos="fade-right"
              data-aos-delay="200"
              className="font-mono text-[14px] leading-relaxed text-gray-500 mt-8 max-w-sm"
            >
              From startups to global companies, we craft stories that connect
              brands with people through design and innovation.
            </p>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/contact"
                className="bg-[#1a1a1a] text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-black transition-all shadow-xl shadow-black/10 active:scale-95 inline-block"
              >
                Let&apos;s Create Together
              </Link>
            </div>
          </div>

          {/* CENTER: Main Image Showcase */}
          <div className="p-8 lg:p-12 flex items-center justify-center bg-white relative">
            {/* Background decorative square inside grid */}
            <div className="absolute inset-0 border-[30px] border-gray-50/50 pointer-events-none" />
            
            <div 
              data-aos="zoom-in" 
              className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full max-h-[600px] rounded-[32px] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5 z-10"
            >
              <img
                src={Aboutimg}
                alt="Creative design showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Stats / Counters */}
          <div className="p-10 lg:p-14 flex flex-col justify-between bg-white">
            <div className="space-y-0 divide-y divide-gray-100 h-full flex flex-col justify-center">
              
              {/* Stat 1 */}
              <div className="py-10 first:pt-0" data-aos="fade-left">
                <p className="font-mono text-gray-400 text-[10px] tracking-widest uppercase">
                  Happy Clients
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-5xl lg:text-6xl font-bold text-[#2d2d2d]">150</span>
                    <span className="text-[#ff7a21] text-3xl font-bold">+</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="py-10" data-aos="fade-left" data-aos-delay="200">
                <p className="font-mono text-gray-400 text-[10px] tracking-widest uppercase">
                  Finished Projects
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-5xl lg:text-6xl font-bold text-[#2d2d2d]">250</span>
                    <span className="text-[#ff7a21] text-3xl font-bold">+</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="py-10 last:pb-0" data-aos="fade-left" data-aos-delay="400">
                <p className="font-mono text-gray-400 text-[10px] tracking-widest uppercase">
                  Service Commitment
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-5xl lg:text-6xl font-bold text-[#2d2d2d]">110</span>
                    <span className="text-[#ff7a21] text-3xl font-bold">%</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;