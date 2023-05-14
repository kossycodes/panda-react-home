import React from "react"
import logo from "../assets/pandalogo.png";

export default function Navbar2() {

    
    


    return (
        <header>
           <nav className="flex  justify-between px-10 pt-7 align-middle items-center pad">
            <div>
                <img src={logo} alt="logo" />
                
            </div>
            <div className="flex justify-between gap-6" >
               <button className="font-space text-lg text-black font-bold" >Sign up</button>
               <button className="inline-block rounded-full text-white font-space bg-bluebg px-10 py-2 text-lg font-bold  ">Login </button>
            </div>
           </nav>
        </header>
    )


}