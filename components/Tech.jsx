import React from "react";

function Tech() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="font-black text-xl">What I Work With</div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl">
          {/* Each Tech Item */}
          <div className="flex flex-col items-center">
            <img src="Images/HTML_Logo.png" alt="HTML" className="w-12 h-12" />
            <p className="mt-1">HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="Images/Css_Logo.jpg" alt="CSS" className="w-12 h-12" />
            <p className="mt-1">CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="Images/js.jpg" alt="JavaScript" className="w-12 h-12" />
            <p className="mt-1">JS</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="Images/react.png" alt="React" className="w-12 h-12" />
            <p className="mt-1">React</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="Images/tailwind.png" alt="Tailwind" className="w-18 h-12" />
            <p className="mt-1">Tailwind</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="Images/git.png" alt="Git" className="w-12 h-12" />
            <p className="mt-1">Git</p>
          </div>

          {/* More Tech Items */}
          <div className="flex flex-col items-center">
            <img src="Images/github.png" alt="Node.js" className="w-12 h-12 rounded-4xl" />
            <p className="mt-1">Github</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Tech;
