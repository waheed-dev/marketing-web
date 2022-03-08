import {GiArchiveResearch} from "react-icons/gi";
import {VscCode, VscRocket} from "react-icons/vsc";
import {SiSimpleanalytics} from "react-icons/si";
import React from "react";

const Steps = () => {
  return (
      <>

      <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div
                      className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">1
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div
                          className="flex-shrink-0 w-24 h-24 bg-orange-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <GiArchiveResearch size={50} color={'#ea580c'}/>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Research</h2>
                          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, neque!.</p>
                      </div>
                  </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div
                      className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">2
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div
                          className="flex-shrink-0 w-24 h-24 bg-orange-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <VscCode size={50} color={'#ea580c'}/>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">DEVELOP</h2>
                          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vero.</p>
                      </div>
                  </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div
                      className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">3
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div
                          className="flex-shrink-0 w-24 h-24 bg-orange-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                       <VscRocket size={50} color={'#ea580c'}/>
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">DEPLOY</h2>
                          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, illum!</p>
                      </div>
                  </div>
              </div>
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div
                      className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">4
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div
                          className="flex-shrink-0 w-24 h-24 bg-orange-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                          <SiSimpleanalytics size={50} color={'#ea580c'} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">ANALYSE</h2>
                          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, praesentium?</p>
                      </div>
                  </div>
              </div>
          <div className={'container mx-auto flex flex-col items-center py-10 sm:py-16'}>
              <button className=" hover:opacity-90 text-base font-bold bg-custom-1 rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white">Request a Proposal</button>
          </div>
          </div>
      </section>

      </>
  )
}

export default Steps