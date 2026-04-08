// WorkSection.tsx
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import sliderImage1 from '../../assets/sliderImage1.png';
import sliderImage2 from '../../assets/sliderImage2.png';
import sliderImage3 from '../../assets/sliderImage3.png';

type Category =
  | 'All Projects'
  | 'Branding & Identity'
  | 'Web Development'
  | 'UI/UX Design';

interface ProjectType {
  title: string;
  year: string;
  client: string;
  category: Category;
  image: string;
  route?: string;
}

const categories: Category[] = [
  'All Projects',
  'Branding & Identity',
  'Web Development',
  'UI/UX Design',
];

const projects: ProjectType[] = [
  {
    title: 'Branding',
    year: '2024',
    client: 'Earth Agency',
    category: 'Branding & Identity',
    image: sliderImage3,
    route: '/projects/branding',
  },
  {
    title: 'Website',
    year: '2024',
    client: 'Nova Studio',
    category: 'Web Development',
    image: sliderImage2,
    route: '/projects/web-development',
  },
  {
    title: 'UI/UX',
    year: '2024',
    client: 'Pixel Agency',
    category: 'UI/UX Design',
    image: sliderImage1,
    route: '/projects/ui-ux',
  },
];

const WorkSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('All Projects');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') return projects;
    return projects.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!filteredProjects.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredProjects]);

  const currentProject = filteredProjects[currentSlide] || filteredProjects[0];

  const handlePrev = () => {
    if (!filteredProjects.length) return;
    setCurrentSlide((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!filteredProjects.length) return;
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-12">
     
      <div className="mx-auto max-w-[1600px] border-x border-gray-100">
        
       
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] min-h-[650px] divide-x divide-gray-100 border-t border-b border-gray-100">
          
          {/* Left Panel */}
          <div
            className="flex flex-col justify-between bg-white divide-y divide-gray-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Upper Content */}
            <div className="p-10 lg:p-14">
              
              <h2  data-aos="fade-down" 
    className="font-sans text-[34px] md:text-[52px] lg:text-[62px] xl:text-[55px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]">
                Our <span className="text-[#ff7a21]">Work</span> Speaks
                <br />
                Louder Than <span className="text-[#ff7a21]">Words</span>
              </h2>

              <div className="mt-12 flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentSlide(0);
                    }}
                    className={`rounded-[10px] px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-[#262626] text-white shadow-lg shadow-black/10'
                        : 'bg-[#f5f6f8] text-[#aab2c2] hover:bg-[#dfe4eb]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Info - Bottom Part of Left Panel */}
            <div className="p-10 lg:p-14 bg-[#fcfcfc]/50">
              <div className="space-y-10">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#aab3c5]">Project / Year</p>
                  <h4 className="mt-2 text-[20px] font-bold tracking-tight text-[#222222]">
                    {currentProject?.title} — {currentProject?.year}
                  </h4>
                </div>

                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#aab3c5]">Client</p>
                  <h4 className="mt-2 text-[20px] font-bold tracking-tight text-[#222222]">
                    {currentProject?.client}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Slider Area) */}
          <div
            className="bg-white p-6 lg:p-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative h-full min-h-[560px] w-full overflow-hidden rounded-[24px] bg-black shadow-2xl">
              
              {filteredProjects.map((project, index) => (
                <img
                  key={index}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

              <button
                onClick={() => navigate('/portfolio')}
                className="absolute left-8 top-8 z-20 text-[14px] font-bold text-white uppercase tracking-widest border-b border-white/40 hover:text-[#ff7a21] hover:border-[#ff7a21] transition-all duration-300"
              >
                View All Projects
              </button>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#ff7a21] hover:border-[#ff7a21]"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="h-6 w-6" strokeWidth={2} />
                </button>

                <button
                  onClick={handleNext}
                  className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#ff7a21] hover:border-[#ff7a21]"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="h-6 w-6" strokeWidth={2} />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-10 left-10 z-20 flex items-center gap-3">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      currentSlide === index ? 'w-10 bg-[#ff7a21]' : 'w-4 bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Decorative elements from your original code */}
              <div className="absolute bottom-4 right-10 z-20 text-[64px] font-bold leading-none text-[#ff7a21]/20 select-none">×</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;