import React from "react";
import nigeria from "../assets/nigeria.png"
import usa from "../assets/USA.png"
import uk from "../assets/uk.png"
import { useState, useEffect, useRef } from "react";


export default function Model({visible, onClose}) {

    

    const handlOnClose = (e) => {
        if (e.target.id === 'container')
        onClose()
    };


    if (!visible) return null;

     
     const [isClicked1, setIsClicked1] = useState(false);
     const [isClicked2, setIsClicked2] = useState(false);
     const [isClicked3, setIsClicked3] = useState(false);

     const handleClick = (rectangleNumber) => {
    if (rectangleNumber === 1) {
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
  } else if (rectangleNumber === 2) {
    setIsClicked1(false);
    setIsClicked2(true);
    setIsClicked3(false);
  } else if (rectangleNumber === 3) {
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(true);
  }
};

  const rectangleStyle1 = {
    border: isClicked1 ? '2px solid #7575FF' : '2px solid #E9E9E9',
    cursor: 'pointer',
  };

  const rectangleStyle2 = {
    border: isClicked2 ? '2px solid #7575FF' : '2px solid #E9E9E9',
    cursor: 'pointer',
  };

  const rectangleStyle3 = {
    border: isClicked3 ? '2px solid #7575FF' : '2px solid #E9E9E9',
    cursor: 'pointer',
  };

  

 


    return (
        <div id="container" onClick={handlOnClose} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
            <form action="" className="w-96 md:w-4/12 h-auto pb-8 bg-white rounded-3xl">
                <div className="px-6">
                    <section className="flex justify-center mt-6 mb-6">
                        <p className="font-space font-bold  text-black text-center " >Select currency to send</p>
                    </section>

                    {/* first rectangle */}
                    <section style={rectangleStyle1} onClick={() => handleClick(1)}  className="flex justify-between  items-center px-4 py-7 mt-12 bg-greybg w-100% h-auto rounded-xl  ">
                        <div className="flex gap-4 items-center">
                            <img src={nigeria} alt="" className="w-6 h-auto" />
                            <p className="font-space font-semibold  text-base ">NGN</p>
                        </div>
                        <div>
                            
                            {isClicked1 ? (
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7575FF" class="w-6 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            ) : (
        
                             <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                             </svg>     
                                  )}
                        </div>
                    </section>

                    {/**Second rectangle */}
                    <section style={rectangleStyle2} onClick={() => handleClick(2)}  className="flex justify-between items-center px-4 py-7 mt-8 bg-greybg w-100% h-auto rounded-xl  ">
                        <div className="flex gap-4 items-center">
                            <img src={usa} alt="" className="w-6 h-auto" />
                            <p className="font-space font-semibold  text-base ">USD</p>
                        </div>
                        <div>
                            
                            {isClicked2 ? (
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7575FF" class="w-6 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            ) : (
        
                             <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                             </svg>     
                                  )}
                        </div>
                    </section>

                    {/**Third Rectangle */}
                    <section style={rectangleStyle3} onClick={() => handleClick(3)}  className="flex justify-between items-center px-4 py-7 mt-8 border-2 border-bluebg bg-greybg w-100% h-auto rounded-xl  ">
                        <div className="flex gap-4 items-center">
                            <img src={uk} alt="" className="w-6 h-auto" />
                            <p className="font-space font-semibold  text-base ">GBP</p>
                        </div>
                        <div>
                            
                            {isClicked3 ? (
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7575FF" class="w-6 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            ) : (
        
                             <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                             </svg>     
                                  )}
                        </div>
                    </section>
                    
                </div>
            </form>
        </div>
    )
}