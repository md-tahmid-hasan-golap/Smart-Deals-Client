import React from "react";
import { useLoaderData } from "react-router";

const ProductsDetails = () => {
  const productsData = useLoaderData();
  const {
    usage,
    title,
    status,
    seller_name,
    seller_image,
    seller_contact,
    price_min,
    price_max,
    location,
    image,
    email,
    description,
    created_at,
    condition,
    category,
  } = productsData || {};

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Product Image + Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-72 md:h-[400px] object-cover rounded-xl shadow-md"
          />
          <div className="flex justify-between items-center mt-4">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                status === "available"
                  ? "bg-green-100 text-green-700"
                  : status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status?.toUpperCase() || "UNKNOWN"}
            </span>
            <p className="text-sm text-gray-500">
              Posted: {new Date(created_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-gray-500 text-sm">
            Category:{" "}
            <span className="font-medium text-gray-700">{category}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <p className="bg-gray-100 px-3 py-2 rounded-lg text-gray-800">
              <span className="font-semibold">Price:</span> ৳{price_min} - ৳
              {price_max}
            </p>
            <p className="bg-gray-100 px-3 py-2 rounded-lg text-gray-800">
              <span className="font-semibold">Condition:</span> {condition}
            </p>
            <p className="bg-gray-100 px-3 py-2 rounded-lg text-gray-800">
              <span className="font-semibold">Usage:</span> {usage}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">{description}</p>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium mb-3">Seller Information</h3>
            <div className="flex items-center gap-4">
              <img
                src={seller_image}
                alt={seller_name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold text-gray-800">{seller_name}</p>
                <p className="text-gray-500 text-sm">{email}</p>
                <p className="text-gray-700 text-sm">📞 {seller_contact}</p>
                <p className="text-gray-700 text-sm">📍 {location}</p>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full w-full sm:w-auto">
              Contact Seller
            </button>
            <button className="btn border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full w-full sm:w-auto">
              I want Buy This Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
