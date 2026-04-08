// TestimonialsSection.tsx
import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "They didn’t just give us a logo; they built a brand identity that truly reflects who we are. Now, our visuals feel consistent across every channel.",
    name: "Elena M.",
    title: "Founder, Bloom Studio",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote:
      "They transformed a complex dashboard into a simple, elegant interface. Our team productivity jumped immediately after launch.",
    name: "James K.",
    title: "COO, Atlas Logistics",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote:
      "The website they built is fast, responsive, and scalable. Since launch, our online sales have grown by 62%.",
    name: "Ayesha M.",
    title: "E-commerce Owner, Trendora",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    quote:
      "We needed a custom site with integrations, and they delivered flawlessly. The performance and security are rock-solid.",
    name: "Noah C",
    title: "CEO, FinEdge Solutions",
    avatar: "https://i.pravatar.cc/80?img=60",
  },
  {
    quote:
      "The new app design is so intuitive that even first-time users navigate it without guidance. Our customer support tickets dropped by 40% in the first month.",
    name: "Sofia R.",
    title: "Product Manager, VeloPay",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote:
      "Our rebrand gave us the confidence to pitch bigger clients. The guidelines they created keep our messaging sharp and recognizable everywhere.",
    name: "David L.",
    title: "Marketing Director, Northline Tech",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
];

const Stars = () => (
  <div className="flex items-center gap-1 text-[#ff7a21] text-[12px] leading-none">
    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden py-12">
      
      <div className="mx-auto max-w-[1600px] border-x border-gray-100">
        
        <div className="bg-white">
          {/* Header row (3 columns) with borders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-gray-100 border-t border-gray-100">
            {/* Left header */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
             
              <h2  data-aos="fade-down" 
    className="font-sans text-[34px] md:text-[52px] lg:text-[62px] xl:text-[55px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]">
                Voice of <br />
                <span className="text-[#ff7a21]">Our Happy</span> <br />
                Partners
              </h2>

              <p className="mt-8 max-w-[270px] font-mono text-[12px] leading-[1.6] text-gray-500">
                Small team, big outcomes. We partner closely with clients to move fast
                and make things that matter.
              </p>
            </div>

            {/* Middle header: empty decorative box */}
            <div className="hidden lg:block bg-[#fcfcfc]/50" />

            {/* Right header */}
            <div className="p-10 lg:p-14 flex items-end justify-start border-b lg:border-b-0 border-gray-100">
              <p className="max-w-[320px] font-mono text-[13px] leading-relaxed text-[#2d2d2d] italic border-l-2 border-[#ff7a21] pl-6">
                "Our work doesn’t end at delivery, it begins there. We craft experiences that
                drive measurable results."
              </p>
            </div>
          </div>

          {/* Cards grid with Divide Borders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-y divide-gray-100 border-t border-b border-gray-100">
            {testimonials.map((t, idx) => {
              const row = Math.floor(idx / 3);
              const col = idx % 3;
              const isGrey = (row + col) % 2 === 0; 
              
              const bg = isGrey ? "bg-[#fcfcfc]" : "bg-white";

              return (
                <div
                  key={idx}
                  className={`p-10 lg:p-14 min-h-[320px] transition-all duration-300 hover:bg-[#fffaf7] group ${bg}`}
                >
                  <p className="text-[15px] leading-[1.8] text-[#2d2d2d] font-medium italic">
                    “{t.quote}”
                  </p>

                  <div className="mt-8">
                    <Stars />
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md transition-transform group-hover:scale-110"
                    />
                    <div>
                      <p className="text-[14px] font-bold text-[#2d2d2d] leading-none">
                        {t.name}
                      </p>
                      <p className="mt-1.5 text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;