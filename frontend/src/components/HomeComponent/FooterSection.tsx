import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#262626] text-white">
      <div className="mx-auto max-w-[1650px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* LEFT */}
          <div className="min-h-[410px] px-8 py-14 lg:px-10">
            
            <div className="mb-10 grid grid-cols-2 gap-2 w-fit">
              <span className="h-[16px] w-[16px] bg-[#ff7a21]" />
              <span className="h-[16px] w-[16px] bg-[#ff7a21]" />
              <span className="h-[16px] w-[16px] bg-[#ff7a21]" />
              <span className="h-[16px] w-[16px] bg-[#ff7a21]" />
            </div>

            <h3 className="text-[17px] font-semibold">Get In Touch</h3>

            <div className="mt-4 space-y-2">
              <p className="text-[13px] text-[#d6d6d6]">+4328479083</p>
              <p className="text-[13px] text-[#d6d6d6]">
                agencyname@gmail.com
              </p>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <FaInstagram className="hover:text-[#ff7a21] cursor-pointer transition" size={18} />
              <FaXTwitter className="hover:text-[#ff7a21] cursor-pointer transition" size={18} />
              <FaLinkedin className="hover:text-[#ff7a21] cursor-pointer transition" size={18} />
              <FaFacebook className="hover:text-[#ff7a21] cursor-pointer transition" size={18} />
            </div>

            <div className="mt-28">
              <p className="font-mono text-[12px] text-[#b4bcc8]">
                Privacy Policy
              </p>
              <p className="mt-1 text-[13px]">2025</p>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="min-h-[410px] px-8 py-14 lg:px-10">
            <h3 className="text-[17px] font-semibold">Stay Connected</h3>

            <p className="mt-4 max-w-[320px] text-[13px] leading-[1.7] text-[#d6d6d6]">
              Let&apos;s collaborate and bring your ideas to life.
            </p>

            <div className="mt-8">
              <label className="block text-[11px]">Email address*</label>
              <input
                type="email"
                placeholder="noahrahman11@gmail.com"
                className="mt-2 h-[38px] w-full max-w-[330px] rounded-md border border-[#4a4a4a] bg-[#313131] px-4 text-[12px] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-white/10"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative min-h-[410px] px-8 py-14 lg:px-10">
            <h3 className="text-[17px] font-semibold">Main Links</h3>

            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-2 max-w-[260px]">
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">Home</a>
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">Team Members</a>
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">About Us</a>
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">Testimonial</a>
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">Services</a>
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">Contact</a>
              <a href="#" className="text-[13px] text-[#d6d6d6] hover:text-white">Projects</a>
            </div>

            <div className="mt-10 lg:absolute lg:bottom-6 lg:right-10">
              <h2 className="font-['Inter_Tight'] text-[72px] leading-none font-extrabold tracking-[-0.06em] text-[#ff7a21] sm:text-[88px] lg:text-[110px]">
                ARVIO
              </h2>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;