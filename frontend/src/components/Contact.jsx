import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="p-8 rounded-2xl shadow-2xl w-full max-w-md border-[2px] dark:bg-slate-800 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border h-28 resize-none outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 transition p-3 rounded-lg text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}
