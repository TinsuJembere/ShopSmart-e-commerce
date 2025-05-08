import React from 'react';

function FilterOptions() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Filter Options</h2>

      {/* Categories */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        <div className="space-y-1 flex flex-col">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            <span className="ml-2 text-gray-700">Shoes</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            <span className="ml-2 text-gray-700">Handbags</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500" />
            <span className="ml-2 text-gray-700">Dresses</span>
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4 w-100">
        <h3 className="text-lg font-medium mb-2">Price Range ($40 - $280)</h3>
        <div className="relative">
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-500 rounded-full h-2 w-1/4"></div> {/* Example width */}
             </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>$40</span>
            <span>$280</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-lg font-medium mb-2">Rating</h3>
        <p className="text-gray-500">Coming soon...</p>
      </div>
    </div>
  );
}

export default FilterOptions;