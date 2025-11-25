import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-sm fixed top-0 left-0 z-50">
        <h2 className="text-2xl font-bold text-gray-900">AdShark</h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Features</li>
            <li className="hover:text-blue-600 cursor-pointer">Problem</li>
            <li className="hover:text-blue-600 cursor-pointer">Solutions</li>
            <li className="hover:text-blue-600 cursor-pointer">Setup</li>
            <li className="hover:text-blue-600 cursor-pointer">Audience</li>
            <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <h2 className="cursor-pointer">Login</h2>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Book Demo
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white bg-blue-600 p-2 rounded-lg"
          onClick={() => setOpen(true)}
        >
          <HiMenuAlt3 size={24} />
        </button>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white shadow-2xl z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h2 className="text-xl font-bold">AdShark</h2>
          <button onClick={() => setOpen(false)}>
            <IoClose size={28} className="text-gray-700" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 text-lg text-gray-800 px-6 mt-6">
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Problem</li>
          <li className="hover:text-blue-600 cursor-pointer">Solutions</li>
          <li className="hover:text-blue-600 cursor-pointer">Setup</li>
          <li className="hover:text-blue-600 cursor-pointer">Audience</li>
          <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
        </ul>

        {/* Login + Button */}
        <div className="mt-10 px-6">
          <p className=" hover:text-blue-600 cursor-pointer text-center text-gray-600 mb-4">Login</p>
          <button
            className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 
            text-white rounded-lg text-lg"
          >
            Book Demo
          </button>
        </div>
      </div>

      {/* BACKDROP (close on click) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
