import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0F172A]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative overflow-hidden bg-[#0F172A] p-1.5 rounded-lg shadow-md mr-2">
                <img
                  src="/484646089_2089156948230045_4554784514395838675_n.jpg"
                  alt="Stampy Logo"
                  className="h-7 w-7 rounded-md transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Stampy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <NavLink to="/" isActive={location.pathname === "/"}>
                {translations.navbar.home[language]}
              </NavLink>
              <NavLink to="/features" isActive={location.pathname === "/features"}>
                {translations.navbar.features[language]}
              </NavLink>
              <NavLink to="/download" isActive={location.pathname === "/download"}>
                {translations.navbar.download[language]}
              </NavLink>
              <Link 
                to="/download" 
                className="ml-4 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:translate-y-[-2px]"
              >
                {translations.navbar.getStarted[language]}
              </Link>
              <div className="ml-4">
                <LanguageToggle />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="mr-2">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1E293B] focus:outline-none transition-colors"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0F172A]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)} isActive={location.pathname === "/"}>
                {translations.navbar.home[language]}
              </MobileNavLink>
              <MobileNavLink to="/features" onClick={() => setIsOpen(false)} isActive={location.pathname === "/features"}>
                {translations.navbar.features[language]}
              </MobileNavLink>
              <MobileNavLink to="/download" onClick={() => setIsOpen(false)} isActive={location.pathname === "/download"}>
                {translations.navbar.download[language]}
              </MobileNavLink>
              <div className="pt-2">
                <Link
                  to="/download"
                  className="block bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-4 py-2 rounded-lg text-base font-medium w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.navbar.getStarted[language]}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive 
        ? 'text-white bg-[#1E293B]' 
        : 'text-gray-300 hover:text-white hover:bg-[#1E293B]/60'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick, isActive }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isActive 
        ? 'text-white bg-[#1E293B]' 
        : 'text-gray-300 hover:text-white hover:bg-[#1E293B]'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar; 