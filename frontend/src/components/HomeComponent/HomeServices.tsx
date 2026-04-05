import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight } from 'lucide-react';
import Sliderimg from '../../assets/sliderimg.png'

const ServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Unsplash images
  const images = [
   Sliderimg,
   Sliderimg,
   Sliderimg
  ];

  const services = [
    'Branding & Identity',
    'UI/UX Design',
    'Web Development',
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen bg-white py-12 px-4 md:py-20 md:px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Changed from grid to flex column - stacks vertically */}
        <div className="flex flex-col gap-8 lg:gap-12">
          
          {/* First Vertical Box - Content Section */}
     <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full">
            
  {/* 1st Grid Box - Main Heading */}
  <div 
    className="flex-1 bg-white p-6 md:p-8 rounded-2xl"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-gray-900">
      Combine <span className='text-[#FF7E28]'>creativity and strategy </span>to build solutions that <span className='text-[#FF7E28]'>actually work.</span>
    </h2>
  </div>

  {/* 2nd Grid Box - Description */}
  <div 
    className="flex-1 bg-white p-6 md:p-8 rounded-2xl"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <p className="font-mono text-sm md:text-base text-gray-800 leading-relaxed mb-4">
      Your brand is more than just a logo — it's the story, voice, and personality that your audience connects with. We craft identities that are consistent, memorable, and trustworthy, helping you stand out in a crowded market.
    </p>
    <p className="font-mono text-md md:text-base text-gray-800 leading-relaxed font-normal">
      From logos and color palettes to brand guidelines, we shape the visual and emotional foundation of your business.
    </p>
  </div>

  {/* 3rd Grid Box - Services List */}
  <div 
    className="flex-1 bg-white p-6 md:p-8 rounded-2xl"
    data-aos="fade-up"
    data-aos-delay="300"
  >
   <div className="space-y-4">
  {services.map((service, index) => (
    <div
      key={index}
      className="flex items-center justify-between group cursor-pointer border-b border-gray-200 pb-4 last:border-0 last:pb-0 hover:border-[#FF7E28] transition-all duration-300"
    >
      <span className="text-lg md:text-xl font-semibold text-black">
        <span className="text-[#FF7E28]">{index + 1}.</span> {service}
      </span>
      {index === 0 && (
        <div className="w-10 h-10 flex items-center justify-center text-black rounded-full group-hover:scale-110 transition-transform duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      )}
    </div>
  ))}
</div>
  </div>
</div>

          {/* Second Vertical Box - Image Slider */}
          <div 
            className="relative h-[600px] md:h-[600px] w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
              {/* Images Container */}
              <div 
                className="flex flex-col h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="min-h-full w-full flex-shrink-0"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Vertical Dots Navigation */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-[#FF7E28] h-8'
                        : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;