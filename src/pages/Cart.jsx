import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const CartItem = ({ imageUrl, name, quantity, price }) => (
  <div className="flex items-center space-x-4 py-2 border-b border-gray-200">
    <img
      src={imageUrl}
      alt={name}
      className="w-20 h-20 object-cover rounded-md"
    />
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{name}</p>
      <div className="flex items-center space-x-2">
        <button className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-xs">
          -
        </button>
        <span>{quantity}</span>
        <button className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-xs">
          +
        </button>
      </div>
    </div>
    <p className="text-sm text-gray-700">${price.toFixed(2)}</p>
  </div>
);

const ShoppingCartSummary = () => {
  const cartItems = [
    { imageUrl: "src/assets/images/sweater.jpg", name: "Green Sweater", quantity: 1, price: 30.0 },
    { imageUrl: "src/assets/images/tshirt.jpg", name: "Blue T-shirt", quantity: 2, price: 15.0 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart Summary</h2>
      {cartItems.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}
      <div className="mt-4 text-right font-semibold">
        Total: ${total.toFixed(2)}
      </div>
      <Link to="/checkout">
      <button className="bg-indigo-500 cursor-pointer text-white rounded-md py-2 px-4 ml-2 font-semibold text-sm">
        Check Out
      </button>
      </Link>
    </div>
  );
};

const DiscountAndPromotions = () => (
  <div className="p-6 mb-8">
    <h3 className="text-md font-semibold mb-2">Discount and Promotions</h3>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter discount code"
        className="border border-gray-300 rounded-md py-2 px-3 w-full sm:w-auto"
      />
      <button className="bg-indigo-500 text-white rounded-md py-2 px-4 ml-2 font-semibold text-sm">
        Apply
      </button>
    </div>
  </div>
);

const ProceedToCheckout = () => (
  <div className="bg-indigo-500 text-white p-8 rounded-md flex items-center gap-8">
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-2">Proceed to Checkout</h2>
      <p className="text-sm text-indigo-200 mb-4">
        Complete your purchase now to enjoy fast shipping and transparent tax
        details. Secure your items before they're gone!
      </p>
      <button className="bg-white text-indigo-600 rounded-md py-3 px-6 font-semibold text-sm">
        Join for free
      </button>
    </div>
    <img src="src/assets/images/girls.jpg" alt="Shopping" className="w-64 rounded-md" />
  </div>
);

const Cart = () => (
  <div>
    <Navbar/>
    <div className="container mx-auto p-4">
      <ShoppingCartSummary />
      <DiscountAndPromotions />
      <ProceedToCheckout />
    </div>
    <Footer/>
  </div>
);
export default Cart;
