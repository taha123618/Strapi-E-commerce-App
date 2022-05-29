import React from "react";

function forgetpassword() {
  return (
    <div classNameName="2xl:container h-screen m-auto min-h-screen">
      <div className="font-mono">
        {/* <!-- Container --> */}
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            {/* <!-- Row --> */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* <!-- Col --> */}
              <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                <img
                  src="https://image.shutterstock.com/image-vector/password-has-been-reset-successfully-600w-2018131799.jpg"
                  className="w-full h-full object-cover"
                  alt="forget_image"
                />
              </div>
              {/* <!-- Col --> */}
              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <div className="px-8 mb-4 text-center">
                  <h3 className="pt-4 mb-2 font-semibold text-2xl">
                    Forgot Your Password ?
                  </h3>
                  {/* <p className="mb-4 text-sm text-black">
                    We get it, stuff happens. Just enter your email address
                    below and we'll send you a link to reset your password!
                  </p> */}
                </div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Old Password
                    </label>
                    {/* <input
                      className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Old Password"
                    /> */}
                    <input
                      type="password"
                      placeholder="OLd Password"
                      className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />

                    <label
                      className="block mb-2 mt-2 text-sm font-bold text-black"
                      htmlFor="password"
                    >
                      New Password
                    </label>
                    {/* <input
                      className="w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="New Password"
                    /> */}
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button className="w-full px-6 py-3 rounded-lg bg-primary transition hover:bg-green-500 focus:bg-green-400 active:bg-green-600">
                      <span className="font-semibold text-white text-lg">
                        Reset Password
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forgetpassword;
