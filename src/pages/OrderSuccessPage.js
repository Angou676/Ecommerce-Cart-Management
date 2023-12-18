import React from "react";
import { Link } from "react-router-dom";

const OrderSuccessPage = () => {

  return (
    <div className=" mt-20 p-5 mb-10 ">
      <div className="bg-white p-8 rounded shadow-md w-96 m-auto text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="m-auto h-8 w-8 text-green-400 border-2 border-solid border-green-400 rounded-full"
        >
          <circle cx="12" cy="12" r="10" fill="transparent" />
          <path
            d="M9 16.2l-2.7-2.7L5 15l4 4 10-10-1.4-1.4z"
            fill="currentColor"
          />
        </svg>

        <h1 className="text-2xl font-semibold mb-4 mt-6">Order Confirmation</h1>

        <div className="">
          <p className="mb-4">Thank you for your order!</p>
          <p className="mb-4">Order Number: 123534454546 </p>
          <p className="mb-4">Estimated Delivery Date: 18-Dec-2023</p>
          <p className="mb-4">
            Delivery Address: Hsr layout, Bangalore, 560102
          </p>

          <div className="mt-8">
            <Link to="/" className="text-blue-500 underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
