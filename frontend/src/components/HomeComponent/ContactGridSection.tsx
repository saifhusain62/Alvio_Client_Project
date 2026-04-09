import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Container with thin borders to simulate the grid paper look */}
      <div className="mx-auto max-w-[1500px] border-x border-gray-100">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* TOP LEFT: Heading */}
          <div className="p-10 lg:p-16 border-r border-b border-gray-100 relative min-h-[350px] flex flex-col justify-end">
            <h2  data-aos="fade-down" 
    className="font-sans text-[34px] md:text-[52px] lg:text-[62px] xl:text-[65px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]">
              READY TO CREATE
              <br />
              SOMETHING
              <br />
              <span className="text-[#ff7a21]">AMAZING?</span>
            </h2>
          </div>

          {/* TOP MIDDLE: Empty Grid Cell */}
          <div className="hidden lg:block border-r border-b border-gray-100 bg-white" />

          {/* TOP RIGHT: Info Text */}
          <div className="p-10 lg:p-16 border-b border-gray-100 relative flex flex-col justify-center">
            
            <div className="max-w-[300px]">
              <p className="font-mono text-sm font-bold text-[#2d2d2d] mb-4">
                How do we connect?
              </p>
              <ul className="space-y-3 font-mono text-[14px] leading-relaxed text-gray-500">
                <li className="flex items-start">
                  <span className="mr-2">•</span> We reply within 24 hours
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> Direct access to our team, no bots
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> We ask smart questions fast
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* BOTTOM LEFT: Empty Grid Cell */}
          <div className="hidden lg:block border-r border-gray-100 bg-white" />

          {/* BOTTOM MIDDLE: The Form Card */}
          <div className="border-r border-gray-100 bg-white relative py-12 lg:py-16">
            {/* Inner Grid Lines (for that blueprint effect) */}
            <div className="absolute inset-0 grid grid-cols-2 pointer-events-none opacity-40">
              <div className="border-r border-gray-50"></div>
              <div></div>
            </div>

            <div className="relative z-10 px-6">
              <div className="mx-auto w-full max-w-[440px] bg-[#f2f2f2] p-8 lg:p-10 rounded-[24px] border border-gray-200">
                <h3 className="text-[13px] font-bold text-[#2d2d2d] mb-6">
                  Let&apos;s work together
                </h3>

                <form className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 ml-1">Full name*</label>
                    <input
                      type="text"
                      placeholder="Noah Rahman"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#ff7a21]/10 focus:border-[#ff7a21] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 ml-1">Email address*</label>
                    <input
                      type="email"
                      placeholder="noahrahman11@gmail.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#ff7a21]/10 focus:border-[#ff7a21] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 ml-1">Project Budget*</label>
                      <input
                        type="text"
                        placeholder="Enter budget"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff7a21]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 ml-1">Service*</label>
                      <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff7a21] appearance-none">
                        <option>UI/UX Design</option>
                        <option>Web Design</option>
                        <option>Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 ml-1">Message</label>
                    <textarea
                      placeholder="Tell us your story"
                      className="w-full min-h-[120px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff7a21] resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-2xl bg-[#1a1a1a] py-4 text-[13px] font-bold text-white hover:bg-black transition-all shadow-xl shadow-black/10 active:scale-[0.98]"
                  >
                    Submit
                  </button>

                  <p className="text-center font-mono text-[11px] text-gray-400 pt-4">
                    Do you prefer email?{" "}
                    <span className="text-[#2d2d2d] font-bold">agencyname@gmail.com</span>
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT: Empty Grid Cell */}
          <div className="hidden lg:block bg-white" />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;