import React from "react";
import { ArrowRight } from "lucide-react";

const CalltoAction = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div
        id="cta"
        className="max-w-6xl mx-auto"
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-green-700
            via-green-600
            to-green-400
            px-8
            md:px-16
            py-14
            shadow-xl
            "
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-green-400/20 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Content */}
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Create Your Professional Resume Today
              </h2>

              <p className="mt-4 text-green-50 text-lg leading-relaxed">
                Build polished resumes with AI assistance,
                customize every section, and download
                professional PDF resumes in minutes.
              </p>
            </div>

            {/* Button */}
            <button
              className="
                flex
                items-center
                gap-2
                bg-white
                text-green-800
                px-7
                py-4
                rounded-xl
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
              "
            >
              Get Started
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;

