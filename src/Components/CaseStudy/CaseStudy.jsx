import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const CaseStudy = ({ title, subtitle, problem, solution, role, impact, videoUrl }) => {
  const navigate = useNavigate();

  const handleBackToAutomations = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("automations")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FEEAC9]">
      <Header />

      {/* Hero Video Section */}
      <section className="pt-24 pb-10 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold font-heading mb-4">
              {title}
            </h1>
            <p className="text-lg sm:text-xl font-body text-gray-700">
              {subtitle}
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-center text-white p-8">
                <p className="text-2xl font-heading mb-2">Demo Video</p>
                <p className="text-gray-400 font-body">Coming Soon</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-10 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {/* Problem */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold font-heading text-yellow-600 mb-4">
              The Problem
            </h2>
            <p className="font-body leading-relaxed text-lg">
              {problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold font-heading text-yellow-600 mb-4">
              The Solution
            </h2>
            <p className="font-body leading-relaxed text-lg">
              {solution}
            </p>
          </div>

          {/* My Role */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold font-heading text-yellow-600 mb-4">
              My Role
            </h2>
            <p className="font-body leading-relaxed text-lg">
              {role}
            </p>
          </div>

          {/* Impact */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold font-heading text-yellow-600 mb-4">
              Expected Impact
            </h2>
            <ul className="font-body leading-relaxed text-lg list-disc list-inside space-y-2">
              {impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center pt-4 pb-8">
            <button
              onClick={handleBackToAutomations}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-bold font-body hover:bg-yellow-600 transition-colors duration-300 inline-block"
            >
              Back to Automations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
