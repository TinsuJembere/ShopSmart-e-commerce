import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FavoriteItem = ({ imageUrl, title, category }) => (
  <div className="rounded-md shadow-sm">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-32 object-cover rounded-md"
    />
    <div className="p-2">
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="text-xs text-gray-500">{category}</p>
      <button className="bg-indigo-100 text-indigo-600 rounded-md py-1 px-2 text-xs mt-2">
        Add to cart
      </button>
    </div>
  </div>
);

const OrganizedItem = ({ imageUrl, title, category }) => (
  <div className="rounded-md border border-gray-200">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-50 object-cover rounded-t-md"
    />
    <div className="p-2">
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="text-xs text-gray-500">{category}</p>
      <button className="text-indigo-600 text-xs mt-1">View Details</button>
    </div>
  </div>
);

const FavoriteItemsSection = () => {
  const favoriteItems = [
    { imageUrl: "src/assets/images/headphones.jpg", title: "Wireless Headphones", category: "Electronics" },
    { imageUrl: "src/assets/images/rug.jpg", title: "Nordic Style Rug", category: "Home Decor" },
    { imageUrl: "src/assets/images/wallet.jpg", title: "Leather Wallet", category: "Accessories" },
    { imageUrl: "src/assets/images/shoes.jpg", title: "Running Shoes", category: "Apparel" },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Favorite Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favoriteItems.map((item, index) => (
          <FavoriteItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const OrganizeFavoritesSection = () => {
  const categories = ["All Categories (24)", "Kitchen & Dining (10)", "..."];
  const organizedItems = [
    { imageUrl: "src/assets/images/livingroom.jpg", title: "Reading Nook", category: "Living Room" },
    { imageUrl: "src/assets/images/food.jpg", title: "Coffee Mugs", category: "Kitchen & Dining" },
    { imageUrl: "src/assets/images/whiteheadphone.jpg", title: "Headphones", category: "Electronics" },
    { imageUrl: "src/assets/images/art.jpg", title: "Abstract Art", category: "Wall Decor" },
    { imageUrl: "src/assets/images/bag.jpg", title: "Street Style", category: "Fashion" },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-8">
      <h2 className="text-lg font-semibold mb-4">Organize Favorites</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-gray-100 text-gray-700 rounded-full py-1 px-3 text-xs"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span>Sort by:</span>
        <button className="text-indigo-600 text-sm">Most Recent</button>
        <span>View:</span>
        <button className="text-indigo-600 text-sm">Grid</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {organizedItems.map((item, index) => (
          <OrganizedItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const QuickActionsSection = () => (
  <div className="bg-indigo-500 text-white p-8 rounded-md flex items-center gap-8">
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-2">Quick Actions</h2>
      <p className="text-sm text-indigo-200 mb-4">
        Easily manage your selections and finalize your purchases with just a
        few clicks!
      </p>
      <button className="bg-white text-indigo-600 rounded-md py-2 px-4 font-semibold text-sm">
        View Your Cart
      </button>
    </div>
    <img src="src/assets/images/shopping.jpg" alt="Shopping" className="w-80 rounded-md" />
  </div>
);

const Favorites = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-4">
      <FavoriteItemsSection />
      <OrganizeFavoritesSection />
      <QuickActionsSection />
    </div>
    <Footer />
  </div>
);

export default Favorites;
