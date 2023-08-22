export const Step = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-[#77e6da]" style={{backgroundColor:'#001829'}}>
      <div className="max-w-xl mb-6">
           <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#77e6da] sm:text-3xl md:mx-auto">
              
              <br className="hidden md:block" />
              {' '}
              Four simple methods
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-gray-300">
                for training an AI model.
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-500 md:text-lg">
               Dive into the future with our state-of-the-art AI solutions. We don&apos;t just predict the future, we shape it.
            </p>
          </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-deep-purple-accent-400">
                1
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Supervised Learning:
              </p>
            </div>
            <p className="text-sm text-gray-500">
             This is one of the most common training methods. In supervised learning, the model is provided with labeled training data, and the aim is to learn a mapping from inputs to outputs.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-500 rounded bg-teal-accent-400">
                2
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Unsupervised Learning:
              </p>
            </div>
            <p className="text-sm text-gray-500">
              In unsupervised learning, the model is given data without explicit labels and is tasked with finding patterns or structures in the data, such as clustering or reducing dimensions.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-500 bg-deep-purple-accent-400 md:bg-teal-accent-400">
                3
              </span>
              <p className="text-lg font-semibold sm:text-base">
                Reinforcement Learning: 
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Reinforcement learning involves agents who take actions in an environment to maximize cumulative reward. The model learns to perform actions by receiving rewards or penalties in return.
            </p>
          </div>
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-[#00243D]">
            <div className="flex items-center mb-1">
              <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-500 rounded md:text-white bg-teal-accent-400 md:bg-deep-purple-accent-400">
                4
              </span>
              <p className="text-lg font-semibold sm:text-base">Transfer Learning:</p>
            </div>
            <p className="text-sm text-gray-500">
              In transfer learning, a pre-trained model (a model trained on a large dataset for a task) is fine-tuned for a related but different task. This method saves a lot of computational time and resources as one leverages the patterns learned from the initial task.
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