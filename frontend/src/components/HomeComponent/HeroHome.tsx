// HeroSection.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      
      {/* 1600px container with side borders */}
      <div className="mx-auto max-w-[1600px] min-h-screen border-x border-gray-100 relative">
        
        {/* Main grid layout: 4 columns and 5 rows */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 min-h-screen divide-x divide-y divide-gray-100 border-b border-gray-300">
          
          {/* ROW 2: Projects & Main Hero Part 1 */}
          <div className="p-10 lg:p-14 flex flex-col justify-center" data-aos="fade-right">
            <p className="text-gray-400 text-[11px] font-mono uppercase tracking-widest mb-2">Projects</p>
            <p className="text-black text-2xl font-bold tracking-tighter">More than 250+</p>
          </div>
          
          {/* Hero Title (Spans 2 columns, 2 rows) */}
         <div className="lg:col-span-2 lg:row-span-2 flex flex-col items-center justify-center text-center p-10">
  <h1 
    data-aos="fade-down" 
    className="font-sans text-[34px] md:text-[52px] lg:text-[62px] xl:text-[75px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]"
  >
    <span className="text-[#f97316]">Design</span> That Inspires
    <br />
    Strategy That <span className="text-[#f97316]">Delivers</span>
  </h1>
</div>

          <div className="hidden lg:block bg-[#fcfcfc]/30"></div>

          {/* ROW 3: About & Main Hero Part 2 */}
          <div className="p-10 lg:p-14 flex flex-col justify-center border-t border-gray-100 lg:border-t-0" data-aos="fade-right" data-aos-delay="100">
            <p className="text-gray-400 text-[11px] font-mono uppercase tracking-widest mb-2">Since</p>
            <p className="text-black text-2xl font-bold tracking-tighter">EST. 2012</p>
          </div>
          {/* (Title continues here from row 2 span) */}
          <div className="hidden lg:block border-l border-gray-100"></div>

          {/* ROW 4: Socials & Subtext */}
          <div className="p-10 lg:p-14 lg:col-span-1 flex items-end">
            <div className="flex flex-col gap-4">
               {['Behance', 'Dribbble', 'Twitter'].map((s) => (
                 <a key={s} href="#" className="flex items-center gap-2 text-[13px] font-bold text-[#2d2d2d] hover:text-[#ff7a21] transition-all group">
                   {s} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
               ))}
            </div>
          </div>

          <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col items-center justify-center">
             <p data-aos="fade-up" className="text-gray-400 font-mono text-[14px] leading-relaxed max-w-md text-center">
               We craft digital experiences that connect brands with people and turn ideas into impact.
             </p>
             <div className="mt-8" data-aos="zoom-in" data-aos-delay="200">
                <Link to="/contact" className="bg-[#2d2d2d] text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-[#ff7a21] transition-all shadow-xl shadow-black/10">
                  Let's Talk
                </Link>
             </div>
          </div>

          <div className="p-10 lg:p-14 flex items-end" data-aos="fade-left">
             <p className="text-[#2d2d2d] font-mono text-[12px] leading-relaxed italic border-l-2 border-[#ff7a21] pl-4">
               We bring ideas to life with <span className="font-bold">creativity and precision.</span>
             </p>
          </div>

         

        </div>
      </div>
    </section>
  );
};

export default HeroSection;