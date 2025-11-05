// frontend/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PhoneAuth from './pages/PhoneAuth';
import StorePage from './pages/StorePage';
import VendorDashboard from './pages/VendorDashboard';
import { trackEvent } from './analytics';

const WhatsAppCTA = () => {
  const handleClick = () => {
    trackEvent('click', 'whatsapp_button', 'WhatsApp Inquiry Clicked');
    window.open('https://wa.me/91XXXXXXXXXX', '_blank');
  };

  return (
    <button onClick={handleClick}>
      📞 WhatsApp Now
    </button>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/phone-auth" element={<PhoneAuth />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/vendor" element={<VendorDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

