import './App.css';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import{AiFillLinkedin} from 'react-icons/ai';
import me from './me.jpg'
import netsoc from './netsoc.png'
import portfolio from './portfolio.png'
import {useRef} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const refContact = useRef(null);
  const refWebsite = useRef(null);
  const refAbout = useRef(null);
  const refHome = useRef(null);
  const handleClickContact = () => {
    refContact?.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickWebsite = () => {
    refWebsite?.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickAbout = () => {
    refAbout?.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClickHome = () => {
    refHome?.current.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <main ref={refHome} className='bg-white'>
      <nav className=" absolute w-full bg-white bg-opacity-90 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-center">
                <div className=' animate-gradient-xy font-extrabold text-transparent md:text-lg  bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 p-4 z-100'>
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
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center grid">
                <button onClick={handleClickHome} className=" text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center">
                  Home
                </button>
                <button onClick={handleClickContact} className=" text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center">
                  Get In Touch
                </button>
                <button onClick={handleClickWebsite} className=" text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center">
                  Websites
                </button>
                <button onClick={handleClickAbout} className=" text-black hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-bold text-center">
                  About Me
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
        <section className='min-h-screen             
            bg-gradient-to-r 
            from-blue-400 
            to-orange-500 
            via-purple-500
            animate-gradient-xy'>
        <div class="flex items-center justify-center h-96 w-screen 

            "> 
            <div className='md:mt-96 mt-72'>
              <div className='text-center   p-8 text-white font-extrabold text-4xl md:text-5xl animate-appearfade  z-80'>
                  Thoughtful Web Design For Your Business
              </div>
              <p className=' lg:border-r-4 lg:border-r-white lg:pr-5 xl:text-lg text-center text-white m-3 lg:animate-typing lg:whitespace-nowrap lg:overflow-hidden animate-appearfade'>
                Enhance your businesses branding with a sleek and modern website. Work together with me to perfect the ideal showcase of your business.
              </p>
            </div>
         </div>
         <div className='md:h-56 h-36  z-4'></div>
         <div className=' md:flex justify-center z-4'>
          <div className='relative mx-4 my-3 z-4 animate-appearfadeslow'>
         <div class=" absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25 z-4"></div>
        <div class="relative px-4 py-5 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 z-4">

          <div class="space-y-2 md:text-lg">
            <p class="text-slate-800 ">Reach out to discuss your next website with me!</p>
            <button onClick={handleClickContact} class="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Contact →</button>
          </div>
        </div>
        </div>
        <div className='relative mx-4 my-3 animate-appearfadeslow'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25"></div>
        <div class="relative px-4 py-5 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">

          <div class="space-y-2 md:text-lg">
            <p class="text-slate-800">View some of the projects that I've worked on recently</p>
            <button onClick={handleClickWebsite} class="block text-indigo-400 group-hover:text-slate-800 transition duration-200">Websites →</button>
          </div>
        </div>
        </div>
         </div>
         </section>
        <section className='' ref={refContact}>
          <div className='flex justify-center'>
            <div className='mt-4 animate-gradient-xy font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 p-4 z-100'>
              Contact Me
            </div>
          </div>
          <div className='flex justify-center z-100 mt-4 mb-8'>
          <div className='relative mx-6'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25 z-4"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 z-4">
          <div class="space-y-2 md:text-lg">
            <p class="text-slate-800 text-center p-4">If you are interested in collaborating or just have any questions, reach out to me by email or through LinkedIn message</p>
            <div className='md:flex justify-center'>
            <div className='flex justify-center mb-5 mx-3 z-40'>
            <div className='md:text-4xl bg-blue-500 text-3xl flex justify-center text-white a px-4 py-2 rounded-md md:w-56  z-40'>
              <AiFillLinkedin></AiFillLinkedin>
              <h3 className='md:text-xl text-base py-1 px-2 font-bold'><a href='https://www.linkedin.com/in/scottamcnally'>LinkedIn</a></h3>
            </div>
          </div>
          <div className='flex justify-center mb-5 z-40 mx-3'>
            <button onClick={() => window.location = 'mailto:mcnallsc@tcd.ie'} className='md:text-4xl bg-gray-500 text-3xl flex justify-center text-white a px-4 py-2 rounded-md md:w-56  z-40'>
              <h3 className='md:text-xl text-base py-1 px-2 font-bold'>mcnallsc@tcd.ie</h3>
            </button>
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
        animate-gradient-xy' ref={refWebsite}>
        <div className='flex justify-center'>
            <div className='mt-4 mb-6  font-extrabold text-white text-4xl md:text-5xl  p-4 z-100'>
              Websites
            </div>

          </div>  
        <div className=' grid  place-items-center'>
          <div className='  lg:flex-row lg:flex-wrap mx-10 mb-4 md:w-1/2 md:text-lg'>
          <a href="https://netsoc.netlify.app/">
          <img src={netsoc} className='rounded-xl object-cover   z-0'  width={'100%'} height={'100%'} alt="netsoc"/>
          </a>
          <p>
            <b>Dublin University Internet Society Website</b><br/>
            This is the website I made for Trinity's "NetSoc" This included some interesting features such as ReactJS Particles. Click to view the live website!          </p>
          </div>
          <div className='flex flex-col  py-4 lg:flex-row lg:flex-wrap mx-10 md:w-1/2 md:text-lg'>
            <a href="https://mcnallsc.com/">
          <img src={portfolio} className='rounded-xl object-cover   z-100'  width={'100%'} height={'100%'} alt="netsoc"/>
          </a>
          <p>
            <b>Personal Portfolio Website</b><br/>
            A clean and simple website I made to give to employers with my work experience and projects. Made to be very mobile-friendly. Click to view the live website!
          </p>
          </div>
          {/* <Carousel className="rounded-xl">
          </Carousel> */}
          </div>
        <div>

        </div>
        </section>
        <section className='' ref={refAbout}>
        <div className='flex justify-center'>
            <div className='mt-4 animate-gradient-xy font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 p-4 z-100'>
              About Me
            </div>
          </div>
        <div className='flex justify-center items-center z-100 mt-4 mb-8 lg:mx-12 xl:mx-24 2xl:mx-48'>
          <div className='relative mx-6'>
         <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 animate-gradient-xy rounded-lg blur opacity-25 z-100"></div>
        <div class="relative px-7 py-6 bg-blue-200 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 z-100">
          <div class="space-y-2 md:flex justify-center items-center text-center grid  place-items-center">
            <img
                className="h-48 border border-white border-4 rounded-xl"
                src={me}
                alt="myself"
            >
            </img>
            <p class="text-slate-800 text-center p-4 md:text-lg">My name is Scott McNally and I am a computer science student studying at Trinity College Dublin and 
                  KTH Royal Institute Stockholm. I have a passion for making interesting and fun websites mainly using React and TailwindCSS. I learned web 
                  design through a combination of personal projects, college/school courses and online courses.
            </p>
          </div>
        </div>
        </div>
        </div>
        </section>
      </main>

    
  );
}

export default App;
