'use client';

import { useState, useEffect, useRef } from "react";

const phrases = [
  ["Transform", "Your Business", "with", "Technology"],
  ["We", "Design", "Digital", "Success", "Stories"],
  ["Launch", "Your", "Dream", "Project", "Today"],
  ["Your", "Vision", "Powered", "by", "Experts"],
];

const TaglineOverlay = () => {
  const [index, setIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const effectContainerRef = useRef(null);

  // Fix hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMounted]);

  const handleMouseMove = (e) => {
    const container = effectContainerRef.current;
    if (!container) return;

    const ripple = document.createElement("div");
    ripple.className = "ripple-effect";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  const current = phrases[index];

  return (
    <>
      {/* Section 1: Banner */}
      <div
        className="relative w-full h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
        ref={effectContainerRef}
      >
        <video
          src="/bnner.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {hasMounted && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
            <div className="text-white text-center space-y-3 transition-opacity duration-700 ease-in-out">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="text-amber-400">{current[0]}</span>
                <span>{current[1]}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl font-bold text-red-900">
                {current[2] && <span>{current[2]}</span>}
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl font-bold">
                {current[3] && <span>{current[3]}</span>}
                {current[4] && <span>{current[4]}</span>}
              </div>
            </div>
          </div>
        )}
      </div>

      
     
      <style>{`
        .ripple-effect {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(129, 213, 232, 0.4), transparent);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple-animation 1.2s ease-out forwards;
          z-index: 30;
        }

        @keyframes ripple-animation {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0);
          }
          70% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(2.5);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(4);
          }
        }

        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .service-card {
          transition: all 0.3s ease-in-out;
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .floating-animation {
          animation: floating 6s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(-25px) rotate(-1deg); }
        }

        .dots-animation {
          animation: dots-twinkle 3s ease-in-out infinite;
        }

        @keyframes dots-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        .glow-effect {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }

        .text-gradient {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};


export default TaglineOverlay;