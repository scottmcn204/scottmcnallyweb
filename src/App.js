import './App.css';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-white'>
      <nav className=" fixed w-full bg-white bg-opacity-75 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-center">
                <div className=' p-2 text-white font-bold border border-white border-2 rounded-xl font-burtons text-l bg-blue-500'>
                  <p>
                    Scott McNally
                    <br></br>
                    Web Design
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-full border  border-gray-500 text-gray-500 hover:bg-blue-500 opacity-80"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="./"
                  className=" text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center"
                >
                  Home
                </a>

                <a
                  href="./"
                  className="text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center"
                >
                  Get In Touch
                </a>

                <a
                  href="./"
                  className="text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center"
                >
                  Websites
                </a>

                <a
                 href="./"
                  className="text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center"
                >
                  About Me
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    
      <main className='bg-white'>
        <div class="flex items-center justify-center h-96 w-screen 
            bg-gradient-to-r 
            from-blue-400 
            to-orange-500 
            via-purple-500
            animate-gradient-xy
            "> 
            <div className='mt-96'>
              <div className='text-center  p-8 text-white font-bold text-3xl  z-80'>
                  Thoughtful Web Design For Your Business
              </div>
              <div>
                <div className='text-center p-4 mt-2'>
                  <div className='bg-yellow-100 text-amber-400 p-3 mx-16 font-bold rounded-t-xl hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Enhance your businesses branding with a sleek and modern website<br/></div>
                  <div className='bg-yellow-300 text-red-800 p-3 mx-16 font-bold hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Work together to perfect the ideal showcase of your business<br/></div>
                  <div className='bg-amber-400 text-yellow-100 p-3 mx-16 font-bold hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Have complete customisation input<br/></div>
                  <div className='bg-red-800 text-yellow-200 p-3 mx-16 font-bold rounded-b-xl hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Get in touch to discuss your next website</div>
                </div>
              </div>
            </div>
         </div>
         <div className='h-64'></div>
         <div className='flex justify-center z-100'>
          <div className='relative mx-3'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

          <div class="space-y-2">
            <p class="text-slate-800">Reach out to discuss your next website with me!</p>
            <a href="./" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Contact →</a>
          </div>
        </div>
        </div>
        <div className='relative mx-3'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

          <div class="space-y-2">
            <p class="text-slate-800">View some of the projects that I've worked on recently</p>
            <a href="./" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Websites →</a>
          </div>
        </div>
        </div>
         </div>

         
         
         


       
           
        

       
        
        

        <section className='min-h-screen '></section>
        <div className="flex flex-col h-screen">
          <div className='mt-48 m-6  rounded-xl'>

            <div className='text-center p-4 mt-8'>
              <div className='bg-yellow-100 text-amber-400 p-3 mx-16 font-bold rounded-t-xl hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Enhance your businesses branding with a sleek and modern website<br/></div>
              <div className='bg-yellow-300 text-red-800 p-3 mx-16 font-bold hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Work together to perfect the ideal showcase of your business<br/></div>
              <div className='bg-amber-400 text-yellow-100 p-3 mx-16 font-bold hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Have complete customisation input<br/></div>
              <div className='bg-red-800 text-yellow-200 p-3 mx-16 font-bold rounded-b-xl hover:mx-8 hover:px-8 hover:py-6 hover:text-lg'>Get in touch to discuss your next website</div>
            </div>
            <div className='flex justify-center  mt-5'>
            <button onClick={() => setIsOpen(!isOpen)} className=' text-base md:text-xl bg-blue-400 text-white px-4 py-2 rounded-md mx-4 z-100'>
              <h3 className='font-bold '>Get In Contact</h3>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className=' text-base md:text-xl bg-blue-400 text-white px-4 py-2 rounded-md mx-1 z-100'>
              <h3 className='font-bold '>Show Me The Websites!</h3>
            </button>

            </div>
          </div>
          
        </div>
        <div className=''>
          <div>Get In Touch</div>
        </div>
      </main>
    </div>
  );
}

export default App;
