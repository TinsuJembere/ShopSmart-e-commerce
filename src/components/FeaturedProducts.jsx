import React from 'react';

const products = [
  {
    title: 'Wireless Headphones',
    description: ['Experience premium sound quality.', 'Noise-cancelling feature included.'],
    image: 'src/assets/images/headphone.jpg',
  },
  {
    title: 'Smartwatch',
    description: ['Track your fitness and health.', 'Water-resistant and stylish design.'],
    image: 'src/assets/images/watch.jpg',
  },
  {
    title: 'Compact Drone',
    description: ['Capture stunning aerial footage.', 'Easy to control and lightweight.'],
    image: 'src/assets/images/drone.jpg',
  },
  {
    title: 'DSLR Camera',
    description: ['Perfect for professional photography.', 'Includes multiple lens options.'],
    image: 'src/assets/images/camera.jpg',
  },
  {
    title: 'Bean Bag Chair',
    description: ['Relax in ultimate comfort.', 'Available in various colors.'],
    image: 'src/assets/images/deanbag.jpg',
  },
  {
    title: 'Dinner Set',
    description: ['Complete set for family meals.', 'Durable and dishwasher safe.'],
    image: 'src/assets/images/dinnerset.jpg',
  },
  {
    title: 'Gaming Laptop',
    description: ['High performance for gamers.', 'Ultra-fast graphics and processing.'],
    image: 'src/assets/images/laptop.jpg',
  },
  {
    title: 'Leather Backpack',
    description: ['Perfect for travel and work.', 'Durable and spacious design.'],
    image: 'src/assets/images/backbag.jpg',
  },
];

const ProductCard = ({ product }) => (
  <div className="rounded-lg p-4 shadow-lg transition">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-40 object-cover rounded-md mb-3"
    />
    <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
    {product.description.map((line, idx) => (
      <p className="text-gray-500 text-sm" key={idx}>
        {line}
      </p>
    ))}
    <button className="mt-3 px-4 py-1 border border-indigo-500 text-indigo-500 text-sm w-full rounded hover:bg-indigo-50">
      Buy Now
    </button>
  </div>
);

const FeaturedProducts = () => {
  return (
    <div className="bg-white p-6 md:p-10 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
