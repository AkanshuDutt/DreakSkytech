"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname === "/Project"; 
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    { id: 1, img: "/design.png", demo: "https://www.dreamskyairways.com/" },
    { id: 2, img: "/aviation.png", demo: "https://airaviationinstitute.in" },
  ];
  module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

  return (
    <>
      {isProjectPage && <Header />}

      {/* Background - only for /Project route */}
      {isProjectPage ? (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed brightness-75 -z-20 mt-19"
            style={{ backgroundImage: "url('/projectt.avif')" }}
          />
          <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-white-900/80 to-cyan-900/90 -z-10" />
        </>
      ) : (
        // Blue background for home page
<div className="w-full bg-none py-10 -z-10 text-center">
 <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-red-500 via-yellow-100 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)] animate-fade-in delay-300">
  Our Clients
</h2>
   
</div>    
      )}

      {/* Content */}
      <div
        className={`max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 ${
          isProjectPage ? "my-70" : "mt-10 mb-10"
        }`}
      >
        {isProjectPage && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" />
            <div className="absolute top-40 left-32 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce" />
            <div className="absolute top-60 right-20 w-5 h-5 bg-cyan-400/25 rounded-full animate-bounce" />
            <div className="absolute top-80 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-bounce" />
            <div className="absolute top-96 right-1/3 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" />
          </div>
        )}

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
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

      {/* Footer - only on /Project */}
      {isProjectPage && <Footer />}
    </>
  );
}
