import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium rounded-lg bg-[#1E293B] hover:bg-[#334155] transition-colors flex items-center"
      aria-label={language === 'no' ? 'Bytt til engelsk' : 'Switch to Norwegian'}
    >
      <span className={`mr-2 ${language === 'no' ? 'font-bold' : 'text-gray-400'}`}>NO</span>
      <span className="text-gray-500 mx-1">|</span>
      <span className={`ml-1 ${language === 'en' ? 'font-bold' : 'text-gray-400'}`}>EN</span>
    </button>
  );
};

export default LanguageToggle; 