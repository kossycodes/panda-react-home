import React from "react"
import nigeria from "../assets/nigeria.png";
import usa from "../assets/USA.png";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Form({updatedValue, setShowModel}) {
   

   return (
     <div className="flex justify-center relative px-2  mx-auto ">
        <form className="card" action="">
          <div className="mx-8 relative">
             <section className="flex justify-between items-center  mb-3">
                <button className="bg-pinkbg text-pink font-space font-bold px-3 py-2 rounded-3xl">1 USD = 567.4 NGN</button>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>

             </section>

             {/*first Rectangle */}
             <section  className="flex justify-between  items-center px-4 py-3 mt-12 bg-greybg w-100% h-auto rounded-md border border-1 border-grey ">
                <div className="flex flex-col gap-2">
                    <p className="font-space text-sm font-light">You send </p>
                    <input className="font-space w-32 appearance-none focus:outline-none  font-black text-xl placeholder:text-black bg-greybg " aria-label="Search contacts" placeholder="597,400" type="number" name="q"  size={5}
              />  {/*<p className="font-space font-bold">597,400</p>*/}
                </div>
                <div className="flex gap-3   items-center">
                    <img src={nigeria} alt="" className="  w-6 h-auto" />
                    <p className="font-space font-semibold text-lg ">NGN</p>
                    <svg onClick={() => updatedValue(true)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
             </section>

             {/*second rectangle */}
             <section className="flex justify-between items-center px-4 py-3 mt-8 bg-greybg w-100% h-auto rounded-md border border-1 border-grey ">
                <div className="flex flex-col gap-2">
                    <p className="font-space text-sm font-light">Recipient gets </p>
                    <input className="font-space w-32 appearance-none focus:outline-none  font-black text-xl placeholder:text-black bg-greybg " aria-label="Search contacts" placeholder="1,000" type="number" name="q"  size={5}
              /> 
                </div>
                <div className="flex gap-3   items-center">
                    <img src={usa} alt="" className="  w-6 h-auto" />
                    <p className="font-space font-semibold text-lg ">USD</p>
                    <svg onClick={() => updatedValue(true)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
             </section>

             {/*Horizontal line */}
             <section className="flex justify-center">
               <hr className="line  border border-solid border-line mt-8" />
             </section>

             {/*Third rectangle */}
             <section className="flex justify-between items-center px-4 py-3 mt-8 bg-greybg w-100% h-auto rounded-md border border-1 border-grey ">
                <div className="flex flex-col gap-2">
                    <p className="font-space text-sm font-light">Destination </p>
                    <aside className="flex items-center gap-3">
                       <img src={nigeria} alt="" className="  w-6 h-auto" /> 
                       <p className="font-space font-semibold text-lg">Nigeria</p>
                    </aside>
                </div>
                <div >
                    
                    <svg onClick={() => updatedValue(true)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
             </section>

             {/*Transaction button  */}
             <section className="flex justify-center gap-4 mt-8">
                <Link to="/phone">
                <button  className=" inline-block sendcash ">Send Cash</button>
                </Link>
                
                <button className=" sendcash ">Recieve cash</button>
             </section>

             {/*Reload */}
             
             <section className="flex justify-center " >
                <div className="rounded-full bg-bluebg w-12 pl-3 py-3 absolute top-40">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                   </svg>
                </div>

             </section>
            
          </div>
          
       </form>
     </div>
     
   ) 
   
}