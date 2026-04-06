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

  const [activeCategory, setActiveCategory] =
    useState<Category>('All Projects');
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
    <section className="relative w-full bg-white py-8">
      <div className="mx-auto max-w-[1650px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] min-h-[650px] gap-35">
          
          {/* Left Panel */}
          <div
            className="flex flex-col justify-between bg-white min-h-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="px-6 pt-6 md:px-6 md:pt-8">
              <h2 className="font-inter_tight text-[40px] md:text-[57px] font-semibold leading-[1.20] tracking-[-0.06em] text-[#2d2d2d] max-w-[760px]">
                Our <span className="text-[#ff7a21]">Work</span> Speaks
                <br />
                <span className="whitespace-nowrap">
                  Louder Than <span className="text-[#ff7a21]">Words</span>
                </span>
              </h2>

              <div className="mt-12 flex max-w-[360px] flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentSlide(0);
                    }}
                    className={`rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-[#262626] text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)]'
                        : 'bg-[#e9ebf0] text-[#aab2c2] hover:bg-[#dfe4eb]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 pb-6 pt-8 md:px-6 md:pb-8">
              <div className="space-y-10">
                <div>
                  <p className="text-[20px] font-medium tracking-[-0.03em] text-[#aab3c5]">
                    {currentProject?.title}
                  </p>
                  <h4 className="mt-1 text-[18px] font-medium tracking-[-0.03em] text-[#222222]">
                    {currentProject?.year}
                  </h4>
                </div>

                <div>
                  <p className="text-[20px] font-medium tracking-[-0.03em] text-[#aab3c5]">
                    For
                  </p>
                  <h4 className="mt-1 text-[18px] font-medium tracking-[-0.03em] text-[#222222]">
                    {currentProject?.client}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className="bg-white p-2 md:p-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative h-full min-h-[560px] w-full overflow-hidden rounded-[14px] bg-black">
              
              {filteredProjects.map((project, index) => (
                <img
                  key={index}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-black/35 z-10" />

              <button
              
                onClick={() => navigate('/portfolio')}
                className="absolute left-5 top-5 z-20 text-[16px] md:left-6 md:top-6 md:text-[18px] font-semibold text-white underline underline-offset-4 hover:text-[#ff7a21] transition-colors duration-300"
              >
                View Projects
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 z-20 flex h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:bg-white/10"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="h-8 w-8" strokeWidth={1.8} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 z-20 flex h-[72px] w-[72px] -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:bg-white/10"
                aria-label="Next Slide"
              >
                <ArrowRight className="h-8 w-8" strokeWidth={1.8} />
              </button>

              <div className="absolute bottom-8 left-5 z-20 flex items-center gap-4 md:left-6">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-[13px] w-[13px] rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-white'
                        : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-2 left-[18%] z-20 text-[64px] font-bold leading-none text-[#b45309] opacity-90">
                ×
              </div>

              <div className="absolute bottom-2 right-[14%] z-20 text-[64px] font-bold leading-none text-[#b45309] opacity-90">
                ×
              </div>

              <div className="absolute right-[25%] top-[65%] z-20 h-16 w-[2px] bg-[#ff7a21]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;