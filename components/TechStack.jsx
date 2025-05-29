import React from "react";

function TechStack({imgurl,tech}){
    return(
        <>
        <div className="flex justify-center items-center gap-2">
            <img className="h-10 w-10" src={imageurl} alt="" />
            <div>{tech}</div>
        </div>
        </>
    )
}
export default TechStack