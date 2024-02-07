"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/admin",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in.
            <br />
            Quaerat fugiat ut assumenda excepturi exercitationem quasi.
            <br />
            In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handlesubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>

          <div className="divider">Or</div>

          <div className="flex mt-4 gap-x-2 justify-center items-center">
            <button
              onClick={() => signIn("google", { callbackUrl: "/admin" })}
              type="button"
              className="w-fit flex items-center justify-center  p-2 border border-greenColor rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <span> Signin with Google</span>
            </button>
          </div>
          <div className="pb-10">
            <p className="mt-8 text-xs font-light text-center text-inherit">
              Dont have an account?
              <Link
                href="/register"
                className="font-medium  hover:underline text-inherit"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
