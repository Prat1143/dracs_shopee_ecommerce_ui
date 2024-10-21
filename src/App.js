import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ShopPage from './pages/ShopPage';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Toaster />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/shop" element={<ShopPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;