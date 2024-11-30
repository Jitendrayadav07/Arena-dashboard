import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Arena from './pages/Arena';
import Market from './pages/Market';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Navbar />
          <main className="mt-20 text-white">
            <Routes>
              <Route path="/" element={<Arena />} />
              <Route path="/arena" element={<Arena />} />
              <Route path="/market" element={<Market />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
