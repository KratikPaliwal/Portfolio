import React from "react";


function About() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="h-20 w-[500px] text-center">
            <div className="flex justify-evenly gap-5">
            <div className="text-white text-2xl relative left-20">Kratik Paliwal</div>
            <div className="flex gap-4  relative left-30 top-1">
            <div>Github</div>
            <div>X</div>
            </div>
            </div>
          
          <div className="relative right-8"> Indore, India</div>
          <p className="relative left-30">  
            I'm a frontend developer who enjoys building simple, user-friendly
            websites
          </p>
   
        </div>
      </div>
    </>
  );
}
export default About;
