import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 hidden md:flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
            <img src="src/assets/images/logo.png" alt=""  className="w-6 h-6 mr-2"/>
          <span className="text-xl font-semibold text-gray-800 mr-10">ShopSmart</span>
          {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="hover:text-gray-600 text-indigo-500 font-medium border-b-2 border-indigo-500"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-500 font-medium"
          >
            Favorites
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-500 font-medium"
          >
            Cart
          </a>
        </div>
        </div>

        {/* Sign In Button */}
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 flex items-center">
          Sign in
        </button>

        {/* Mobile Navigation (Hidden by default) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-indigo-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="md:hidden bg-gray-100 py-2 px-6">
        <Link
          to="/"
          className="block py-2 text-gray-600 hover:text-indigo-500 font-medium"
        >
          Home
        </Link>
        <Link
          href="/favorites"
          className="block py-2 text-gray-600 hover:text-indigo-500 font-medium"
        >
          Favorites
        </Link>
        <Link
          href="/cart"
          className="block py-2 text-gray-600 hover:text-indigo-500 font-medium"
        >
          Cart
        </Link>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 w-full">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
