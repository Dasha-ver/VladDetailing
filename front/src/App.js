import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import other pages like Home, Contact, etc. as needed

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Optional: Add a Navbar here */}
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* Add more routes as needed */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
