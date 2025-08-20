"use client";
import Image from "next/image";
import { useState } from "react";

const Team = [
  {
    name: "Ravi Choudhary",
    role: "Manager",
    image1: "/ravi.jpg",
    // image2: "/ravi2.jpg",
    description:
      "I am Ravi Choudhary, Manager at DreamSkyTech. I focus on building strong client relationships, ensuring smooth operations, and motivating our team to achieve excellence. My leadership style is based on collaboration, transparency, and growth. At DreamSkyTech, I take pride in delivering quality and setting new benchmarks. Guiding the team towards success is my core strength.",
  },
  {
    name: "Suman Srivas",
    role: "Human Resources",
    image1: "/hr1.jpg",
    // image2: "/suman2.jpg",
    description:
      "I am Suman Srivas, HR at DreamSkyTech. My role is to nurture talent, maintain a positive workplace, and ensure every team member feels valued. I believe people are the real strength of any organization. At DreamSkyTech, I focus on growth, inclusivity, and support. Creating harmony between professional and personal goals is my mission.",
  },
  {
    name: "Harshit Pathak",
    role: "Senior Sales Executive",
    image1: "/harshit.jpg",
    // image2: "/harshit2.jpg",
    description:
      "I am Harshit Pathak, Senior Sales Executive at DreamSkyTech. My expertise lies in understanding customer needs and delivering solutions that create value. I aim to build trust and long-term partnerships with clients. With dedication and strategy, I help the company achieve its sales milestones. Every deal I close is a step towards mutual success.",
  },
  {
    name: "Akanshu Dutt",
    role: "Full Stack Developer",
    image1: "/professnal image.jpg",
    // image2: "/professnal2.jpg",
    description:
      "I am Akanshu Dutt, Full Stack Developer at DreamSkyTech. I specialize in building modern web applications that combine clean design with robust functionality. My focus is always on scalable solutions and seamless user experiences. At DreamSkyTech, I contribute by blending creativity with technology. I believe in learning, evolving, and innovating every day.",
  },
  {
    name: "Pragya Raj",
    role: "Full Stack Developer",
    image1: "/pragya.jpg",
    // image2: "/pragya2.jpg",
    description:
      "I am Pragya Raj, Full Stack Developer at DreamSkyTech. My passion is coding and crafting impactful applications that make a difference. At DreamSkyTech, I work with cutting-edge technologies to deliver reliable and scalable solutions. I enjoy problem-solving and transforming ideas into reality. I take pride in contributing to a company that values innovation and excellence.",
  },
  {
    name: "Azad",
    role: "Sales Team Leader",
    image1: "/azad.jpg",
    // image2: "/azad2.jpg",
    description:
      "I am Azad, Sales Team Leader at DreamSkyTech. I lead with a vision to inspire my team and achieve extraordinary sales targets. Building strategies, mentoring colleagues, and driving results are my strengths. DreamSkyTech has given me the platform to grow and create an impact. I strive to keep our team motivated and client-focused.",
  },
  {
    name: "Shivani",
    role: "Sales Executive",
    image1: "/shivani.jpg",
    // image2: "/shivani2.jpg",
    description:
      "I am Shivani, Sales Executive at DreamSkyTech. My approach is client-first, ensuring every customer feels valued and understood. I focus on building trust and creating solutions that benefit both the client and the company. At DreamSkyTech, I enjoy being part of a dynamic and energetic team. My goal is to grow and make meaningful contributions.",
  },
  {
    name: "Mukul",
    role: "Sales Executive",
    image1: "/mukul.jpg",
    // image2: "/mukul2.jpg",
    description:
      "I am Mukul, Sales Executive at DreamSkyTech. I enjoy communicating with clients and providing solutions that align with their needs. My role involves listening, advising, and ensuring satisfaction. DreamSkyTech empowers me to push boundaries and grow every day. I look forward to achieving great milestones with my team.",
  },
  {
    name: "Akshay",
    role: "Sales Executive",
    image1: "/aksh.jpg",
    // image2: "/aksh2.jpg",
    description:
      "I am Akshay, Sales Executive at DreamSkyTech. My strength lies in connecting with clients and closing deals that create win-win outcomes. At DreamSkyTech, I have learned the value of dedication, teamwork, and innovation. I am passionate about contributing to the company’s success. My vision is to grow and evolve as a trusted sales professional.",
  },
];

// Duplicate for infinite scroll
const infiniteTeam = [...Team, ...Team, ...Team];

export default function TeamPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-000203 py-16 px-6 overflow-hidden relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Meet Our Team
      </h1>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {infiniteTeam.map((member, index) => (
              <div
                key={index}
                className="w-[300px] flex-shrink-0 px-4 flex justify-center"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`bg-cyan-100 rounded-2xl shadow-xl transition-all duration-500 text-center p-6 
                    flex flex-col items-center group w-full max-w-sm
                    transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl
                    ${hoveredCard === index ? 'bg-gradient-to-br from-cyan-50 to-blue-50' : ''} cursor-pointer`}
                  onClick={() => setSelectedMember(member)} // Entire card clickable
                >
                  <div className="w-40 h-40 relative mb-4">
                    <Image
                      src={member.image1}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-2 border-cyan-900 shadow-md"
                    />
                  </div>

                  <h2
                    className={`text-xl font-semibold text-gray-800 mb-2 relative 
                    transition-all duration-300 transform
                    ${hoveredCard === index ? 'text-cyan-100 scale-105' : ''}`}
                  >
                    {member.name}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500
                        transition-all duration-500 transform -translate-x-1/2
                        ${hoveredCard === index ? 'w-full' : 'w-0'}`}
                    ></span>
                  </h2>

                  <p
                    className={`text-cyan-600 transition-all duration-300
                    ${hoveredCard === index ? 'text-cyan-800 font-medium' : ''}`}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for details */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <Image
              src={selectedMember.image1}
              alt={selectedMember.name}
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 border-2 border-cyan-800 shadow-md"
            />
            <h2 className="text-2xl font-bold text-cyan-700 mb-2">
              {selectedMember.name}
            </h2>
            <p className="text-gray-600 font-medium mb-4">{selectedMember.role}</p>
            <p className="text-gray-700 leading-relaxed">{selectedMember.description}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * 9));
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
