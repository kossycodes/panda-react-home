import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Final() {
  

  return (
    <div className="flex justify-center relative px-2  mx-auto ">
      <form className="card" action="">
        <div className="mx-8 relative">

             <section className="flex justify-between items-center  mb-3">
                <button className="bg-pinkbg text-pink font-space font-bold px-3 py-2 rounded-3xl">Recieving $105</button>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>

             </section>

             <section >
                <p className="font-space font-light text-black mt-14 " >Payment Link</p>
                <p className="font-space font-bold text-black text-xl" >send.pandascrow.io/pskdheu</p>
            </section>

             <section className="flex justify-center mt-9">
               
               <Link to="/" className="w-full" >
                <button className="inline-block rounded-full w-full text-white  font-space bg-bluebg  py-3 mt-5 text-lg font-medium  ">Share Payment Link </button>
             
                </Link>
             </section>

          
        </div>
      </form>
    </div>
  );
}