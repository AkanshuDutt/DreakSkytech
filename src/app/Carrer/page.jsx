"use client";
import React, { useState } from "react";

export default function CareerPage() {
  const [selectedTeam, setSelectedTeam] = useState("All");

  // Job List
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      team: "Engineering",
      location: "Remote",
      description:
        "Work with React, Next.js, and modern frontend technologies to create scalable solutions.",
    },
    {
      id: 2,
      title: "Backend Developer",
      team: "Engineering",
      location: "Bangalore, India",
      description:
        "Design APIs, manage databases, and build scalable services with Node.js and Express.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      team: "Design",
      location: "Delhi, India",
      description:
        "Create seamless user experiences and beautiful interfaces for our applications.",
    },
    {
      id: 4,
      title: "HR Executive",
      team: "HR",
      location: "Noida, India",
      description:
        "Manage recruitment, onboarding, and employee engagement activities.",
    },
    {
      id: 5,
      title: "Marketing Intern",
      team: "Internship",
      location: "Remote",
      description:
        "Assist the marketing team with campaigns, research, and social media growth.",
    },
  ];

  const teams = ["All", "Engineering", "Design", "HR", "Internship"];

  // Filtering Logic
  const filteredJobs =
    selectedTeam === "All"
      ? jobs
      : jobs.filter((job) => job.team === selectedTeam);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Careers at DreamSkyTech</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white">
          Join our mission to innovate and build the future. Explore our open
          positions and start your journey with us.
        </p>
      </section>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 flex-wrap py-8">
        {teams.map((team) => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedTeam === team
                ? "bg-cyan-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Jobs Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs available right now.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {job.team} • {job.location}
                  </p>
                  <p className="mt-3 text-gray-600">{job.description}</p>
                </div>
                <button className="mt-6 w-full bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
                  Apply Now
                </button>
              </div>
            ))} 
          </div>
        )}
      </div>
    </div>
  );
}
