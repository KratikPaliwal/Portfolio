import React from "react";
import TechStack from "./TechStack";


function Tech(){
    return(
        <>
        <div className="flex justify-center mt-10">
            <div className="font-black relative right-14">What I Work With</div>
        </div>
        <div className="flex gap-2">
            <TechStack imgurl="Images/HTML_Logo.jpg" tech="HTML" />

        </div>
        
        </>
    )
}
export default Tech