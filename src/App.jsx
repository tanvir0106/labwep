import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Generator from './pages/Generator';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="flex flex-col h-screen h-[100dvh] overflow-hidden bg-white font-sans">
      <Navbar />
      <main className="flex-1 flex overflow-hidden bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<Generator />} />
        </Routes>
      </main>
      <Analytics />
    </div>
  );
}

export default App;
