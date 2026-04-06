import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1650px] px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 bg-white">
          {/* TOP LEFT */}
          <div className="p-6 lg:p-8">
            <h2 className="font-['Inter_Tight'] text-[34px] md:text-[40px] lg:text-[52px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#2d2d2d]">
              READY TO CREATE
              <br />
              SOMETHING
              <br />
              <span className="text-[#ff7a21]">AMAZING?</span>
            </h2>
          </div>

          {/* TOP MIDDLE (EMPTY) */}
          <div className="hidden lg:block" />

          {/* TOP RIGHT */}
          <div className="p-6 lg:p-8">
            <p className="font-mono text[20px] leading-[1.6] text-[#2d2d2d]">
              How do we connect?
            </p>

            <ul className="mt-3 space-y-2 list-disc pl-5 font-mono text[20px] leading-[1.6] text-[#2d2d2d]">
              <li>We reply within 24 hours</li>
              <li>Direct access to our team, no bots</li>
              <li>We ask smart questions fast</li>
            </ul>
          </div>

          {/* BOTTOM LEFT (EMPTY) */}
          <div className="hidden lg:block" />

          {/* BOTTOM MIDDLE (FORM) */}
          <div className="bg-[#f2f2f2] p-4 lg:p-8 relative z-10 -mt-6 lg:-mt-35">
            <div className="mx-auto w-full max-w-[420px]">
              <h3 className="text-[12px] font-semibold text-[#2d2d2d]">
                Let&apos;s work together
              </h3>

              <form className="mt-4 space-y-3">
                <div>
  
               <label
              htmlFor="name"
               className="sr-only"
              >
               Name
               </label>

                    <input
                  id="name"
                   name="name"
                   type="text"
                   placeholder="Name"
                   className="w-full rounded-md border border-[#e6e6e6] bg-white px-4 py-2.5 text-[12px] text-[#2d2d2d] placeholder:font-mono placeholder:text-[11px] placeholder:text-[#a0a7b4] outline-none focus:ring-2 focus:ring-black/5"
                   />
                    </div>

               <div>
                    <label htmlFor="email" className="sr-only">
                     Email
                       </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                           className="w-full rounded-md border border-[#e6e6e6] bg-white px-4 py-2.5 text-[12px] text-[#2d2d2d] placeholder:font-mono placeholder:text-[11px] placeholder:text-[#a0a7b4] outline-none focus:ring-2 focus:ring-black/5"
                             />
                    </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] leading-[1.6] text-[#2d2d2d]">
                      Project Budget*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your budget"
                      className="mt-2 w-full rounded-md border border-[#e6e6e6] bg-white px-4 py-2.5 text-[12px] text-[#2d2d2d] placeholder:text-[#a0a7b4] outline-none focus:ring-2 focus:ring-black/5"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] leading-[1.6] text-[#2d2d2d]">
                      Service you are taking*
                    </label>
                    <select className="mt-2 w-full rounded-md border border-[#e6e6e6] bg-white px-4 py-2.5 text-[12px] text-[#2d2d2d] outline-none focus:ring-2 focus:ring-black/5">
                      <option>UI/UX Design</option>
                      <option>Web Design</option>
                      <option>Development</option>
                      <option>Branding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] leading-[1.6] text-[#2d2d2d]">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us your story"
                    className="mt-2 min-h-[110px] w-full resize-none rounded-md border border-[#e6e6e6] bg-white px-4 py-2.5 text-[12px] text-[#2d2d2d] placeholder:text-[#a0a7b4] outline-none focus:ring-2 focus:ring-black/5"
                  />
                </div>

                <button
                  type="button"
                  className="mt-1 w-full rounded-xl bg-[#2d2d2d] px-6 py-3 text-[12px] font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                >
                  Submit
                </button>

                <p className="pt-2 text-center font-mono text-[10px] leading-[1.6] text-[#a0a7b4]">
                  Do you prefer email?{" "}
                  <span className="text-[#2d2d2d]">agencyname@gmail.com</span>
                </p>
              </form>
            </div>
          </div>

          {/* BOTTOM RIGHT (EMPTY) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;