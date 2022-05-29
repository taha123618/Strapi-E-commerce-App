import React from "react";

const index = () => {
  return (
    <div class="border-b">
      <div class="container m-auto px-6 pt-24 border-r border-l md:px-12  lg:pt-[4.8rem] lg:px-7">
        <div class="flex items-center flex-wrap gap-12 px-2 md:px-0">
          <div class="lg:w-6/12 lg:-ml-7">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="shoes"
                loading="lazy"
                width="640"
                height="640"
              />
              <div class="absolute bottom-2 right-2 bg-transparent">
                <div class="flex p-1">
                  <button aria-label="button-left" class="p-3 border-r">
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="rotate-180"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      />
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg> */}
                  </button>
                  <button aria-label="button-right" class="p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-right"
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

          <div class="relative lg:w-6/12 lg:-ml-20">
            <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
              A Look for every <span class="text-primary">mood</span>.
            </h1>
            <div class="mt-16 space-y-8 lg:ml-32">
              <p class="text-black">
                SunShine Chemical is the leading chemical Shop in Pakistan since
                1999 0m wards.
              </p>
              <div class="flex space-x-4 ">
                <button
                  type="button"
                  title="Start buying"
                  class="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max"
                >
                  <span class="block text-white text-sm">Shop now</span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  class="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 sm:w-max"
                >
                  <span class="block text-black bg-cyan-500 text-semibold">
                    View store
                  </span>
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
