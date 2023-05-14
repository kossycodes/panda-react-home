import React from "react"
import logo from "../assets/pandalogo.png";
import { Link } from "react-router-dom";


export default function Navbar() {

    
    


    return (
        <header>
          <nav className="flex  justify-between px-10 pt-7 align-middle items-center pad">
            <div>
                <img src={logo} alt="logo" />
                
            </div>
            <div className="flex items-center align-middle gap-3  ">
              <button className="text-sm inline-block rounded-full text-white w-max font-space bg-bluebg px-8  py-2 md:text-lg font-bold ">connect with pandascrow</button>
               
              
            </div>
          </nav>
        </header>
    )


}