import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[600px] border-[2px] shadow-2xl p-5 rounded-md relative'>

        {/* Close Button */}
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

        <h3 className="font-bold text-lg">Signup</h3>

        {/* REAL FORM HERE */}
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 space-y-4'>

          {/* Name */}
          <div>
            <span>Name</span><br />
            <input
              type='text'
              placeholder='Enter your Full Name'
              {...register("name", { required: true })}
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
            {errors.name && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          {/* Email */}
          <div>
            <span>Email</span><br />
            <input
              type='email'
              placeholder='Enter your email'
              {...register("email", { required: true })}
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
            {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          {/* Password */}
          <div>
            <span>Password</span><br />
            <input
              type='password'
              placeholder='Enter your password'
              {...register("password", { required: true })}
              className='w-80 px-3 py-1 border rounded-md outline-none'
            />
            {errors.password && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          {/* Buttons */}
          <div className='flex justify-between mt-4'>
            <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>
              Signup
            </button>

            <p className='text-xl'>
              Have an account?{" "}
              <button
                className='underline text-blue-500 cursor-pointer'
                type='button'
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>
          </div>

        </form>

        {/* Login Modal */}
        <Login />

      </div>
    </div>
  )
}

export default Signup;
