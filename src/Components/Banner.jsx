import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-20 px-5 text-center my-7 rounded-lg">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          Deal Your <span className="text-purple-600">Products</span> <br />
          In A <span className="text-purple-600">Smart</span> Way !
        </h1>

        {/* Sub text */}
        <p className="text-gray-500">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search box */}
        <div className="flex justify-center">
          <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="search For Products, Categories..."
              className="flex-1 px-5 py-3 focus:outline-none text-gray-600"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-r-full transition">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Link
            to="/allProducts"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Watch All Products
          </Link>
          <Link
            to="/creatProducts"
            className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md font-medium hover:bg-purple-50 transition"
          >
            Post an Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
