// TeamSection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

import Team1 from "../../assets/team-1.png";
import Team2 from "../../assets/team-2.png";
import Team3 from "../../assets/team-3.png";
import Team4 from "../../assets/team-4.png";
import Team5 from "../../assets/team-1.png";

interface MemberType {
  name: string;
  role: string;
  image: string;
  route: string;
  socials: {
    ig: string;
    x: string;
    in: string;
    f: string;
  };
}

const members: MemberType[] = [
  {
    name: "Jenny William",
    role: "Co-founder and COO",
    image: Team1,
    route: "/team/jenny-william",
    socials: { ig: "#", x: "#", in: "#", f: "#" },
  },
  {
    name: "Alex Lee",
    role: "Senior Developer",
    image: Team2,
    route: "/team/alex-lee",
    socials: { ig: "#", x: "#", in: "#", f: "#" },
  },
  {
    name: "Amenda Reed",
    role: "Founder and CEO",
    image: Team3,
    route: "/team/amenda-reed",
    socials: { ig: "#", x: "#", in: "#", f: "#" },
  },
  {
    name: "Ben Stones",
    role: "Project Manager",
    image: Team4,
    route: "/team/ben-stones",
    socials: { ig: "#", x: "#", in: "#", f: "#" },
  },
  {
    name: "Aleksandor",
    role: "Senior Designer",
    image: Team5,
    route: "/team/aleksandor",
    socials: { ig: "#", x: "#", in: "#", f: "#" },
  },
];

const TeamSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white overflow-hidden py-12">
      
      <div className="mx-auto max-w-[1600px] border-x border-gray-100">
        
       
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-gray-100 border-t border-b border-gray-100">
          
          {/* Intro Block - Column 1 */}
          <div className="flex flex-col justify-center bg-white p-10 lg:p-14 min-h-[400px]">
            <h2  data-aos="fade-down" 
    className="font-sans text-[34px] md:text-[52px] lg:text-[62px] xl:text-[55px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a]">
              People <br />
              <span className="text-[#ff7a21]">Who Make</span> <br />
              <span className="text-[#ff7a21]">Ideas</span> Happen
            </h2>

            <p className="mt-8 max-w-[250px] font-mono text-[13px] leading-relaxed text-gray-500">
              Small team, big outcomes. We partner closely with clients to move
              fast and make things that matter.
            </p>
          </div>

          {/* Team Cards -*/}
          {members.map((member, index) => (
            <div
              key={index}
              className="relative min-h-[400px] flex items-center justify-center p-8 bg-white"
            >
              
              <div 
                onClick={() => navigate(member.route)}
                className="relative w-full h-full overflow-hidden rounded-[24px] bg-[#dba76e] cursor-pointer group shadow-xl shadow-black/5"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />

                {/* Social Icons */}
                <div className="absolute left-6 top-6 z-20 flex flex-col gap-4 text-white text-[16px]">
                  <a href={member.socials.ig} onClick={(e) => e.stopPropagation()} className="hover:text-[#ff7a21] transition-all"><FaInstagram /></a>
                  <a href={member.socials.x} onClick={(e) => e.stopPropagation()} className="hover:text-[#ff7a21] transition-all"><FaXTwitter /></a>
                  <a href={member.socials.in} onClick={(e) => e.stopPropagation()} className="hover:text-[#ff7a21] transition-all"><FaLinkedinIn /></a>
                  <a href={member.socials.f} onClick={(e) => e.stopPropagation()} className="hover:text-[#ff7a21] transition-all"><FaFacebookF /></a>
                </div>

                {/* Name & Role */}
                <div className="absolute bottom-8 left-8 z-10 text-white">
                  <h3 className="text-[18px] font-bold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-mono text-white/80">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

         
          {members.length % 3 !== 2 && (
             <div className="hidden lg:block bg-[#fcfcfc] border-gray-100"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;