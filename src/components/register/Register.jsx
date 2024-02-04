/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Register() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-greenColor uppercase">
          Sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="name"
              className="block text-sm font-semibold text-greenColor"
            >
              Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 !text-greenColor !bg-white border !border-inherit rounded-md focus:border-greenColor focus:ring-greenColor focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-greenColor"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 !text-greenColor !bg-white border !border-inherit	 rounded-md focus:border-greenColor focus:ring-greenColor focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-greenColor"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-greenColor bg-white border rounded-md focus:border-greenColor focus:ring-greenColor focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-greenColor rounded-md hover:bg-greenColor focus:outline-none focus:bg-greenColor">
              Register
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2 justify-center items-center">
          <button
            type="button"
            className="w-fit flex items-center justify-center  p-2 border border-greenColor rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <span> SignUp with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-greenColor">
          have an account?
          <a href="#" className="font-medium text-greenColor hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
