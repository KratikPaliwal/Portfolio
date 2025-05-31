import React from "react";
import { FiLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

function Projects() {
  return (
    <>
      <div>
        <div className="mt-10 font-extrabold text-2xl flex justify-center mb-5">
          Projects
        </div>
        <div className="flex justify-evenly">
          <div>
            <div className="w-50">
              <img
                src="Images/image.png"
                alt=""
                className="h-50 w-50 object-cover"
              />
            </div>
            <div className="w-50 flex justify-center">
              <div className="font-semibold text-[18px]">Currency Converter</div>
            </div>
            <div className="flex justify-between w-50 ">
              <div>
                <a
                  href="https://currency-conversion-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white-600 hover:underline"
                >
                  <FiLink className="text-xl" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/KratikPaliwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-2xl text-white hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-50">
              <img
                src="Images/creditCraft.png"
                alt=""
                className="h-50 w-50 object-cover"
              />
            </div>
            <div className="w-50 flex justify-center">
              <div className="font-semibold text-[18px]">Credit Craft</div>
            </div>
            <div className="flex justify-between w-50 ">
              <div>
                <a
                  href="https://credit-card11-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white-600 hover:underline"
                >
                  <FiLink className="text-xl" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/KratikPaliwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-2xl text-white hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-50">
              <img
                src="Images/RandomPassword.png"
                alt=""
                className="h-50 w-50 object-cover"
              />
            </div>
            <div className="w-50 flex justify-center">
              <div className="font-semibold text-[18px]">Random Password</div>
            </div>
            <div className="flex justify-between w-50 ">
              <div>
                <a
                  href="https://random-password-generate-tan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white-600 hover:underline"
                >
                  <FiLink className="text-xl" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/KratikPaliwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-2xl text-white hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-50">
              <img
                src="Images/tradeTwice.png"
                alt=""
                className="h-50 w-50 object-cover"
              />
            </div>
            <div className="w-50 flex justify-center">
              <div className="font-semibold text-[18px]">Trade Twice</div>
            </div>
            <div className="flex justify-between w-50 ">
              <div>
                <a
                  href="https://random-password-generate-tan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white-600 hover:underline"
                >
                  <FiLink className="text-xl" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/KratikPaliwal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-2xl text-white hover:text-gray-800" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button onClick={()=>{
            window.location.href='https://github.com/KratikPaliwal?tab=repositories'
        }} className="bg-red-400 text-white rounded-full m-2 p-2">See More</button>
      </div>
    </>
  );
}
export default Projects;
