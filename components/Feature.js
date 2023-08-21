export const Features = () => {
  return (
    <div>
      <div className=" bg-gray-50 flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row" style={{backgroundColor:"#001829"}}>
        <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20" style={{backgroundColor:"#001829"}}>
          <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-[#77e6da] sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">AI</span>
            </span>{' '}
            is Limitless
          </h2>
          <p className="mb-4 text-gray-400  00 lg:mb-6">
           Empowering hearts and minds with AI. Imagine a brighter tomorrow, together.
          </p>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-500 text-gray-200 hover:text-gray 5       >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a> */}
        </div>
        <div className="flex-grow pt-1">
          <div className="flex items-center mb-3">
            <span className="font-bold tracking-wide text-[#77e6da]">
              Categories
            </span>
            <span className="ml-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
          </div>
          <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
            <ul className="space-y-2">
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Computers
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Health
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Reference
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  World
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Video
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Nonprofit
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Educational
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Sports
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Health
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  // href="/"
                  className="transition-colors duration-300 text-gray-200 hover:text-gray-500"
                >
                  Personal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        
        <div className="relative">
        <video className="object-cover w-full h-56 sm:h-96" controls autoPlay loop muted playsinline>
          <source src="Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#001829] bg-opacity-50" />
      </div>
    </div>
    </div>
  );
};