import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 lg:px-16 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4 ">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LOGO} alt="Logo" className="max-h-16" />
        </div>

        {/* Desktop Menu */}
        <ul
          id="desktop-menu"
          className="hidden md:flex space-x-20 items-center font-semibold text-blue-900 uppercase lg:pe-10 text-[1rem] "
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sigma">Sigma 8.0</Link>
          </li>
          <li>
            <Link to="/allcourses">All Courses</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-700 text-white px-6 py-3 rounded-md hover:scale-100 hover:text-blue-900 hover:bg-transparent hover:border hver:border-2 transition text-lg sm:text-xl font-semibold"
            >
              Signup
            </button>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4">
          <ul className="space-y-4 font-semibold bg-[#d9d9d9] text-blue-900 uppercase p-2 text-[1.1rem] rounded">
            <li>
              <Link to="/" className="block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sigma" className="block">
                Sigma 8.0
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block">
                All Courses
              </Link>
            </li>
            <li>
              <Link to="/login" className="block">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block w-full border-2 border-blue-700 text-blue-700 py-2 rounded-md text-center text-lg"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
