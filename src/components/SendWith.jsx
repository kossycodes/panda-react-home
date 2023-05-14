import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function SendWith() {
  

  return (
    <div className="flex justify-center relative px-2  mx-auto ">
      <form className="card" action="">
        <div className="mx-8 relative">

        <section className="flex justify-between items-center" >
              <div className="flex gap-8 items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8F8F8F" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                <p className="font-space font-bold text-lg">Send With</p>
              </div>
              <div >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8F8F8F" class="w-5 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                
              </div>
          </section>

          {/*first Rectangle */}
          <section className="flex justify-between items-center mt-14 px-4 py-3  bg-greybg2 w-100% h-auto rounded-xl ">
              <div className="flex flex-col gap-1" >
                  <p className="font-space font-semibold text-lg">Bitcoin</p>
                  <p className="font-space text-sm font-light text-black-sub" >Send from a bitcoin wallet</p>
              </div>

              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8F8F8F" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>

              </div>
          </section>

          <section className="flex justify-between items-center mt-8 px-4 py-3  bg-greybg2 w-100% h-auto rounded-xl ">
              <div className="flex flex-col gap-1" >
                  <p className="font-space font-semibold text-lg">Bitcoin</p>
                  <p className="font-space text-sm font-light text-black-sub" >Send from a bitcoin wallet</p>
              </div>

              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8F8F8F" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>

              </div>
          </section>

          
          {/*Transaction button  */}
          <section className="flex justify-center mt-20">
              
              <Link to="/success" className="w-full">
                 <button className="inline-block rounded-full w-full text-white  font-space bg-bluebg  py-3 mt-5 text-lg font-medium  ">Continue to Transfer </button>

              </Link>
          </section>
          
        </div>
      </form>
    </div>
  );
}