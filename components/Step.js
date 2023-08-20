export const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{backgroundColor:'#001829'}}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-deep-purple-accent-400">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Read the recipe
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Take a good look at the recipe. Don’t just skim it; read it
              through from start to finish. As you read, visualize doing the
              steps which will help when you’re prepping.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-500 rounded bg-teal-accent-400">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Know the assumptions
              </p>
            </div>
            <p className="text-sm text-gray-500">
              All recipes are written using certain conventions, which define
              the characteristics of common ingredients. The rules vary from
              place to place.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-500 bg-deep-purple-accent-400 md:bg-teal-accent-400">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Figure out the timing
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Check the “prep time” and “total time” listed at the top to be
              sure you have enough time to complete the recipe. Look for hints,
              such as the words “meanwhile” .
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-500 rounded md:text-white bg-teal-accent-400 md:bg-deep-purple-accent-400">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">Plan ahead</p>
            </div>
            <p className="text-sm text-gray-500">
              Missing a prep instruction can leave you scrambling in the middle
              of a recipe. Keep your eyes peeled for time-consuming steps and be
              careful.
            </p>
          </div>
        </div>
        <div className="relative md:col-span-2 lg:col-span-2">
          <img
            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
            src="/A boy in the forest (2).jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
           <div className="absolute inset-0 bg-[#00BFFF] bg-opacity-20 rounded shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};