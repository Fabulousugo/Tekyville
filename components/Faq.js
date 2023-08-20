export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-gray-500">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#007AA3] sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-400  lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{' '}
             Frequently asked questions
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
               What is Artificial Intelligence (AI)?
              </p>
              <p className="text-gray-500">
                AI is a field of computer science that aims to create machines that can perform tasks that would typically require human intelligence. 
                <br />
                <br />
                These tasks include problem-solving, understanding natural language, recognizing patterns, and making decisions.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                How does Machine Learning (ML) relate to AI?
              </p>
              <p className="text-gray-500">
               Machine Learning is a subset of AI that focuses on the development of algorithms that allow computers to learn from and make predictions or decisions based on data.
                <br />
                <br />
                 Rather than being explicitly programmed to perform a task, a machine learning model uses patterns in data to make predictions or decisions.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                What&apos;s the difference between Narrow AI and General AI?
              </p>
              <p className="text-gray-500">
                Narrow AI, or Weak AI, is designed and trained for a particular task, like virtual personal assistants or image recognition systems. General AI, or Strong AI, would have all the capabilities of human intelligence, being able to understand, learn, and perform any intellectual task that a human being can.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                Is AI dangerous?
              </p>
              <p className="text-gray-500">
                Like any tool, the danger of AI depends on how it&apos;s used. While AI has the potential to provide enormous benefits, there are concerns about unintended consequences, misuse (like in autonomous weapons), and potential job displacements. 
                <br />
                <br />
                Moreover, the concept of superintelligent AI, which surpasses human intelligence, raises ethical and safety concerns.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Will AI take away jobs?
              </p>
              <p className="text-gray-500">
                AI has the potential to automate certain tasks, which could displace some jobs. However, it can also create new job opportunities and industries.
                <br />
                <br />
                 The net effect on employment is still a topic of debate, but the transition may require reskilling and adaptation.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Do AI systems have emotions or consciousness?
              </p>
              <p className="text-gray-500">
                No, AI systems do not have emotions, consciousness, or self-awareness. They can simulate emotions or human-like responses based on their programming, but they don&apos;t experience them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};