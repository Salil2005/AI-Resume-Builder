import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="ResumeAI Logo"
                className="h-12 w-auto object-contain"
              />

            </div>

            <p className="mt-5 max-w-md leading-relaxed text-slate-600">
              Build professional resumes faster with AI.
              Generate content, customize layouts, and
              export polished PDF resumes with ease.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/Salil2005/AI-Resume-Builder"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 hover:bg-green-100 hover:border-green-200 transition-all duration-300 flex items-center justify-center"
              >
                <img width="20" height="20" src="https://img.icons8.com/3d-sugary/100/github.png" alt="github"/>          
              </a>

              <a
                href="https://www.linkedin.com/in/salil-gupta-0088522a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 hover:bg-green-100 hover:border-green-200 transition-all duration-300 flex items-center justify-center"
              >
                <img width="20" height="20" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
              </a>

              <a
                href="mailto:salilgupta2005@gmail.com"
                className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200 hover:bg-green-100 hover:border-green-200 transition-all duration-300 flex items-center justify-center"
              >
                <img width="20" height="20" src="https://img.icons8.com/color/48/gmail--v1.png" alt="gmail--v1"/>
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">
              Product
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#features"
                  className="text-slate-600 hover:text-green-700 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#aboutus"
                  className="text-slate-600 hover:text-green-700 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#cta"
                  className="text-slate-600 hover:text-green-700 transition"
                >
                  Get Started
                </a>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-green-700 transition"
                >
                  Resume Tips
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-green-700 transition"
                >
                  Templates
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-green-700 transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-slate-500">
              © 2026 ResumeAI. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">

              <a
                href="#"
                className="text-slate-500 hover:text-green-700 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-green-700 transition"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

