import React from "react";
import FilterOptions from "../components/FilterOptions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: 'Galaxy S23',
    price: 799,
    image: 'src/assets/images/galaxy.jpg', 
  },
  {
    id: 2,
    name: 'AirPods Max',
    price: 549,
    image: 'src/assets/images/airpods.jpg', 
  },
  {
    id: 3,
    name: 'MacBook Air',
    price: 999,
    image: 'src/assets/images/macbook.jpg', 
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 399,
    image: 'src/assets/images/applewatch.jpg', 
  },
  {
    id: 5,
    name: 'Canon EOS R10',
    price: 1099,
    image: 'src/assets/images/canon.jpg',
  },
  {
    id: 6,
    name: 'PS5 Console',
    price: 499,
    image: 'src/assets/images/pcs.jpg', 
  },
  {
    id: 7,
    name: 'Echo Dot',
    price: 49,
    image: 'src/assets/images/mike.jpg',
  },
  {
    id: 8,
    name: 'Logitech G502',
    price: 79,
    image: 'src/assets/images/logitec.jpg', // Placeholder image
  },
];

function ProductsList() {
  return (
    <div>
      <Navbar />
      <FilterOptions />
      <div className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Product Grid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md mt-4 w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsList;