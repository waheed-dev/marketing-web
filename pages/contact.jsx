import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import {GoLocation} from "react-icons/go";

const Contact = () => {
  return (
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container">
          <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl lg:text-4xl  xl:text-6xl leading-normal tracking-wide text-gray-800 text-center">Want to Grow your Business with better Digital Marketing Results.<span className={'text-custom-1'}> We will Help You Get There.</span></h1>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Drop us a line and let's get to work!</p>
              <div
                  className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-6">
                  <div className="bg-white border rounded-md border-gray-200 h-80 flex flex-col items-center">
                      <div className={'bg-green-400 h-8 w-2 place-self-start absolute'}></div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center underline underline-offset-4 text-gray-800">RE-ENERGISE</p>
                      <p className="text-gray-600 font-normal leading-7 text-left text-lg sm:text-lg mt-4 lg:w-8/10 sm:w-10/12 px-4">Whether it is slow revenue or you are unsure where to start with digital marketing or how to re-energise your digital marketing ?</p>
                  </div>
                  <div className="bg-white border rounded-md border-gray-200 h-80 flex flex-col items-center">
                      <div className={'bg-red-400 h-8 w-2 place-self-start absolute'}></div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center underline underline-offset-4  text-gray-800">INVEST SMART</p>
                      <p className="text-gray-600 font-normal leading-7 text-left text-lg sm:text-lg mt-4 lg:w-8/10 sm:w-10/12  px-4">Whatever your requirements or budget, our the talented team of digital experts at Sandiip Porwal Digital Marketing Consultancy is here and ready to help you.</p>
                  </div>
                  <div className="bg-white border rounded-md border-gray-200 h-80 flex flex-col items-center">
                      <div className={'bg-green-400  h-8 w-2 place-self-start absolute'}></div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center underline underline-offset-4  text-gray-800">FREE CONSULT</p>
                      <p className="text-gray-600 font-normal leading-7 text-left text-lg sm:text-lg mt-4 lg:w-8/10 sm:w-10/12  px-4">We offer a first free consultation followed by a brainstorming session pre signup for a fee.</p>
                  </div>

                  <div className="bg-white border rounded-md border-gray-200 h-80 flex flex-col items-center">
                      <div className={'bg-red-400 h-8 w-2 place-self-start absolute'}></div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center  underline underline-offset-4  text-gray-800">SIGN UP</p>
                      <p className="text-gray-600 font-normal leading-7 text-left text-lg sm:text- mt-4 lg:w-8/10 sm:w-10/12  px-4">Once you sign up for our digital marketing services you have with you a performance-driven digital agency as marketing partner.</p>
              <button className=" hover:opacity-90 text-base font-normal bg-custom-1 rounded f-m-m md:py-2 py-2 px-2 mt-6 md:px-6 foucus:outline-none text-white">Schedule Appointment</button>
                  </div>
              </div>
          </div>

      </div>
  )
}
export default Contact