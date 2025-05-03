import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path) => {
    const baseClasses = "font-medium hover:text-indigo-500";
    if (isActive(path)) {
      return `${baseClasses} text-indigo-500 border-b-2 border-indigo-500`;
    }
    return `text-gray-600 ${baseClasses}`;
  };

  const getMobileLinkClasses = (path) => {
    const baseClasses = "block py-2 font-medium hover:text-indigo-500";
    if (isActive(path)) {
      return `${baseClasses} text-indigo-500 border-b-2 border-indigo-500`;
    }
    return `text-gray-600 ${baseClasses}`;
  };

  return (
    <nav className="bg-white shadow-sm mb-3">
      <div className="container mx-auto py-4 px-6 hidden md:flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="src/assets/images/newslater.png" alt=""  className="w-6 h-6 mr-2"/>
          <span className="text-xl font-semibold text-gray-800 mr-10">ShopSmart</span>
          {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link to="/favorites" className={getLinkClasses("/favorites")}>
            Favorites
          </Link>
          <Link to="/products" className={getLinkClasses("/products")}>
            Products
          </Link>
          <Link to="/cart" className={getLinkClasses("/cart")}>
            Cart
          </Link>
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
        <Link to="/" className={getMobileLinkClasses("/")}>
          Home
        </Link>
        <Link to="/favorites" className={getMobileLinkClasses("/favorites")}>
          Favorites
        </Link>
        <Link to="/cart" className={getMobileLinkClasses("/cart")}>
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