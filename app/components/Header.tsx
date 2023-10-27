import React from "react";

function Header() {
  return (
    <div className="fixed top-0 inset-x-0 flex items-center justify-between py-8 px-16 bg-white z-20">
      <div className="flex gap-8">
        <a href="/">
          <img src="/assets/logo.svg" alt="Logo" width={200} height={32} />
        </a>
        <select>
          <option value="">EN</option>
          <option value="">IDN</option>
        </select>
      </div>
      <div className="text-16 flex gap-8">
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Home
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          About
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Portfolio
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Product
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Meethodology
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Article
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Galery
        </a>
        <a href="/" className="hover:text-[#D61924] duration-300 ease-linear">
          Career
        </a>
      </div>
    </div>
  );
}

export default Header;
