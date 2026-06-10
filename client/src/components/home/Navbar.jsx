import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed z-50 transition-all duration-500
          ${
            isScrolled
              ? `
                top-8
                left-4
                right-4
                max-w-7xl
                mx-auto
                rounded-2xl
                bg-white/95
                backdrop-blur-xl
                border
                border-slate-200
                shadow-xl
              `
              : `
                top-10
                left-0
                right-0
                bg-white/90
                backdrop-blur-md
                border-b
                border-slate-200
              `
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <img
                src="/logo.svg"
                alt="ResumeAI"
                className="h-10 w-auto"
              />

            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">

              <a
                href="#home"
                className="hover:text-green-700 transition"
              >
                Home
              </a>

              <a
                href="#features"
                className="hover:text-green-700 transition"
              >
                Features
              </a>

              <a
                href="#aboutus"
                className="hover:text-green-700 transition"
              >
                About
              </a>

              <a
                href="#cta"
                className="hover:text-green-700 transition"
              >
                Contact
              </a>

            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-3">

              <a
                href="/login"
                className="
                  px-5
                  py-2.5
                  border
                  border-slate-300
                  rounded-full
                  text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                Login
              </a>

              <a
                href="/builder"
                className="
                  px-5
                  py-2.5
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  rounded-full
                  transition
                  shadow-md
                "
              >
                Build Resume
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h20M4 14h20M4 22h20" />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl font-medium"
        >
          Home
        </a>

        <a
          href="#features"
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl font-medium"
        >
          Features
        </a>

        <a
          href="#aboutus"
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl font-medium"
        >
          About
        </a>

        <a
          href="#cta"
          onClick={() => setMenuOpen(false)}
          className="text-white text-xl font-medium"
        >
          Contact
        </a>

        <a
          href="/builder"
          className="
            bg-green-600
            hover:bg-green-700
            px-6
            py-3
            rounded-xl
            text-white
            font-medium
          "
        >
          Build Resume
        </a>

        <button
          onClick={() => setMenuOpen(false)}
          className="
            text-white
            border
            border-white/30
            px-6
            py-3
            rounded-xl
          "
        >
          Close
        </button>

      </div>
    </>
  );
};

export default Navbar;

