import React from "react";
import { Link } from "react-router";

const RecentProductsCard = ({ recentData }) => {
  const {
    _id,
    title,
    status,
    seller_name,
    seller_contact,
    price_min,
    price_max,
    location,
    image,
    created_at,
    condition,
    category,
  } = recentData;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 border rounded-2xl overflow-hidden">
      {/* Product Image */}
      <figure className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
            status === "available"
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
          }`}
        >
          {status || "Unknown"}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 space-y-2">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">
          Category:{" "}
          <span className="font-medium text-gray-700">{category}</span>
        </p>

        <div className="flex justify-between items-center text-sm">
          <p>
            <span className="font-medium">Price:</span> ৳{price_min} - ৳
            {price_max}
          </p>
          <p>
            <span className="font-medium">Condition:</span> {condition}
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Location:{" "}
          <span className="font-medium text-gray-700">{location}</span>
        </p>

        <div className="text-sm text-gray-500">
          Seller:{" "}
          <span className="font-medium text-gray-700">{seller_name}</span>
          <br />
          Contact: <span className="text-blue-600">{seller_contact}</span>
        </div>

        <p className="text-xs text-gray-400">
          Posted on: {new Date(created_at).toLocaleDateString()}
        </p>

        <div className="card-actions justify-end pt-2">
          <Link
            to={`/productsDetails/${_id}`}
            className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentProductsCard;
