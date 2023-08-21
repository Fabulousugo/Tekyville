export const Header = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          {/* <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div> */}
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#77e6da] sm:text-4xl sm:leading-none">
            Empowering Tomorrow,
            <br className="hidden md:block" />
            
            <span className="inline-block text-gray-300">
              One Algorithm at a Time.
            </span>
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
           Transforming the future with AI-driven insights and solutions. Dive in, and let innovation lead the way.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-sm bg-deep-purple-accent-400 hover:bg-[#00003D] text-teal-accent-400 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
      </div>
      <div>
        <img
          src="/Expedition (1).jpg"
          className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
};