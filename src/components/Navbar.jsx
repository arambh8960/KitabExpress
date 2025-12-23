import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      element.setAttribute("data-theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.setAttribute("data-theme", "light");
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Course</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="shadow-md fixed top-0 left-0 right-0 z-50 bg-base-100">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="navbar bg-base-100">

            {/* LEFT */}
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {navItems}
                </ul>
              </div>

              {/* FIXED IMAGE PATH FOR GITHUB PAGES */}
              <Link to="/" className="text-2xl font-bold cursor-pointer">
                <img
                  src="/KitabExpress/image.png"
                  className="w-50 h-15 rounded-full"
                  alt="BookStore"
                />
              </Link>
            </div>

            {/* RIGHT */}
            <div className="navbar-end space-x-3">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
              </div>

              {/* Search box */}
              <div className="hidden md:block">
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input
                    type="search"
                    className="grow outline-none"
                    required
                    placeholder="Search"
                  />
                </label>
              </div>

              {/* Theme toggle */}
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                  }
                />
                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,4.93l.71.71A1,1,0,0,0,5.64,7.05Zm12,1.41a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29l.71-.71a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0l-.71.71A1,1,0,0,0,17.66,8.46Zm-1.29,8.66a1,1,0,0,0-.7.29l-.71.71a1,1,0,1,0,1.41,1.41l.71-.71a1,1,0,0,0,0-1.41A1,1,0,0,0,16.37,17.12ZM19,12a1,1,0,0,0,1-1h1a1,1,0,0,0,0,2H20A1,1,0,0,0,19,12Zm-7,7a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Z" />
                </svg>
                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
                </svg>
              </label>

              {/* LOGIN */}
              <div>
                <button
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-600 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
