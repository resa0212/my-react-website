import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaApple, FaWindows, FaQrcode, FaBuilding, FaUser, FaArrowRight, FaEnvelope, FaCloudDownloadAlt, FaRegLightbulb, FaQuestionCircle, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Download = () => {
  const { language } = useLanguage();
  const t = translations.download;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [activeTab, setActiveTab] = useState('customer');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + "/apps/Stampy Setup 1.0.0.exe";
    link.download = "Stampy Setup 1.0.0.exe";
    link.click();
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden pt-16 pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#1E293B] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djI2aDI0VjM0aC0yNHpNMCAzNHYyNmgyNFYzNEgwek0wIDBoMjR2MjZIMFYwem0zNiAwaDI0djI2SDM2VjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Overlaid glow */}
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 ${
          activeTab === 'business' ? 'bg-blue-500' : 'bg-purple-500'
        }`}></div>
        <div className={`absolute -bottom-40 -left-20 w-80 h-80 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 ${
          activeTab === 'business' ? 'bg-blue-400' : 'bg-purple-400'
        }`}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-3"
            >
              <div className={`p-3 rounded-2xl shadow-lg ${
                activeTab === 'business'
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-blue-500/20'
                : 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-purple-500/20'
              }`}>
                {activeTab === 'business' ? (
                  <FaBuilding className="h-10 w-10 text-white" />
                ) : (
                  <FaUser className="h-10 w-10 text-white" />
                )}
              </div>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
                  {activeTab === 'business' 
                    ? (language === 'no' ? 'Last ned Stampy for bedrifter' : 'Download Stampy for Business')
                    : (language === 'no' ? 'Last ned Stampy-appen' : 'Download the Stampy App')
                  }
                </h1>
                <p className="text-lg text-blue-50/80 max-w-2xl mx-auto mt-4">
                  {activeTab === 'business'
                    ? (language === 'no' ? 'Administrer ditt lojalitetsprogram enkelt og effektivt' : 'Manage your loyalty program easily and efficiently')
                    : (language === 'no' ? 'Samle alle dine lojalitetskort på ett sted' : 'Keep all your loyalty cards in one place')
                  }
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative ${
                activeTab === 'customer'
                ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg shadow-purple-500/20'
                : 'bg-[#0F172A] text-blue-100/70 hover:bg-[#1E293B]'
              }`}
            >
              {t.forCustomers[language]}
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === 'business'
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/10 text-blue-100/70 hover:bg-white/20'
              }`}
            >
              {t.forBusinesses[language]}
            </button>
          </div>
        </div>
      </div>

      {/* Download Cards - Floating Design */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 mb-16 mt-16">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'business' ? (
              <motion.div
                key="business"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-sm mx-auto"
              >
                <div className="relative bg-[#0F172A] border border-blue-500/30 rounded-2xl shadow-xl overflow-hidden">
                  <div className="absolute h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>
                  <div className="p-4">
                    {/* App Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg p-2.5">
                          <FaBuilding className="h-full w-full text-white" />
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <h2 className="text-base font-bold text-white">{t.forBusinesses[language]}</h2>
                        <p className="text-xs text-blue-100/70">{t.businessDescription[language]}</p>
                      </div>
                    </div>
                    
                    {/* Download Button */}
                    <button 
                      onClick={() => setShowConfirmation(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium text-sm py-2 px-4 rounded-lg shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-blue-500/40"
                    >
                      <FaWindows className="h-4 w-4" />
                      {t.posApp[language]}
                    </button>

                    {/* System Requirements */}
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs text-blue-100/50">{t.systemRequirements[language]}:</p>
                      <p className="text-xs text-blue-100/50">{t.windowsVersions[language]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="customer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-sm mx-auto"
              >
                <div className="relative bg-[#0F172A] border border-purple-500/30 rounded-2xl shadow-xl overflow-hidden">
                  <div className="absolute h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                  <div className="p-4">
                    {/* App Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-lg p-2.5">
                          <FaUser className="h-full w-full text-white" />
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <h2 className="text-base font-bold text-white">{t.forCustomers[language]}</h2>
                        <p className="text-xs text-blue-100/70">{t.customerDescription[language]}</p>
                      </div>
                    </div>
                    
                    {/* Download Button */}
                    <button 
                      className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-300 hover:to-purple-400 text-white font-medium text-sm py-2 px-4 rounded-lg shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-purple-500/40"
                    >
                      <FaApple className="h-4 w-4" />
                      {t.downloadNow[language]}
                    </button>

                    {/* QR Code */}
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs text-blue-100/50">Skann QR-kode:</p>
                      <div className="bg-white p-1.5 rounded-lg">
                        <FaQrcode className="h-6 w-6 text-[#0F172A]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Getting Started Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-gradient-to-b from-transparent to-[#0F172A]/90 pt-8 pb-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className={`inline-flex items-center justify-center p-2 rounded-full mb-4 ${
                activeTab === 'business' ? 'bg-blue-500/10' : 'bg-purple-500/10'
              }`}>
                <FaRegLightbulb className={`h-6 w-6 ${
                  activeTab === 'business' ? 'text-blue-400' : 'text-purple-400'
                }`} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                {language === 'no' ? 'Kom i gang' : 'Getting Started'}
              </h2>
              <p className="text-blue-100/70 max-w-2xl mx-auto">
                {activeTab === 'business'
                  ? (language === 'no' ? 'Følg disse trinnene for å starte med Stampy for din bedrift' : 'Follow these steps to get started with Stampy for your business')
                  : (language === 'no' ? 'Følg disse trinnene for å komme i gang med Stampy-appen' : 'Follow these steps to get started with the Stampy app')
                }
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`bg-[#0F172A]/80 border rounded-xl overflow-hidden shadow-xl ${
                  activeTab === 'business' ? 'border-blue-500/20' : 'border-purple-500/20'
                }`}
              >
                <div className={`p-4 flex items-center ${
                  activeTab === 'business'
                  ? 'bg-gradient-to-r from-blue-600/20 to-blue-400/20'
                  : 'bg-gradient-to-r from-blue-400/20 to-purple-500/20'
                }`}>
                  <div className={`p-2 rounded-lg shadow-lg mr-3 ${
                    activeTab === 'business'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-400'
                    : 'bg-gradient-to-r from-blue-400 to-purple-500'
                  }`}>
                    {activeTab === 'business' ? (
                      <FaBuilding className="h-5 w-5 text-white" />
                    ) : (
                      <FaUser className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {activeTab === 'business' ? t.forBusinesses[language] : t.forCustomers[language]}
                  </h3>
                </div>
                
                <div className="p-6">
                  <ol className="space-y-2">
                    {(activeTab === 'business' ? [
                      language === 'no' ? 'Last ned Stampy POS-app' : 'Download the Stampy POS app',
                      language === 'no' ? 'Opprett din bedriftskonto' : 'Create your business account',
                      language === 'no' ? 'Send e-post til kontakt@stampy.no for butikktilgang' : 'Email kontakt@stampy.no for store access',
                      language === 'no' ? 'Begynn å Designe din butikkfront!' : 'Start designing your storefront!'
                    ] : [
                      language === 'no' ? 'Last ned Stampy-appen' : 'Download the Stampy app',
                      language === 'no' ? 'Opprett en konto' : 'Create an account',
                      language === 'no' ? 'Begynn å samle stempler' : 'Start collecting stamps'
                    ]).map((step, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className={`flex-shrink-0 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-lg ${
                          activeTab === 'business'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-400 shadow-blue-500/20'
                          : 'bg-gradient-to-r from-blue-400 to-purple-500 shadow-purple-500/20'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="text-blue-100/80 pt-1">{step}</span>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Support Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl shadow-2xl border border-blue-500/20">
            {/* Background decoration */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              activeTab === 'business'
              ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300'
              : 'bg-gradient-to-r from-blue-600 via-blue-400 to-purple-500'
            }`}></div>
            <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${
              activeTab === 'business' ? 'bg-blue-500' : 'bg-purple-500'
            }`}></div>
            <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-10 ${
              activeTab === 'business' ? 'bg-blue-400' : 'bg-purple-400'
            }`}></div>
            
            <div className="relative p-8 sm:p-10 text-center">
              <div className={`inline-flex items-center justify-center p-3 rounded-full mb-6 ${
                activeTab === 'business' ? 'bg-blue-500/10' : 'bg-purple-500/10'
              }`}>
                <FaQuestionCircle className={`h-8 w-8 ${
                  activeTab === 'business' ? 'text-blue-400' : 'text-purple-400'
                }`} />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">
                {language === 'no' ? 'Trenger du hjelp?' : 'Need help?'}
              </h2>
              <p className="text-lg text-blue-100/70 mb-8 max-w-2xl mx-auto">
                {activeTab === 'business'
                  ? (language === 'no' ? 'Vi hjelper deg med å sette opp ditt lojalitetsprogram' : 'We\'ll help you set up your loyalty program')
                  : (language === 'no' ? 'Vi er her for å hjelpe deg med å komme i gang' : 'We\'re here to help you get started')
                }
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className={`w-full sm:w-auto text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ${
                    activeTab === 'business'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 shadow-blue-500/20 hover:shadow-blue-500/40'
                    : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-300 hover:to-purple-400 shadow-purple-500/20 hover:shadow-purple-500/40'
                  }`}
                >
                  {language === 'no' ? 'Kontakt Support' : 'Contact Support'}
                </button>
                
                <a
                  href="mailto:support@stampy.app"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" />
                  {language === 'no' ? 'Send E-post' : 'Email Us'}
                </a>
              </div>
              
              <p className="mt-6 text-blue-100/50">
                support@stampy.app
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Download Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowConfirmation(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-[340px] bg-[#0F172A] border border-blue-500/30 rounded-2xl shadow-2xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg">
                  <FaWindows className="h-6 w-6 text-white" />
                </div>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="text-blue-100/50 hover:text-blue-100 transition-colors"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'no' ? 'Last ned Stampy POS-app' : 'Download Stampy POS App'}
              </h3>
              <p className="text-blue-100/70 mb-6">
                {language === 'no' 
                  ? 'Er du sikker på at du vil laste ned Stampy POS-appen? Filen er sikker og verifisert.' 
                  : 'Are you sure you want to download the Stampy POS app? The file is secure and verified.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40"
                >
                  {language === 'no' ? 'Last ned nå' : 'Download now'}
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300"
                >
                  {language === 'no' ? 'Avbryt' : 'Cancel'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Download; 