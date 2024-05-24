import './App.css';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import{AiFillLinkedin} from 'react-icons/ai';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-white'>
      <nav className=" fixed w-full bg-white bg-opacity-90 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-center">
                <div className=' animate-gradient-xy font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 p-4 z-100'>
                  <p>
                    Scott McNally
                    <br></br>
                    Web Design {'</>'}
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-full border  border-gray-500 text-gray-500 opacity-80"
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
        <section className='min-h-screen             
            bg-gradient-to-r 
            from-blue-400 
            to-orange-500 
            via-purple-500
            animate-gradient-xy'>
        <div class="flex items-center justify-center h-96 w-screen 

            "> 
            <div className='md:mt-96 mt-72'>
              <div className='text-center   p-8 text-white font-extrabold text-4xl md:text-5xl  z-80'>
                  Thoughtful Web Design For Your Business
              </div>
              <p className=' lg:border-r-4 lg:border-r-white lg:pr-5 text-center text-white m-3 lg:animate-typing lg:whitespace-nowrap lg:overflow-hidden'>
                Enhance your businesses branding with a sleek and modern website. Work together with me to perfect the ideal showcase of your business.
              </p>
            </div>
         </div>
         <div className='md:h-56 h-36'></div>
         <div className=' md:flex justify-center z-100'>
          <div className='relative mx-3 my-3'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25 z-100"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 z-100">

          <div class="space-y-2">
            <p class="text-slate-800">Reach out to discuss your next website with me!</p>
            <a href="./" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Contact →</a>
          </div>
        </div>
        </div>
        <div className='relative mx-3 my-3'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

          <div class="space-y-2">
            <p class="text-slate-800">View some of the projects that I've worked on recently</p>
            <a href="./" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Websites →</a>
          </div>
        </div>
        </div>
         </div>
         </section>
        <section className=''>
          <div className='flex justify-center'>
            <div className='mt-4 animate-gradient-xy font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 p-4 z-100'>
              Contact Me
            </div>
          </div>
          <div className='flex justify-center z-100 mt-4 mb-8'>
          <div className='relative mx-6'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25 z-100"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 z-100">
          <div class="space-y-2">
            <p class="text-slate-800 text-center p-4">If you are interested in collaborating or just have any questions, reach out to me by email or through LinkedIn message</p>
            <div className='flex justify-center mb-5 z-40'>
            <div className='md:text-4xl bg-blue-500 text-3xl flex justify-center text-white a px-4 py-2 rounded-md md:w-56  z-40'>
              <AiFillLinkedin></AiFillLinkedin>
              <h3 className='md:text-xl text-base py-1 px-2 font-bold'><a href='https://www.linkedin.com/in/scottamcnally'>LinkedIn</a></h3>
            </div>
          </div>
          <div className='flex justify-center mb-5 z-40'>
            <div className='md:text-4xl bg-gray-500 text-3xl flex justify-center text-white a px-4 py-2 rounded-md md:w-56  z-40'>
              <h3 className='md:text-xl text-base py-1 px-2 font-bold'><a href='https://www.linkedin.com/in/scottamcnally'>mcnallsc@tcd.ie</a></h3>
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        </section>
        <section className='min-h-screen
        bg-gradient-to-r 
        from-rose-200 
        to-teal-200 
        via-cyan-200
        
        animate-gradient-xy'>
        <div className='flex justify-center'>
            <div className='mt-4  font-extrabold text-white text-4xl md:text-5xl  p-4 z-100'>
              Websites
            </div>
          </div>
        <div>

        </div>
        </section>
      </main>
    </div>
  );
}

export default App;
