import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const formData = {
      firstName,
      phoneNumber,
      address,
      city,
      landmark,
    };

    // Simulate API call delay (2 seconds) before navigating
    setTimeout(() => {
      navigate("/order-success", { state: formData });
      setLoading(false); // Stop loading after navigation
      resetForm();
    }, 2000);
  };

  const resetForm = () => {
    setFirstName("");
    setPhoneNumber("");
    setAddress("");
    setCity("");
    setLandmark("");
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Place Your Order
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Enter your first name"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Enter your phone number"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Delivery Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Delivery Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Enter your delivery address"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* City Name */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Enter your city name"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        {/* Landmark */}
        <div>
          <label
            htmlFor="landmark"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            placeholder="Enter a nearby landmark"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white font-bold bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 ease-in-out"
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.97 7.97 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Placing Order...</span>
            </div>
          ) : (
            "Place Order"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateOrder;