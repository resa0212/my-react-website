import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaWindows, FaDesktop, FaStore, FaQrcode, FaDownload, FaBuilding, FaUser, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Download = () => {
  const { language } = useLanguage();
  const t = translations.download;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-gradient-to-l from-[#38bdf8]/10 to-transparent rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">{t.heroTitle[language]}</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.heroSubtitle[language]}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Download Options Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Business App Downloads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover glass p-8 rounded-xl relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#0F172A] p-3 rounded-xl shadow-lg border border-gray-700">
                <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl">
                  <FaBuilding />
                </div>
              </div>
              
              <div className="text-center pt-12 pb-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{t.forBusinesses[language]}</h2>
                <p className="text-gray-300 mb-8">{t.businessDescription[language]}</p>
                
                <div className="space-y-4 mb-8">
                  {/* Business App Download Button */}
                  <a 
                    href="#" 
                    className="btn-primary flex items-center justify-center w-full p-4 rounded-lg text-white font-medium"
                  >
                    <FaStore className="mr-3" />
                    <span>{t.businessDashboard[language]}</span>
                    <FaArrowRight className="ml-auto" />
                  </a>
                  
                  {/* POS App Download Button */}
                  <a 
                    href="#" 
                    className="btn-secondary flex items-center justify-center w-full p-4 rounded-lg text-white font-medium"
                  >
                    <FaQrcode className="mr-3" />
                    <span>{t.posApp[language]}</span>
                    <FaArrowRight className="ml-auto" />
                  </a>
                </div>
                
                {/* Desktop Downloads */}
                <div>
                  <p className="text-gray-400 text-sm mb-3">{t.alsoAvailable[language]}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <FaWindows className="text-2xl" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <FaDesktop className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Customer App Downloads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-hover glass p-8 rounded-xl relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#0F172A] p-3 rounded-xl shadow-lg border border-gray-700">
                <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl">
                  <FaUser />
                </div>
              </div>
              
              <div className="text-center pt-12 pb-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{t.forCustomers[language]}</h2>
                <p className="text-gray-300 mb-8">{t.customerDescription[language]}</p>
                
                <div className="space-y-4 mb-8">
                  {/* iOS App Download Button */}
                  <a 
                    href="#" 
                    className="btn-primary flex items-center justify-center w-full p-4 rounded-lg text-white font-medium"
                  >
                    <FaApple className="mr-3 text-lg" />
                    <span>{t.downloadForiOS[language]}</span>
                    <FaArrowRight className="ml-auto" />
                  </a>
                  
                  {/* Android App Download Button */}
                  <a 
                    href="#" 
                    className="btn-secondary flex items-center justify-center w-full p-4 rounded-lg text-white font-medium"
                  >
                    <FaAndroid className="mr-3 text-lg" />
                    <span>{t.downloadForAndroid[language]}</span>
                    <FaArrowRight className="ml-auto" />
                  </a>
                </div>
                
                {/* QR Code */}
                <div>
                  <p className="text-gray-400 text-sm mb-3">{t.scanQRCode[language]}</p>
                  <div className="bg-white w-32 h-32 mx-auto rounded-lg flex items-center justify-center">
                    <FaQrcode className="text-6xl text-gray-800" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F172A]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{t.gettingStarted[language]}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.gettingStartedSubtitle[language]}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* For Businesses Guide */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover glass p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 w-12 h-12 rounded-lg flex items-center justify-center text-[#38bdf8] text-xl mr-4">
                  <FaBuilding />
                </div>
                <h3 className="text-xl font-semibold text-white">{t.forBusinesses[language]}</h3>
              </div>
              
              <ol className="space-y-4">
                {t.businessSteps[language].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex text-gray-300"
                  >
                    <span className="bg-[#0F172A] text-[#38bdf8] w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
            
            {/* For Customers Guide */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card-hover glass p-8 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 w-12 h-12 rounded-lg flex items-center justify-center text-[#38bdf8] text-xl mr-4">
                  <FaUser />
                </div>
                <h3 className="text-xl font-semibold text-white">{t.forCustomers[language]}</h3>
              </div>
              
              <ol className="space-y-4">
                {t.customerSteps[language].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex text-gray-300"
                  >
                    <span className="bg-[#0F172A] text-[#38bdf8] w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto glass rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4 text-white">{t.needHelp[language]}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
              {t.supportDescription[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="btn-primary px-8 py-4 rounded-lg text-white font-medium inline-flex items-center"
              >
                {t.contactSupport[language]}
              </a>
              
              <a
                href={`mailto:${t.supportEmail[language]}`}
                className="btn-secondary px-8 py-4 rounded-lg text-white font-medium inline-flex items-center"
              >
                <FaEnvelope className="mr-2" />
                {t.emailUs[language]}
              </a>
            </div>
            
            <p className="mt-6 text-gray-400">
              {t.supportEmail[language]}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Download; 