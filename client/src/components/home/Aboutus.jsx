import React from "react";
import { BookOpenCheck, Sparkles, FileText, Download } from "lucide-react";
import Title from "./Title";

const Aboutus = () => {
  return (
    <section
      id="aboutus"
      className="py-24 px-6 md:px-10 lg:px-16 bg-slate-50"
    >
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 text-sm text-green-800 bg-green-100 rounded-full px-4 py-2 font-medium">
          <BookOpenCheck size={16} />
          <span>About ResumeAI</span>
        </div>
      </div>

      {/* Heading */}
      <Title
        title="Helping You Create Better Resumes"
        description="ResumeAI simplifies resume creation with intelligent tools, professional templates, and a seamless workflow designed for students and professionals."
      />

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">

        {/* Card 1 */}
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:border-green-300
          "
        >
          <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
            <FileText className="text-green-700" size={22} />
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            Easy Resume Building
          </h3>

          <p className="mt-3 text-slate-600 leading-relaxed">
            Create resumes step by step with a simple interface
            designed to save time and reduce complexity.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:border-green-300
          "
        >
          <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
            <Sparkles className="text-green-700" size={22} />
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            AI-Powered Assistance
          </h3>

          <p className="mt-3 text-slate-600 leading-relaxed">
            Generate summaries, improve descriptions,
            and enhance resume content with intelligent suggestions.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:border-green-300
          "
        >
          <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
            <Download className="text-green-700" size={22} />
          </div>

          <h3 className="text-xl font-semibold text-slate-900">
            Professional Output
          </h3>

          <p className="mt-3 text-slate-600 leading-relaxed">
            Export clean, professional resumes in PDF format
            ready for applications and interviews.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Aboutus;

