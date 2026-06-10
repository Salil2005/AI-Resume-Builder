import React from "react";
import { Zap, Sparkles, FileText, Download } from "lucide-react";
import Title from "./Title";

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 px-6 md:px-10 lg:px-16 bg-white"
    >
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 text-sm text-green-800 bg-green-100 rounded-full px-4 py-2 font-medium">
          <Zap size={16} />
          <span>Powerful Features</span>
        </div>
      </div>

      {/* Heading */}
      <Title
        title="Everything You Need to Build a Better Resume"
        description="Create professional resumes, generate content with AI, and showcase your skills with confidence."
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-16">
        
        {/* Left Image */}
        <img
          className="max-w-2xl w-full rounded-3xl drop-shadow-2xl"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Resume Builder Features"
        />

        {/* Right Features */}
        <div className="flex flex-col gap-6">

          {/* Feature 1 */}
          <div className="group cursor-pointer">
            <div
              className="
                p-6
                bg-white
                border
                border-slate-200
                hover:border-green-300
                hover:bg-green-50
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                flex
                gap-4
              "
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                <Sparkles className="text-green-700" size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-800">
                  AI Content Generation
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  Generate professional summaries, project descriptions,
                  achievements, and experience points instantly using AI.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group cursor-pointer">
            <div
              className="
                p-6
                bg-white
                border
                border-slate-200
                hover:border-green-300
                hover:bg-green-50
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                flex
                gap-4
              "
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                <FileText className="text-green-700" size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-800">
                  Resume Customization
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  Personalize every section, update skills, and tailor your
                  resume for different job opportunities with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group cursor-pointer">
            <div
              className="
                p-6
                bg-white
                border
                border-slate-200
                hover:border-green-300
                hover:bg-green-50
                rounded-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                flex
                gap-4
              "
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                <Download className="text-green-700" size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-800">
                  One-Click PDF Export
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  Download clean and professional resumes in PDF format,
                  ready for applications and interviews.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;

