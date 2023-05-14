import React, { useState } from "react";
import success from "../assets/success badge.svg";
import { Link } from "react-router-dom";

export default function SuccessUp() {
  

  return (
    <div className="flex justify-center relative px-2  mx-auto ">
      <form className="card" action="">
        <div className="mx-8 relative">

             <section className="flex justify-center mt-14">
               <img src={success} alt="" className="  w-1/2 h-auto" /> 
             </section>

             <section className="flex justify-center mt-20">   
               <Link to="/complete" className="w-full">
                  <button className="inline-block rounded-full w-full text-white  font-space bg-bluebg  py-3 mt-5 text-lg font-medium  ">Return to Dashboard </button>
             
                </Link>
                
             </section>
          
        </div>
      </form>
    </div>
  );
}