import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="text-center md:text-left">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            Hi! Kratik Here
          </div>
          <div className="text-lg mb-1">
            21-year-old FrontEnd Developer from India 🇮🇳
          </div>
          <div className="max-w-md text-gray-300">
            I build responsive, user-friendly interfaces that make web apps easy
            and enjoyable to use.
          </div>
        </div>
        <div>
          <img
            src="Images/profile.jpeg"
            className="w-40 h-40 object-cover rounded-xl shadow-md"
            alt="Profile"
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-6 mt-6 px-4">
        <a
          href="https://www.linkedin.com/in/kratikpaliwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
        </a>
        <a
          href="https://github.com/KratikPaliwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="mailto:kratikpaliwal1@gmail.com">
          <FaEnvelope className="text-2xl hover:text-red-400 transition" />
        </a>
      </div>
    </>
  );
}

export default About;
