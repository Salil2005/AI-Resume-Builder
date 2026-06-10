import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-50 overflow-hidden bg-slate-50 flex items-center">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-8 text-sm font-medium">
              ✨ Smart Resume Creation with AI
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Build Professional
              <span className="block text-green-800">
                Resumes Faster
              </span>
              With AI
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 mt-8 max-w-xl leading-relaxed">
              Create polished resumes with AI assistance,
              generate professional content instantly,
              customize layouts effortlessly, and export
              high-quality PDF resumes in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/builder"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Build Resume Free
              </Link>

              <Link
                to="/templates"
                className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-md"
              >
                View Templates
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  10+
                </h3>
                <p className="text-slate-500 mt-1">
                  Templates
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  AI
                </h3>
                <p className="text-slate-500 mt-1">
                  Content Assist
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  PDF
                </h3>
                <p className="text-slate-500 mt-1">
                  Export
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="w-full max-w-xl">

              <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 transition duration-500 hover:shadow-3xl">

                {/* Status Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-xl font-medium">
                    <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                    Resume Ready
                  </div>
                </div>

                {/* Resume Header */}
                <div className="border-b border-slate-200 pb-5 mb-5">

                  <h2 className="text-3xl font-bold text-slate-900">
                    John Anderson
                  </h2>

                  <p className="text-green-800 font-medium mt-1">
                    Frontend Developer
                  </p>

                </div>

                {/* Professional Summary */}
                <div className="mb-6">

                  <h3 className="font-semibold text-slate-800 mb-3">
                    Professional Summary
                  </h3>

                  <div className="space-y-2">
                    <div className="h-2 bg-slate-200 rounded-full"></div>
                    <div className="h-2 bg-slate-200 rounded-full"></div>
                    <div className="h-2 bg-slate-200 rounded-full w-4/5"></div>
                  </div>

                </div>

                {/* Experience */}
                <div className="mb-6">

                  <h3 className="font-semibold text-slate-800 mb-3">
                    Experience
                  </h3>

                  <div className="space-y-2">
                    <div className="h-2 bg-slate-200 rounded-full"></div>
                    <div className="h-2 bg-slate-200 rounded-full w-5/6"></div>
                    <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
                  </div>

                </div>

                {/* Skills */}
                <div>

                  <h3 className="font-semibold text-slate-800 mb-3">
                    Skills
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "React",
                      "JavaScript",
                      "Tailwind",
                      "Node.js",
                      "Git",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                {/* AI Status */}
                <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-200">

                  <p className="font-medium text-green-800">
                    AI suggestions generated successfully
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    Summary, experience and skills enhanced
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;