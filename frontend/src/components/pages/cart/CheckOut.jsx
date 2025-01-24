import { useState } from "react";
import { FaCreditCard ,FaGooglePay} from "react-icons/fa";
import {AiFillBank} from 'react-icons/ai'
import { IoMdLock } from "react-icons/io";

const CheckoutPage = () => {

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });

  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          newErrors.fullName = "Full name is required";
        } else {
          delete newErrors.fullName;
        }
        break;
      case "postalCode":
        if (!/^\d{5}(-\d{4})?$/.test(value)) {
          newErrors.postalCode = "Invalid postal code format";
        } else {
          delete newErrors.postalCode;
        }
        break;
      default:
        if (!value.trim()) {
          newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else {
          delete newErrors[name];
        }
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] max-w-4xl   mx-auto bg-white  rounded-lg shadow-md mt-4 pt-4 sm:px-6 lg:px-8">
    <form onSubmit={handleSubmit}>
        {/* Shipping Details */}
        <h2 className="text-2xl text-black font-semibold mb-6 text-center">Shipping Details</h2>
        <div className="space-y-4">
        <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name *
            </label>
            <input
            type="text"
            id="fullName"
            name="fullName"
            value={shippingDetails.fullName}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full bg-gray-200 outline-none border-2 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            aria-label="Full Name"
            />
            {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
        </div>

        <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address *
            </label>
            <input
            type="text"
            id="address"
            name="address"
            value={shippingDetails.address}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full rounded-md bg-gray-200 outline-none border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            aria-label="Address"
            />
            {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
        </div>

        
        <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City *
            </label>
            <input
            type="text"
            id="city"
            name="city"
            value={shippingDetails.city}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full rounded-md bg-gray-200 outline-none border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            aria-label="City"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

            
        
        <div className="grid grid-cols-2 gap-4">

        <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                Postal Code *
            </label>
            <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full rounded-md bg-gray-200 outline-none border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
                aria-label="Postal Code"
            />
            {errors.postalCode && (
                <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
            )}
            </div>
        
        
        <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country *
            </label>
            <select
            id="country"
            name="country"
            value={shippingDetails.country}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full rounded-md bg-gray-200 outline-none border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            aria-label="Country"
            >
            <option value="">Select a country</option>
            <option value="US">India</option>
            </select>
            {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
            )}
        </div>

        </div>
        
        </div>

        {/* Payment Method */}
        <div className="mt-8">
        <h2 className="text-2xl text-black font-semibold mb-2">Payment Method</h2>
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
            <button
                type="button"
                onClick={() => setSelectedPayment("credit-card")}
                className={`flex-1 p-4 border rounded-lg ${
                    selectedPayment === "credit-card"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300"
                }`}
                >
                <FaCreditCard className="w-6 h-6 mx-auto mb-2" />
                <span className="block text-sm text-center">Credit Card</span>
                </button>

                <button
                type="button"
                onClick={() => setSelectedPayment("upi")}
                className={`flex-1 p-4 border rounded-lg ${
                    selectedPayment === "upi"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300"
                }`}
                >
                <FaGooglePay className="w-6 h-6 mx-auto mb-2" />
                <span className="block text-sm text-center">UPI</span>
                </button>

                <button
                type="button"
                onClick={() => setSelectedPayment("internet-banking")}
                className={`flex-1 p-4 border rounded-lg ${
                    selectedPayment === "internet-banking"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-300"
                }`}
                >
                <AiFillBank className="w-6 h-6 mx-auto mb-2" />
                <span className="block text-sm text-center">Internet Banking</span>
                </button>
            </div>
            </div>
        </div>

        {/* Submit Buttons */}
        <div className="mt-8 space-y-4">
            <button
            type="submit"
            disabled={isProcessing}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
            {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  <span>Processing...</span>
                </div>
            ) : (
                <div className="flex items-center space-x-2">
                  <IoMdLock className="w-5 h-5" />
                  <span>Place Order</span>
                </div>
            )}
            </button>
        </div>
        </form>
    </div>
        
      
  );
};

export default CheckoutPage;