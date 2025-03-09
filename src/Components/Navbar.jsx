import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu
import Logo from "../assets/logo.png";

const Navbar = ({ iseLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex gap-6 text-white">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-x-4 items-center">
          {!iseLoggedIn ? (
            <>
              <Link to="/login">
                <button className="border-2 px-6 py-2 rounded-[8px] text-white bg-black hover:bg-gray-700">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="border-2 px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-500">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                  }}
                  className="border-2 px-6 py-2 rounded-lg text-white bg-red-600 hover:bg-red-500"
                >
                  Logout
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="border-2 px-6 py-2 rounded-lg text-white bg-green-600 hover:bg-green-500">
                  Dashboard
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav>
          <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {!iseLoggedIn ? (
            <>
              <Link to="/login">
                <button className="border-2 px-6 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 w-full mt-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="border-2 px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-500 w-full">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                  }}
                  className="border-2 px-6 py-2 rounded-lg text-white bg-red-600 hover:bg-red-500 w-full"
                >
                  Logout
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="border-2 px-6 py-2 rounded-lg text-white bg-green-600 hover:bg-green-500 w-full">
                  Dashboard
                </button>
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
