import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Download from './pages/Download';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  // Get the basename from the homepage in package.json for GitHub Pages
  const basename = process.env.PUBLIC_URL;
  
  return (
    <LanguageProvider>
      <Router basename={basename}>
        <div className="min-h-screen relative bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orb */}
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[50%] bg-gradient-to-br from-[#334155]/10 to-transparent rounded-full filter blur-[80px]"></div>
            
            {/* Minimal grid */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
            
            {/* Single accent line */}
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="relative">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/download" element={<Download />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
