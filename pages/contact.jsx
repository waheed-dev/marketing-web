import React from "react";
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import {GoLocation} from "react-icons/go";

const Contact = () => {
  return (
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container">
          <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center">Contact us</h1>
              <p className="text-base leading-normal text-center text-gray-600 mt-5 md:w-3/5">Want to Grow your Business with better Digital Marketing Results. We will Help You Get There.</p>
              <p className="text-base leading-normal text-center text-gray-600 mt-5 md:w-3/5">Whatever your requirements or budget, our the talented team of digital experts at Sandiip Porwal Digital Marketing Consultancy is here and ready to help you.</p>
              <p className="text-base leading-normal text-center text-gray-600 mt-5 md:w-3/5">We offer a first free consultation followed by a brainstorming session pre signup for a fee and then once you sign up for our digital marketing services you have with you a performance-driven digital agency as marketing partner.</p>

              <div
                  className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-6">
                  <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
                      <div className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                           role="img" aria-label="phone number">
                          <BsTelephone size={50} color={'#ea580c'} />
                      </div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Phone</p>
                      <p className="text-base mt-4 leading-4 text-center text-gray-600">(007) 095-6890</p>
                  </div>
                  <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
                      <div className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                           role="img" aria-label="email">
                          <AiOutlineMail size={50} color={'#ea580c'} />
                      </div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Email</p>
                      <p className="text-base mt-4 leading-4 text-center text-gray-600">Alphasquad@gmail.com</p>
                  </div>
                  <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
                      <div className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                           role="img" aria-label="location">
                          <GoLocation size={50} color={'#ea580c'} />
                      </div>
                      <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">Address</p>
                      <p className="text-base mt-4 leading-6 text-center text-gray-600 w-48">13420 -Oak Street, New York
                          City (9134200)</p>
                  </div>
              </div>
          </div>
          <div className={'container mx-auto flex flex-col items-center py-10 sm:py-16'}>
              <button className=" hover:opacity-90 text-base font-bold bg-custom-1 rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white">Drop us a line</button>
          </div>
      </div>
  )
}
export default Contact