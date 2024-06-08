import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 border-b-4 border-green-500 z-50 p-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between flex-shrink-0 text-green-500 mr-6">
          <span className="font-semibold text-xl tracking-tight">LOGO</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-green-500 border-green-500 hover:text-green-700 hover:border-green-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow flex justify-center lg:justify-end">
            <a
              href="#"
              className="block text-[18px] mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-green-700 mr-4"
            >
              Home
            </a>
            <a
              href="#services"
              className="block text-[18px] mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-green-700 mr-4"
            >
              Service
            </a>
            <a
              href="#aboutUs"
              className="block text-[18px] mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-green-700"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
