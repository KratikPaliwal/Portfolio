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
    <>
      <div className="flex mt-10">
        <div className="font-black text-xl">What I Work With</div>
      </div>

      <div className="flex mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <p className="mt-1">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tech;
