"use client"; // This marks the component as a Client Component

import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaAngular, FaJava, FaPython, FaPhp, FaSwift, FaDocker, FaAws, FaGoogle, FaMicrosoft, FaRobot, FaShieldAlt, FaDatabase, FaGitAlt, FaEthereum, FaCode, FaSearchDollar, FaMailBulk, FaChartBar, FaCloud, FaBrain, FaLock, FaChartLine, FaTools, FaCoins, FaAndroid, FaApple, FaNodeJs } from 'react-icons/fa'; // Install with: npm install react-icons

interface Service {
  name: string;
  technologies: string[];
}

export const Technology = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const services: Service[] = [
    {
      name: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Vue.js', 'Angular'],
    },
    {
      name: 'Software Development',
      technologies: ['Java', 'Python', 'C++', 'C#', '.NET', 'Ruby', 'PHP', 'Go', 'Swift'],
    },
    {
      name: 'Digital Marketing',
      technologies: ['SEO', 'PPC', 'Social Media Marketing', 'Email Marketing', 'Content Marketing', 'Google Analytics', 'SEM'],
    },
    {
      name: 'Mobile App Development',
      technologies: ['Android', 'iOS', 'Flutter', 'React Native', 'Kotlin', 'Swift', 'Xamarin'],
    },
    {
      name: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Serverless'],
    },
    {
      name: 'AI & Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning', 'Keras'],
    },
    {
      name: 'Cybersecurity',
      technologies: ['Firewall', 'Encryption', 'VPN', 'Ethical Hacking', 'SIEM', 'Penetration Testing', 'IDS/IPS'],
    },
    {
      name: 'Data Analytics',
      technologies: ['SQL', 'Tableau', 'Power BI', 'Big Data', 'Hadoop', 'Spark', 'R', 'Python Pandas'],
    },
    {
      name: 'DevOps',
      technologies: ['Jenkins', 'Git', 'CI/CD', 'Ansible', 'Puppet', 'Chef', 'Monitoring Tools'],
    },
    {
      name: 'Blockchain',
      technologies: ['Ethereum', 'Solidity', 'Hyperledger', 'Smart Contracts', 'Cryptocurrency', 'NFT'],
    },
  ];

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'HTML': FaHtml5,
    'CSS': FaCss3Alt,
    'JavaScript': FaJsSquare,
    'React': FaReact,
    'Next.js': FaNodeJs, // Using Node.js icon as a proxy for Next.js
    'Tailwind CSS': FaCode, // No specific icon, using code as default
    'Bootstrap': FaCode, // No specific icon
    'Vue.js': FaVuejs,
    'Angular': FaAngular,
    'Java': FaJava,
    'Python': FaPython,
    'C++': FaCode, // No specific icon
    'C#': FaCode, // No specific icon
    '.NET': FaMicrosoft, // Using Microsoft as a proxy
    'Ruby': FaCode, // No specific icon
    'PHP': FaPhp,
    'Go': FaCode, // No specific icon
    'Swift': FaSwift,
    'SEO': FaSearchDollar,
    'PPC': FaChartBar, // Using chart as a proxy
    'Social Media Marketing': FaMailBulk, // Using mail as a proxy
    'Email Marketing': FaMailBulk,
    'Content Marketing': FaCode, // No specific icon
    'Google Analytics': FaChartBar,
    'SEM': FaSearchDollar,
    'Android': FaAndroid,
    'iOS': FaApple,
    'Flutter': FaCode, // No specific icon
    'React Native': FaReact, // Using React as a proxy
    'Kotlin': FaCode, // No specific icon
    'Xamarin': FaCode, // No specific icon
    'AWS': FaAws,
    'Azure': FaMicrosoft,
    'Google Cloud': FaGoogle,
    'Docker': FaDocker,
    'Kubernetes': FaCode, // No specific icon
    'Terraform': FaCode, // No specific icon
    'Serverless': FaCloud, // Using cloud as a proxy
    'TensorFlow': FaRobot,
    'PyTorch': FaRobot, // Using robot as a proxy
    'Scikit-learn': FaCode, // No specific icon
    'NLP': FaCode, // No specific icon
    'Computer Vision': FaCode, // No specific icon
    'Deep Learning': FaBrain, // Using brain as a proxy
    'Keras': FaCode, // No specific icon
    'Firewall': FaShieldAlt,
    'Encryption': FaLock,
    'VPN': FaLock, // Using lock as a proxy
    'Ethical Hacking': FaShieldAlt, // Using shield as a proxy
    'SIEM': FaShieldAlt, // Using shield as a proxy
    'Penetration Testing': FaShieldAlt, // Using shield as a proxy
    'IDS/IPS': FaShieldAlt, // Using shield as a proxy
    'SQL': FaDatabase,
    'Tableau': FaChartLine, // Using chart as a proxy
    'Power BI': FaChartLine, // Using chart as a proxy
    'Big Data': FaDatabase, // Using database as a proxy
    'Hadoop': FaDatabase, // Using database as a proxy
    'Spark': FaCode, // No specific icon
    'R': FaCode, // No specific icon
    'Python Pandas': FaPython, // Using Python as a proxy
    'Jenkins': FaTools, // Using tools as a proxy
    'Git': FaGitAlt,
    'CI/CD': FaTools, // Using tools as a proxy
    'Ansible': FaTools, // Using tools as a proxy
    'Puppet': FaTools, // Using tools as a proxy
    'Chef': FaTools, // Using tools as a proxy
    'Monitoring Tools': FaChartLine, // Using chart as a proxy
    'Ethereum': FaEthereum,
    'Solidity': FaCode, // No specific icon
    'Hyperledger': FaCode, // No specific icon
    'Smart Contracts': FaCode, // No specific icon
    'Cryptocurrency': FaCoins, // Using coins as a proxy
    'NFT': FaCoins, // Using coins as a proxy
  };

  const getIcon = (tech: string) => {
    const IconComponent = iconMap[tech] || FaCode;
    return <IconComponent className="inline mr-2 text-2xl " />;
  };

  const openPopup = (service: Service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  const openEnquiry = (tech: string) => {
    setSelectedTech(tech);
    closePopup();
  };

  const closeEnquiry = () => {
    setSelectedTech(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted for tech:', selectedTech);
    closeEnquiry();
  };

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-600">Technologies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service: Service, index: number) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-teal-500"
            onClick={() => openPopup(service)}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-cyan-200">{service.name}</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {service.technologies.map((tech: string, i: number) => (
                <li key={i} className="flex items-center">
                  {getIcon(tech)}
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-2xl shadow-teal-500/50 max-w-md w-3/4 h-auto overflow-y-auto flex flex-col items-center justify-start text-white relative">
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-teal-400">{selectedService.name} Technologies</h2>
            <ul className="space-y-3 w-full">
              {selectedService.technologies.map((tech: string, i: number) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-teal-300 hover:underline text-center flex justify-center items-center text-lg"
                  onClick={() => openEnquiry(tech)}
                >
                  {getIcon(tech)}
                  <span className="typing inline-block overflow-hidden border-r-[0.15em] border-solid border-orange-500 whitespace-nowrap animate-typing animate-blink-caret">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl shadow-teal-500/50 max-w-md w-full relative text-white">
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
              onClick={closeEnquiry}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-teal-400">Enquiry for {selectedTech}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-300">Name</label>
                <input type="text" className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-teal-500 bg-gray-800 text-white" required />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-300">Email</label>
                <input type="email" className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-teal-500 bg-gray-800 text-white" required />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-300">Message</label>
                <textarea className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:border-teal-500 bg-gray-800 text-white" rows={4} required></textarea>
              </div>
              <div className="flex justify-center space-x-4">
                <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
                  onClick={closeEnquiry}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};