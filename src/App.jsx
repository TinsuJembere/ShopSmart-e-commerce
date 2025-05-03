import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import Favorites from './pages/Favorites';
import Cart from './pages/cart';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;

