import React from "react";

const index = () => {
  return (
    <div className="border-b">
      <div className="container m-auto px-6 pt-24 border-r border-l md:px-12  lg:pt-[4.8rem] lg:px-7">
        <div className="flex items-center flex-wrap gap-12 px-2 md:px-0">
          <div className="lg:w-6/12 lg:-ml-7">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="shoes"
                loading="lazy"
                width="640"
                height="640"
              />
              <div className="absolute bottom-2 right-2 bg-transparent">
                <div className="flex p-1">
                  <button
                    aria-label="button-left"
                    className="p-3 border-r"
                  ></button>
                  <button aria-label="button-right" className="p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:w-6/12 lg:-ml-20">
            <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
              A Look for every <span className="text-primary">mood</span>.
            </h1>
            <div className="mt-16 space-y-8 lg:ml-32">
              <p className="text-secondary">
                SunShine Chemical is the leading chemical Shop in Pakistan since
                1999 0m wards.
              </p>
              <div className="flex space-x-4 ">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-secondary hover:bg-yellow-300 active:bg-yellow-200 focus:bg-secondary sm:w-max"
                >
                  <span className="block text-black text-sm">Shop now</span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-primary hover:bg-green-300 active:bg-green-400 focus:bg-primary sm:w-max"
                >
                  <span className="block text-black text-sm">View store</span>
                </button>
              </div>
            </div>
            '
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
