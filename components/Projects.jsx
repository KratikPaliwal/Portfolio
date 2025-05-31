import React from "react";
import { FiLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Currency Converter",
      img: "Images/image.png",
      live: "https://currency-conversion-six.vercel.app/",
      github: "https://github.com/KratikPaliwal",
    },
    {
      title: "Credit Craft",
      img: "Images/creditCraft.png",
      live: "https://credit-card11-six.vercel.app/",
      github: "https://github.com/KratikPaliwal",
    },
    {
      title: "Random Password",
      img: "Images/RandomPassword.png",
      live: "https://random-password-generate-tan.vercel.app/",
      github: "https://github.com/KratikPaliwal",
    },
    {
      title: "Trade Twice",
      img: "Images/tradeTwice.png",
      live: "https://random-password-generate-tan.vercel.app/", // Update this if wrong
      github: "https://github.com/KratikPaliwal",
    },
  ];

  return (
    <>
      <div className="mt-10 font-extrabold text-2xl flex justify-center mb-5">
        Projects
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-[#1f1f1f] p-4 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="text-center font-semibold text-lg mb-2 text-white">
              {proj.title}
            </div>
            <div className="flex justify-between px-4">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-blue-400"
              >
                <FiLink className="text-xl" />
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="text-2xl text-white hover:text-gray-400" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => {
            window.location.href =
              "https://github.com/KratikPaliwal?tab=repositories";
          }}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-2"
        >
          See More
        </button>
      </div>
    </>
  );
}

export default Projects;
