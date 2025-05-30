import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="mt-10 flex justify-between">
        <div>
          <div className="text-4xl font-bold">Hi! Kratik Here</div>
          <div>21 year old FrontHand Developer from India 🇮🇳</div>
          <div>
            I build responsive, user-friendly interfaces that make web apps easy
            and enjoyable to use.
          </div>
        </div>
        <div className="mb-2">
          <img
            src="Images/profile.jpeg"
            className="w-30 h-30 object-cover rounded-1xl"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="flex gap-10 justify-start left-3  relative">
          <a
            href="https://www.linkedin.com/in/kratikpaliwal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/KratikPaliwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-800" />
          </a>
          <a href="mailto:kratikpaliwal1@gmail.com">
            <FaEnvelope className="text-2xl hover:text-red-400" />
          </a>
        </div>
      </div>
    </>
  );
}
export default About;
