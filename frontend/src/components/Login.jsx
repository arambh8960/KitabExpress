import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function Login() {
    
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data); 
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box shadow-2xl">

          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          {/* REAL FORM HERE */}
          <h3 className="font-bold text-lg">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">

            {/* Email */}
            <div>
              <span>Email</span>
              <br />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
            </div>

            {/* Password */}
            <div>
              <span>Password</span>
              <br />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.password && <p className="text-red-500 text-sm">This field is required</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">
                Login
              </button>

              <p>
                Not registered?
                <Link to="/signup" className="underline text-blue-500 cursor-pointer"> Signup</Link>
              </p>
            </div>

          </form>
        </div>
      </dialog>
    </div>
  )
}
