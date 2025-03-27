import React, { createContext, useState, useContext } from 'react';

// Create language context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('no'); // Default to Norwegian

  const toggleLanguage = () => {
    setLanguage(language === 'no' ? 'en' : 'no');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 