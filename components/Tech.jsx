import React from "react";
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiTailwindcss,SiGit, SiGithub,SiFlutter, SiDart,  SiMongodb,SiMysql, SiCplusplus} from "react-icons/si";

function Tech() {
  const techStack = [
    { icon: <SiHtml5 className="text-orange-600 w-12 h-12" />, label: "HTML" },
    { icon: <SiCss3 className="text-blue-600 w-12 h-12" />, label: "CSS" },
    { icon: <SiJavascript className="text-yellow-400 w-12 h-12" />, label: "JavaScript" },
    { icon: <SiReact className="text-blue-400 w-12 h-12" />, label: "React" },
    { icon: <SiTailwindcss className="text-teal-400 w-12 h-12" />, label: "Tailwind" },
    { icon: <SiGit className="text-red-500 w-12 h-12" />, label: "Git" },
    { icon: <SiGithub className="text-white w-12 h-12" />, label: "GitHub" },
    {icon: <SiFlutter  className="text-sky-500 w-12 h-12"/> , label:"Flutter"},
    { icon: <SiDart className="text-blue-500 w-12 h-12" />, label: "Dart" },
    { icon: <SiMysql className="text-blue-700 w-12 h-12" />, label: "SQL" },
    { icon: <SiMongodb className="text-green-600 w-12 h-12" />, label: "MongoDB" },
    { icon: <SiCplusplus className="text-indigo-500 w-12 h-12" />, label: "C++" },

    
    
    
  ];

  return (
    <div className="mt-10 px-4">
      <div className="font-black text-xl text-center md:text-left mb-6">
        What I Work With
      </div>
  
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto md:mx-0">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
          >
            {tech.icon}
            <p className="mt-1 text-sm sm:text-base text-center">{tech.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Tech;
