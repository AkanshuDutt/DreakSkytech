"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    { id: 1, img: "/design.png", demo: "https://www.dreamskyairways.com/" },
    { id: 2, img: "/aviation.png", demo: "https://airaviationinstitute.in" },
  ];

  return (
    <>
      <Header />

      {/* Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed brightness-75 -z-20"
        style={{ backgroundImage: "url('/projectt.avif')" }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-white-900/80 to-cyan-900/90 -z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-10">
        
        </h1>
{/* Floating Bubbles Animation */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
    {/* Small Bubbles */}
    <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
    <div className="absolute top-40 left-32 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
    <div className="absolute top-60 right-20 w-5 h-5 bg-cyan-400/25 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
    <div className="absolute top-80 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
    <div className="absolute top-96 right-1/3 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
    
    {/* Medium Bubbles */}
    <div className="absolute top-32 right-40 w-6 h-6 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '5s' }}></div>
    <div className="absolute top-72 left-20 w-7 h-7 bg-cyan-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
    <div className="absolute bottom-40 right-16 w-5 h-5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    <div className="absolute bottom-60 left-1/3 w-6 h-6 bg-blue-400/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
    
    {/* Floating Movement Bubbles */}
    <div className="absolute top-24 right-1/4 w-4 h-4 bg-yellow-400/25 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
    <div className="absolute top-56 left-1/2 w-5 h-5 bg-cyan-400/20 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/30 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-72 right-1/2 w-6 h-6 bg-blue-400/15 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    {/* More scattered bubbles */}
    <div className="absolute top-44 left-3/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    <div className="absolute top-88 right-1/5 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
    <div className="absolute bottom-20 left-1/5 w-4 h-4 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
    <div className="absolute bottom-96 right-3/4 w-2 h-2 bg-blue-400/35 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
  </div>

  <h1 className="text-7xl font-bold text-shadow-cyan-600 ">

  </h1>
        {/* Circle Cards */}
        <div className="flex flex-wrap justify-center gap-30 max-w-6xl mx-auto mt-35 mb-20">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-full transform transition-all duration-700 ease-out
                hover:scale-110 border-2 border-indigo-800
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_15px_rgba(0,255,255,0.8)]`}
              style={{
                width: "270px",
                height: "240px",
                transitionDelay: `${index * 150}ms`,
                display: "block",
              }}
            >
              {/* Image */}
              <Image
                src={project.img}
                alt={`Project ${project.id}`}
                fill
                className="object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
