import React, { useState } from "react";
function Index() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-extrabold leading-tight">
                            Gain Your Top Place in Digital Marketing with <span className="text-indigo-700">Sandiip Porwal</span>
                        </h1>
                        <p className="mt-5 sm:mt-10 text-gray-600 font-normal text-center text-lg sm:text-lg">Flexible Social Media Marketing Solutions to keep you ahead of competition.<br/>Digital Transformation Strategy that takes your business to the next level</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className=" hover:opacity-90 text-base font-bold bg-indigo-700 rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white">Schedule an Appointment </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;