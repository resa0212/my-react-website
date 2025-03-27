import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStore, FaQrcode, FaMobileAlt, FaPalette, FaUsers, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const { language } = useLanguage();
  const t = translations.home;
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="gradient-text">{t.heroTitle[language]}</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-300 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t.heroSubtitle[language]}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    to="/download"
                    className="btn-primary px-8 py-4 rounded-lg text-white font-medium flex items-center justify-center"
                  >
                    <span>{t.getStarted[language]}</span>
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="/features"
                    className="btn-secondary px-8 py-4 rounded-lg text-white font-medium"
                  >
                    {t.learnMore[language]}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right Column - App Preview */}
            <motion.div 
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              style={{ y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-[#1E293B] rounded-2xl p-3 shadow-2xl rotate-3 transform-gpu w-[280px] sm:w-[320px] border border-gray-700">
                  <img
                    src="/484646089_2089156948230045_4554784514395838675_n.jpg"
                    alt="Stampy App Preview"
                    className="rounded-xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#0F172A] rounded-full p-3 shadow-lg border border-gray-700">
                    <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] w-12 h-12 rounded-full flex items-center justify-center text-white">
                      <FaMobileAlt size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{t.howItWorks[language]}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.howItWorksSubtitle[language]}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover glass p-8 rounded-xl relative"
              >
                <div className="absolute -top-4 -left-4 bg-[#0F172A] rounded-lg p-2 shadow-lg border border-gray-700">
                  <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] w-8 h-8 rounded-md flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="text-gray-300 mb-4 text-3xl animate-pulse-minimal">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {index === 0 ? t.step1Title[language] : 
                   index === 1 ? t.step2Title[language] : 
                   t.step3Title[language]}
                </h3>
                <p className="text-gray-300">
                  {index === 0 ? t.step1Description[language] : 
                   index === 1 ? t.step2Description[language] : 
                   t.step3Description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-[#38bdf8]/5 to-transparent rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">{t.featuresHighlight[language]}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.featuresHighlightSubtitle[language]}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card-hover glass p-8 rounded-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-[#38bdf8]/20 to-[#0ea5e9]/20 w-12 h-12 rounded-lg flex items-center justify-center text-[#38bdf8] text-xl mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {index === 0 ? t.feature1Title[language] : t.feature2Title[language]}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {index === 0 ? t.feature1Description[language] : t.feature2Description[language]}
                </p>
                
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bulletIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: bulletIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-gray-300"
                    >
                      <div className="text-[#38bdf8] mr-2 mt-1">•</div>
                      <span>
                        {language === 'no' ? 
                          (index === 0 ? 
                            bulletIndex === 0 ? 'Tilpassede farger og temaer' :
                            bulletIndex === 1 ? 'Fleksible stempelkort-layouter' :
                            bulletIndex === 2 ? 'Merkevareprofilerte butikksider' :
                            'Tilpassbare belønningsbeskjeder'
                          : 
                            bulletIndex === 0 ? 'Ett-klikks stempelsamling' :
                            bulletIndex === 1 ? 'Rask QR-kodeskanning' :
                            bulletIndex === 2 ? 'Intuitiv butikkadministrasjon' :
                            'Sanntidssporing av stempler'
                          )
                        : bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
            <h2 className="text-3xl font-bold mb-4 text-white">{t.readyToStart[language]}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
              {t.readyToStartSubtitle[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/download"
                className="btn-primary px-8 py-4 rounded-lg text-white font-medium inline-flex items-center"
              >
                <span>{t.startFreeTrial[language]}</span>
                <FaArrowRight className="ml-2" />
              </Link>
              
              <a
                href={`mailto:${translations.download.supportEmail[language]}`}
                className="btn-secondary px-8 py-4 rounded-lg text-white font-medium inline-flex items-center"
              >
                <FaEnvelope className="mr-2" />
                {translations.download.emailUs[language]}
              </a>
            </div>
            
            <p className="mt-6 text-gray-400">
              {translations.download.supportEmail[language]}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const howItWorks = [
  {
    icon: <FaQrcode />,
    title: 'Scan & Stamp',
    description: 'Customers scan a QR code at your store, and employees can easily add stamps to their digital cards.',
  },
  {
    icon: <FaStore />,
    title: 'Customize Cards',
    description: 'Create unique stamp cards with your brand colors, rewards, and terms. Perfect for any business type.',
  },
  {
    icon: <FaUsers />,
    title: 'Track & Reward',
    description: 'Monitor customer engagement and automatically notify them when they can redeem their rewards.',
  },
];

const features = [
  {
    icon: <FaPalette />,
    title: 'Customizable Design',
    description: 'Make your loyalty program match your brand perfectly.',
    bullets: [
      'Custom colors and themes',
      'Flexible stamp card layouts',
      'Branded store pages',
      'Customizable reward messages'
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: 'Easy to Use',
    description: 'Simple process for both businesses and customers.',
    bullets: [
      'One-click stamp collection',
      'Quick QR code scanning',
      'Intuitive store management',
      'Real-time stamp tracking'
    ]
  }
];

export default Home; 