import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/allProducts"
        >
          All Products
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/myProducts"
        >
          My Products
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/mybits"
        >
          My Bids
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/creatProducts"
        >
          Create Product
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">
          Smart<span className="text-purple-600">Deals</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3 mr-5">
        <Link
          to="/login"
          className="px-6 py-2 border border-purple-500 text-purple-600 font-medium rounded-md hover:bg-purple-50 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-md hover:opacity-90 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
