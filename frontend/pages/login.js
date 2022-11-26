import React from "react";
import Link from "next/Link";
import Images from "../utils/Images";
import Image from "next/image";

const login = () => {
  return (
    <div className="2xl:container h-screen m-auto min-h-screen">
      <div hidden className="fixed inset-0 w-7/12 lg:block">
        {/* <span className="absolute left-6 bottom-6 text-sm">
          Taha Ahmed
          <a href="#" target="blank" title="SunShine Chemicals">
            @ CopyRight By SunShine Chemicals
          </a>
        </span> */}
        {/* <video
          className="w-full h-full object-cover"
          loop
          autoplay
          url={Images.video}
          // poster="../public/images/bg.jpg"
        ></video> */}
      </div>
      <div
        hidden
        role="hidden"
        // ye wale line h bg ke
        className="fixed inset-0 w-6/12 ml-auto"
        // bg-opacity-70 backdrop-blur-xl lg:block
      ></div>
      <div className="relative h-full ml-auto lg:w-6/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="space-y-4">
            <Link href="/">
              <a>
                <Image
                  src={Images.logo}
                  width={100}
                  height={100}
                  // className="mr-1"
                  alt="logo"
                  priority
                />
              </a>
            </Link>
            <p className="font-bold text-lg text-black">
              Welcome to SunShine Chemicals
              <span className="text-primary text-2xl font-bold mx-1">
                || Login Please
              </span>
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <button className="h-12 px-6 border border-blue-100 rounded bg-red-300 hover:bg-red-400 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex items-center space-x-4 justify-center">
                <img src="images/google.svg" className="w-5" alt="" />
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  with Google
                </span>
              </div>
            </button>

            <button className="h-12 px-6 rounded bg-gray-800 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
              <div className="flex space-x-4 items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="block w-max font-medium tracking-wide text-sm text-white">
                  with Github
                </span>
              </div>
            </button>
          </div>

          <div role="hidden" className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>

          <form className="space-y-8 py-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div className="flex flex-col items-end">
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              <Link href="/forgetpassword">
                <button type="reset" className="w-max p-3 -mr-3">
                  <span className="text-sm tracking-wide text-primary">
                    Forgot password?
                  </span>
                </button>
              </Link>
            </div>

            <div>
              {/* login  */}
              <button className="w-full px-6 py-3 rounded-lg bg-primary transition hover:bg-green-500 focus:bg-green-400 active:bg-green-600">
                <span className="font-semibold text-white text-lg">Login</span>
              </button>
              <Link href="/singnup">
                <button type="reset" className="w-max p-3 ml-3">
                  Don't have an account ?
                  <span className="text-sm mx-1 tracking-wide text-primary">
                    Create new account
                  </span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
