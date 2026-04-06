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
    socials: {
      ig: "https://instagram.com",
      x: "https://x.com",
      in: "https://linkedin.com",
      f: "https://facebook.com",
    },
  },
  {
    name: "Alex Lee",
    role: "Senior Developer",
    image: Team2,
    route: "/team/alex-lee",
    socials: {
      ig: "https://instagram.com",
      x: "https://x.com",
      in: "https://linkedin.com",
      f: "https://facebook.com",
    },
  },
  {
    name: "Amenda Reed",
    role: "Founder and CEO",
    image: Team3,
    route: "/team/amenda-reed",
    socials: {
      ig: "https://instagram.com",
      x: "https://x.com",
      in: "https://linkedin.com",
      f: "https://facebook.com",
    },
  },
  {
    name: "Ben Stones",
    role: "Project Manager",
    image: Team4,
    route: "/team/ben-stones",
    socials: {
      ig: "https://instagram.com",
      x: "https://x.com",
      in: "https://linkedin.com",
      f: "https://facebook.com",
    },
  },
  {
    name: "Aleksandor",
    role: "Senior Designer",
    image: Team5,
    route: "/team/aleksandor",
    socials: {
      ig: "https://instagram.com",
      x: "https://x.com",
      in: "https://linkedin.com",
      f: "https://facebook.com",
    },
  },
];

const TeamSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1650px] px-4">

        {/* ✅ GAP BARANO HOYESE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Intro Block */}
          <div className="flex flex-col justify-center bg-white px-6 py-10 min-h-[340px]">
              <h2 className="font-inter_tight text-[40px] md:text-[57px] font-semibold leading-[1.20] tracking-[-0.06em] text-[#2d2d2d] max-w-[760px]">
              People{" "}
              <span className="text-[#ff7a21] ">Who Make</span>
              <br />
              <span className="text-[#ff7a21] ">Ideas</span> Happen
            </h2>

            <p className="mt-8 max-w-[220px] text-[13px]  leading-[1.6] text-[#a0a7b4]">
              Small team, big outcomes. We partner closely with clients to move
              fast and make things that matter.
            </p>
          </div>

          {/* Team Cards */}
          {members.map((member, index) => (
            <div
              key={index}
              onClick={() => navigate(member.route)}
              className="relative min-h-[340px] overflow-hidden rounded-md bg-[#dba76e] cursor-pointer group"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

              {/* ✅ Social Icons White React Icons */}
              <div className="absolute left-5 top-5 z-20 flex flex-col gap-4 text-white text-[14px]">
                <a
                  href={member.socials.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#ff7a21] transition-colors duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href={member.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#ff7a21] transition-colors duration-300"
                >
                  <FaXTwitter />
                </a>

                <a
                  href={member.socials.in}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#ff7a21] transition-colors duration-300"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={member.socials.f}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#ff7a21] transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
              </div>

              {/* Name & Role */}
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="text-[15px] font-semibold leading-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-[13px] font-normal leading-tight text-white/90">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;