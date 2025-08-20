'use client'
import { useState } from 'react';
import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiZoho, SiAngular } from 'react-icons/si';

const technologies = {
  frontend: [
    { 
      name: 'HTML', 
      usedFor: 'Markup', 
      icon: <SiHtml5 className="text-orange-600 w-12 h-12" />,
      description: "HTML (HyperText Markup Language) is the standard markup language for creating web pages, structuring content like text, images, and links."
    },
    { 
      name: 'CSS', 
      usedFor: 'Styling', 
      icon: <SiCss3 className="text-blue-600 w-12 h-12" />,
      description: "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling design elements like colors, fonts, and spacing."
    },
    { 
      name: 'JavaScript', 
      usedFor: 'Dynamic behavior', 
      icon: <SiJavascript className="text-yellow-400 w-12 h-12" />,
      description: "JavaScript is a programming language that adds interactivity and dynamic content to websites, such as animations, form validation, and API calls."
    },
    { 
      name: 'React', 
      usedFor: 'Frontend library', 
      icon: <FaReact className="text-blue-400 w-12 h-12" />,
      description: "React is a JavaScript library for building user interfaces, enabling the creation of reusable components for dynamic web applications."
    },
    { 
      name: 'Next.js', 
      usedFor: 'SSR & Routing', 
      icon: <SiNextdotjs className="text-black w-12 h-12" />,
      description: "Next.js is a React framework that supports server-side rendering, static site generation, and simplified routing for performant web apps."
    },
    { 
      name: 'Tailwind CSS', 
      usedFor: 'Utility-first CSS', 
      icon: <SiTailwindcss className="text-cyan-500 w-12 h-12" />,
      description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces with pre-defined classes."
    },
    { 
      name: 'TypeScript', 
      usedFor: 'Typed JS', 
      icon: <SiTypescript className="text-blue-700 w-10 h-10" />,
      description: "TypeScript is a superset of JavaScript that adds static typing, improving code reliability and maintainability in large-scale applications."
    },
    { 
      name: 'Redux', 
      usedFor: 'State management', 
      icon: <SiRedux className="text-purple-600 w-10 h-10" />,
      description: "Redux is a predictable state management library for JavaScript apps, commonly used with React for managing complex application states."
    },
    { 
      name: 'Angular', 
      usedFor: 'Frontend framework', 
      icon: <SiAngular className="text-red-600 w-10 h-10" />,
      description: "Angular is a full-fledged frontend framework for building dynamic, single-page web applications with a strong focus on structure and scalability."
    },
  ],
  backend: [
    { 
      name: 'Node.js', 
      usedFor: 'Server-side JS', 
      icon: <FaNodeJs className="text-green-600 w-12 h-12" />,
      description: "Node.js is a runtime environment that allows JavaScript to run on the server side, enabling scalable backend development."
    },
    { 
      name: 'Express.js', 
      usedFor: 'Web Framework', 
      icon: <SiExpress className="text-gray-700 w-12 h-12" />,
      description: "Express.js is a minimal and flexible Node.js web framework that simplifies the development of server-side applications and APIs."
    },
    { 
      name: 'MongoDB', 
      usedFor: 'Database', 
      icon: <SiMongodb className="text-green-700 w-12 h-12" />,
      description: "MongoDB is a NoSQL database that stores data in JSON-like documents, ideal for scalable and flexible data storage."
    },
  ],
  crm: [
    { 
      name: 'Zoho CRM', 
      usedFor: 'Customer Management', 
      icon: <SiZoho className="text-red-600 w-12 h-12" />,
      description: "Zoho CRM is a cloud-based platform for managing customer relationships, sales, and business processes efficiently."
    },
    { 
      name: 'WordPress', 
      usedFor: 'Website & CRM', 
      icon: <FaWordpress className="text-blue-700 w-12 h-12" />,
      description: "WordPress is a versatile content management system used for building websites and integrating CRM functionalities."
    },
  ]
};

const TechCard = ({ tech, onClick }) => (
  <div 
    onClick={() => onClick(tech)} 
    className="cursor-pointer bg-gradient-to-br bg-white rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300"
  >
    <div className="mb-3">{tech.icon}</div>
    <h3 className="text-lg font-bold text-black">{tech.name}</h3>
    <span className="mt-2 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tech.usedFor}</span>
  </div>
);

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleBack = () => {
    setSelectedTech(null);
  };

  // Render only the details view when a technology is selected
  if (selectedTech) {
    return (
      <div className="min-h-screen bg-black py-16 px-6 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-gray-900 shadow-lg rounded-xl p-8">
          <div className="flex items-center mb-4">
            <div className="mr-4">{selectedTech.icon}</div>
            <h1 className="text-3xl font-bold text-white">{selectedTech.name}</h1>
          </div>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm mb-4 inline-block">
            {selectedTech.usedFor}
          </span>
          <p className="text-gray-300 mt-4">{selectedTech.description}</p>
          <button
            onClick={handleBack}
            className="mt-6 inline-block text-blue-400 hover:underline font-medium"
          >
            Back to Technologies
          </button>
        </div>
      </div>
    );
  }

  // Render the main technology grid when no technology is selected
  return (
    <div className="min-h-screen bg-gradient-to-br  from-000203 to-gray-900 py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-12">Technologies We Use</h1>

      {/* Frontend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Frontend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.frontend.map((tech) => (
            <TechCard key={tech.name} tech={tech} onClick={setSelectedTech} />
          ))}
        </div>
      </section>  

      {/* Backend */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">Backend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.backend.map((tech) => (
            <TechCard key={tech.name} tech={tech} onClick={setSelectedTech} />
          ))}
        </div>
      </section>

      {/* CRM */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-white">CRM</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.crm.map((tech) => (
            <TechCard key={tech.name} tech={tech} onClick={setSelectedTech} />
          ))}
        </div>
      </section>
    </div>
  );
}