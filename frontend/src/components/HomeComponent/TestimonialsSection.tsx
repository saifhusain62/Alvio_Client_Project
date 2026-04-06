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
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1650px] px-4 py-10">
        {/* No border wrapper */}
        <div className="bg-white">
          {/* Header row (3 columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left header */}
            <div className="p-10 lg:p-12">
              <h2 className="font-['Inter_Tight'] text-[44px] md:text-[52px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#2d2d2d]">
                People <span className="text-[#ff7a21]">Who Make</span>
                <br />
                <span className="text-[#ff7a21]">Ideas</span> Happen
              </h2>

              <p className="mt-10 max-w-[270px] font-mono text-[11px] leading-[1.6] text-[#a0a7b4]">
                Small team, big outcomes. We partner closely with clients to move fast
                and make things that matter.
              </p>
            </div>

            {/* Middle header: empty */}
            <div className="hidden lg:block" />

            {/* Right header */}
            <div className="p-10 lg:p-12">
              <p className="max-w-[320px] font-mono text-[11px] leading-[1.6] text-[#2d2d2d]">
                Our work doesn’t end at delivery, it begins there. We craft experiences that
                drive measurable results, and our clients notice the difference.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {testimonials.map((t, idx) => {
              const row = Math.floor(idx / 3);
              const col = idx % 3;
              const isGrey = (row + col) % 2 === 0; // checkerboard
              const bg = isGrey ? "bg-[#f2f2f2]" : "bg-white";

              return (
                <div
                  key={idx}
                  className={`p-10 lg:p-12 min-h-[260px] ${bg}`}
                >
                  <p className="text-[13px] leading-[1.7] text-[#2d2d2d]">
                    “{t.quote}”
                  </p>

                  <div className="mt-7">
                    <Stars />
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[12px] font-semibold text-[#2d2d2d] leading-none">
                        {t.name}
                      </p>
                      <p className="mt-1 text-[11px] text-[#9aa3b2] leading-none">
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