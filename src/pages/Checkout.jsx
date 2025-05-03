import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderInfo = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-5">
      <div className="bg-white p-5 rounded w-full max-w-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-black mb-4">Checkout</h2>
        <p className="text-sm text-gray-600 mb-10 text-center">
          Please Ensure Only Signup Using eshopfashion.com Discount Link
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-3">Shipping Details</h3>
          <div className="mb-2">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-1">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label htmlFor="address1" className="block text-gray-700 text-sm font-semibold mb-1">
                Address 1
              </label>
              <input
                type="text"
                id="address1"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="Enter address 1"
              />
            </div>
            <div>
              <label htmlFor="address2" className="block text-gray-700 text-sm font-semibold mb-1">
                Address 2 (optional)
              </label>
              <input
                type="text"
                id="address2"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="Enter address 2"
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
             className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Enter city"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="state" className="block text-gray-700 text-sm font-semibold mb-1">
              State / Province / Region
            </label>
            <input
              type="text"
              id="state"
              className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Enter state, province or region"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="zipCode" className="block text-gray-700 text-sm font-semibold mb-1">
              Zip / Postal Code
            </label>
            <input
              type="text"
              id="zipCode"
             className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Enter zip or postal code"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-semibold mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Enter contact number"
            />
          </div>
          <p className="text-xs text-gray-500 mb-4">Please fill out all the required fields.</p>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Next
          </button>
        </div>
      </div>


      <div className="bg-white p-5 rounded w-full max-w-md flex flex-col items-center justify-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-3">Payment Information</h3>
          <div className="mb-2">
            <input
              type="text"
              id="fullName"
              className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Card Number"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
            <div>
              <input
                type="text"
                id="address1"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="Expiration Date(MM/YYYY)"
              />
            </div>
            <div>
              <input
                type="text"
                id="address2"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="CVV"
              />
            </div>
          </div>
          <div className="mb-2">
            <input
              type="text"
              id="city"
             className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Name on Card"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div>
              <input
                type="text"
                id="address1"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="Billing Address"
              />
            </div>
            <div>
              <input
                type="text"
                id="address2"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="Zip Code"
              />
            </div>
            <div>
              <input
                type="text"
                id="address2"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="Country/Region"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
            <div>
              <input
                type="text"
                id="address1"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="State/Province"
              />
            </div>
            <div>
              <input
                type="text"
                id="address2"
                className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
                placeholder="City"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="contactNumber"
              className="appearance-none border rounded border-gray-200 w-full py-2 px-3 text-gray-700"
              placeholder="Phone Number"
            />
          </div>
          <p className="text-xs text-gray-500 mb-4">Please fill out all the required fields.</p>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Pay Now
          </button>
        </div>
      </div>
      


      <div className="bg-white p-8 rounded-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center">Order Summary</h2>

      <div className="mb-4">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Green Sweater x 2</span>
          <span>$48.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Blue Jeans x 1</span>
          <span>$30.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>White Shirt x 1</span>
          <span>$25.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Black Mud Cake x 1</span>
          <span>$20.00</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal</span>
          <span>$18.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Tax</span>
          <span>$3.30</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Discount</span>
          <span>$2.30</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Total</span>
          <span>$114.70</span>
        </div>
      </div>

      <div className="mb-6 text-sm text-gray-600">
        <div className="flex items-center mb-1">
          <span>Payment Method: MasterCard</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path d="M3 6a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2H3zM5 8h14v8H5V8z" />
            <path d="M7 10h2v4H7v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z" />
          </svg>
        </div>
        <div>**** 2456</div>
        <div className="flex items-center mt-2">
          <span>Delivery Address: 1234 Street Name, City, State, Zip Code</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path d="M2.25 2.25h19.5a.75.75 0 01.75.75v19.5a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75zM12 8.75a1 1 0 100-2 1 1 0 000 2zm-3 1.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4z" />
          </svg>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Confirm Purchase
      </button>
    </div>
    </div>
  );
};

const CheckoutPage = () =>{
  return <div>
    <Navbar/>
    <OrderInfo/>
    <Footer/>
  </div>
}

export default CheckoutPage;