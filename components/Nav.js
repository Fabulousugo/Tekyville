"use client"
import React, { useEffect, useRef, useState } from "react";
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  //  const [darkMode, setDarkMode] = useState(() => {
  //   const savedMode = typeof window !== 'undefined' ? localStorage.getItem('dark-mode') : null;
  //   return savedMode === 'true';
  //   });

  //   useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('dark-mode', 'true');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('dark-mode', 'false');
  //   }
  // }, [darkMode]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
      };


  return (
    <div class="bg-[#00243D] sticky top-0 z-50 border-b border-[#00BFFF]" >


      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <img src="icon-tekyvil.png" className="h-12 w-12"/>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-300 uppercase"
           >
              
              Tekyville
            </span>
          </a>
         
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="myLink"
                // class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                // style ={{color: '#00BFFF'}}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="myLink"
                // class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                // style ={{color: '#00BFFF'}}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="myLink"
                // class="font-medium tracking-wide text-blue-100 transition-colors duration-200 hover:text-teal-accent-400"
                // style ={{color: '#00BFFF'}}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                className="myLink"
                // class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:light-green-accent-400"
                // style ={{color: '#00BFFF',hover: '#000000'}}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                class="inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-s bg-deep-purple-accent-400 hover:bg-[#00003D] focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-50" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm" style={{backgroundColor:'#000033'}}>
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                       
                      >
                        <img src="icon-tekyvil.png" className="h-7 w-10"/>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-50 uppercase" >
                          Tekyville
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                    

                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="myLink"
                        >
                          
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                        className="myLink"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="myLink"
                        >
                          Pricing
                        </a>
                      </li>
                      
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          className="myLink"
                        >
                          About us
                        </a>
                      </li>
                        {/* <li>
                        <button onClick={toggleDarkMode} className="focus:outline-none">
                          {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                      </li> */}
                       {/* <li>
                        <button onClick={toggleDarkMode} className="px-4 py-2 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 border rounded focus:outline-none" style={{color: 'black'}}>
                          {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                      </li> */}
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-8 px-6 font-medium tracking-wide text-white transition duration-400 rounded shadow-sm bg-deep-purple-accent-400 hover:bg-[#00003D] focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
     

                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav; 