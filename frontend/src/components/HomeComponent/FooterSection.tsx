// FooterSection.tsx
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../../assets/logo.png'
import ALVIOLogo from '../../assets/ARVIO.png'

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white overflow-hidden">
      {/* Main Grid Container matching the whole site style */}
      <div className="mx-auto max-w-[1500px] border-x border-white/5">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5 border-t border-white/5">
          
          {/* LEFT COLUMN: Brand & Socials */}
          <div className="p-10 lg:p-14 flex flex-col justify-between min-h-[400px]">
            <div>
              {/* Logo dots matching brand accent */}
              <div className="mb-10 grid grid-cols-2 gap-1.5 w-fit">
                <img src={Logo} alt="Logo" className="h-8 w-auto" />
              </div>

              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-6"># Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-[18px] font-medium">+880 1234 567 890</p>
                <p className="text-[18px] font-medium text-gray-400 hover:text-[#ff7a21] transition-colors cursor-pointer">
                  hello@arvio.agency
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <FaInstagram className="text-gray-500 hover:text-[#ff7a21] cursor-pointer transition-all hover:scale-110" size={20} />
                <FaXTwitter className="text-gray-500 hover:text-[#ff7a21] cursor-pointer transition-all hover:scale-110" size={20} />
                <FaLinkedin className="text-gray-500 hover:text-[#ff7a21] cursor-pointer transition-all hover:scale-110" size={20} />
                <FaFacebook className="text-gray-500 hover:text-[#ff7a21] cursor-pointer transition-all hover:scale-110" size={20} />
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600">
                Privacy Policy / Terms
              </p>
              <p className="mt-2 font-mono text-[12px] text-gray-400">© 2026 ARVIO Agency</p>
            </div>
          </div>

          {/* MIDDLE COLUMN: Newsletter */}
          <div className="p-10 lg:p-14 flex flex-col justify-center bg-[#1d1d1d]/50">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-6"># Stay Connected</h3>
            <p className="text-[20px] leading-snug font-medium mb-10 max-w-[280px]">
              Let&apos;s collaborate and bring your ideas to life.
            </p>

            <div className="space-y-4">
              <div className="group">
                <label className="block font-mono text-[10px] uppercase text-gray-600 mb-2 ml-1">Email address*</label>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#ff7a21] transition-all"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-[#ff7a21] text-black text-[10px] font-bold px-4 rounded-lg uppercase tracking-wider hover:bg-white transition-colors">
                        Join
                    </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Navigation & Large Branding */}
          <div className="p-10 lg:p-14 flex flex-col justify-between relative min-h-[450px]">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-8"># Navigation</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {['Home', 'About Us', 'Services', 'Projects', 'Team', 'Testimonial', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="text-[14px] font-medium text-gray-400 hover:text-[#ff7a21] transition-colors">
                        {item}
                    </a>
                ))}
              </div>
            </div>

            {/* Giant Background Text effect */}
            <div className="mt-12  px-10 h-full  justify-end min-w-[800px]">
              <img src={ALVIOLogo} alt="ARVIO" className="h-30 w-auto opacity-100" />
            </div>
          </div>

        </div>

        {/* Bottom decorative bar */}
        <div className="h-1 bg-gradient-to-r from-[#ff7a21] via-[#ff7a21]/50 to-transparent opacity-20" />
      </div>
    </footer>
  );
};

export default FooterSection;