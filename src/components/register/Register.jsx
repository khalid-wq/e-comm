"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmite = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/register", {
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-greenColor uppercase">
          Sign up
        </h1>
        <form className="mt-6" onSubmit={handleSubmite}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-greenColor"
            >
              Name
            </label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="block w-full px-4 py-2 mt-2  !bg-white border !border-inherit rounded-md focus:border-greenColor focus:ring-greenColor focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-greenColor"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="block w-full px-4 py-2 mt-2  !bg-white border !border-inherit	 rounded-md focus:border-greenColor focus:ring-greenColor focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-greenColor"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-greenColor focus:ring-greenColor focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-greenColor rounded-md hover:bg-greenColor focus:outline-none focus:bg-greenColor"
            >
              Register
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2 justify-center items-center">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
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
