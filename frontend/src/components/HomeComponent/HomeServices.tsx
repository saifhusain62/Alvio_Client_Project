// ServicesSection.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import sliderImage from "../../assets/sliderimg.png";

const ServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const services = [
    { name: "Branding & Identity", route: "/services/digital-marketing" },
    { name: "UI/UX Design", route: "/services/ui-ux-design" },
    { name: "Web Development", route: "/services/web-development" },
  ];

  const images = [sliderImage, sliderImage, sliderImage];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="w-full bg-white overflow-hidden py-12">
      {/* Main Container - Fixed at 1600px matching Hero style */}
      <div className="mx-auto max-w-[1600px] border-x border-gray-100">
        
        {/* ROW 1: Heading, Description, and Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 border-t border-gray-100">
          
          {/* Column 1: Main Heading */}
          <div 
            className="p-10 lg:p-14 flex flex-col justify-center min-h-[350px]"
            data-aos="fade-up"
          >
            
            <h2 className="font-['Inter_Tight'] text-[32px] md:text-[40px] lg:text-[46px] font-bold leading-[1.05] tracking-tighter text-[#2d2d2d]">
              Combine <br />
              <span className="text-[#ff7a21]">creativity & strategy</span> <br />
              to build solutions.
            </h2>
          </div>

          {/* Column 2: Description Text */}
          <div 
            className="p-10 lg:p-14 flex flex-col justify-center bg-[#fcfcfc]/50"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="space-y-6">
                <p className="font-mono text-[14px] leading-relaxed text-gray-600">
                    Your brand is more than just a logo — it's the story, voice,
                    and personality that your audience connects with. We craft
                    identities that are memorable and trustworthy.
                </p>
                <p className="font-mono text-[14px] leading-relaxed text-gray-400 italic border-l-2 border-[#ff7a21] pl-4">
                    From logos and color palettes to brand guidelines, we shape
                    the visual foundation of your business.
                </p>
            </div>
          </div>

          {/* Column 3: Services List */}
          <div 
            className="p-10 lg:p-14 flex flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="space-y-1">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(service.route)}
                  className="w-full flex items-center justify-between group py-5 border-b border-gray-50 last:border-0 hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[12px] text-[#ff7a21] font-bold">0{index + 1}</span>
                    <span className="text-lg font-bold text-[#2d2d2d] group-hover:text-black">
                      {service.name}
                    </span>
                  </div>
                  <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 group-hover:bg-[#ff7a21] group-hover:text-white group-hover:border-[#ff7a21] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: FULL WIDTH SLIDER (1600px width area) */}
        <div className="border-t border-b border-gray-100 bg-white p-6 lg:p-10">
          <div className="relative w-full rounded-[32px] overflow-hidden h-[450px] md:h-[650px] shadow-2xl shadow-black/5 border border-gray-100">
            
            {/* Slider Wrapper */}
            <div 
              className="flex flex-col h-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="h-full w-full flex-shrink-0 relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* High-end gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>
              ))}
            </div>

            {/* Slider Navigation (Left Side vertical) */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group flex items-center gap-4 outline-none"
                >
                  <div className={`transition-all duration-500 rounded-full ${
                    currentSlide === index ? "bg-[#ff7a21] h-12 w-2" : "bg-white/30 h-4 w-2 group-hover:bg-white"
                  }`} />
                  {currentSlide === index && (
                      <span className="text-white font-mono text-[12px] font-bold tracking-widest">
                          0{index + 1}
                      </span>
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Branding Label */}
            <div className="absolute bottom-10 right-10 z-20">
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl">
                  <p className="font-mono text-[11px] font-bold text-white tracking-[0.3em] uppercase">
                    Arvio / Studio / 2026
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;