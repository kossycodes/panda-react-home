import React from "react";
import nigeria from "../assets/nigeria.png"
import usa from "../assets/USA.png"
import uk from "../assets/uk.png"

export default function Model({visible, onClose}) {
    const handlOnClose = (e) => {
        if (e.target.id === 'container')
        onClose()
    };


    if (!visible) return null;


    return (
        <div id="container" onClick={handlOnClose} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
            <form action="" className="w-96 md:w-2/5 h-auto pb-8 bg-white rounded-3xl">
                <div className="px-6">
                    <section className="flex justify-center mt-6 mb-6">
                        <p className="font-space font-bold  text-black text-center " >Select currency to send</p>
                    </section>

                    {/* first rectangle */}
                    <section className="flex justify-between items-center px-4 py-7 mt-12 bg-greybg w-100% h-auto rounded-xl  ">
                        <div className="flex gap-2 items-center">
                            <img src={nigeria} alt="" className="w-5 h-auto" />
                            <p className="font-space font-bold  text-black ">NGN</p>
                        </div>
                        <div>
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </section>

                    {/**Second rectangle */}
                    <section className="flex justify-between items-center px-4 py-7 mt-8 bg-greybg w-100% h-auto rounded-xl  ">
                        <div className="flex gap-2 items-center">
                            <img src={usa} alt="" className="w-5 h-auto" />
                            <p className="font-space font-bold  text-black ">USD</p>
                        </div>
                        <div>
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </section>

                    {/**Third Rectangle */}
                    <section className="flex justify-between items-center px-4 py-7 mt-8 bg-greybg w-100% h-auto rounded-xl  ">
                        <div className="flex gap-2 items-center">
                            <img src={uk} alt="" className="w-5 h-auto" />
                            <p className="font-space font-bold  text-black ">GBP</p>
                        </div>
                        <div>
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374957" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    )
}