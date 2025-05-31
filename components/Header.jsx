import React from "react";

function Header() {
  return (
    <div className="bg-black w-full h-10 fixed top-0 left-0 flex justify-evenly items-center text-white z-50">
      <a href="#about" className="hover:text-gray-300 cursor-pointer">About</a>
      <a href="#portfolio" className="hover:text-gray-300 cursor-pointer">Portfolio</a>
      <a href="#projects" className="hover:text-gray-300 cursor-pointer">Projects</a>
      <a href="#connect" className="hover:text-gray-300 cursor-pointer">Connect</a>
    </div>
  );
}

export default Header;