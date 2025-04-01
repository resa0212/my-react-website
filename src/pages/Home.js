import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStore, FaQrcode, FaMobileAlt, FaPalette, FaUsers, FaArrowRight, FaEnvelope, FaChartLine } from 'react-icons/fa';
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
                    src={`${process.env.PUBLIC_URL}/484646089_2089156948230045_4554784514395838675_n.jpg`}
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
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#38BDF8]">
              Funksjoner
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Alt du trenger for å administrere ditt lojalitetsprogram
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tilpassede Kort */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1E293B]/50 backdrop-blur-xl p-8 rounded-xl border border-gray-700/50 hover:border-[#38BDF8]/30 transition-colors"
            >
              <div className="bg-[#38BDF8]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FaPalette className="text-[#38BDF8] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Tilpassede Kort</h3>
              <p className="text-gray-400 mb-6">Skap merkevareprofilerte lojalitetskort som passer til din bedrifts identitet</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Tilpassede farger og temaer
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Fleksible stempelkort-layouter
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Merkevareprofilerte butikksider
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Tilpassbare belønningsbeskjeder
                </li>
              </ul>
            </motion.div>

            {/* Enkel Distribusjon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1E293B]/50 backdrop-blur-xl p-8 rounded-xl border border-gray-700/50 hover:border-[#38BDF8]/30 transition-colors"
            >
              <div className="bg-[#38BDF8]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FaMobileAlt className="text-[#38BDF8] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enkel Distribusjon</h3>
              <p className="text-gray-400 mb-6">Del kort via QR-koder, e-post, SMS eller sosiale medier</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Ett-klikks stempelsamling
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Rask QR-kodeskanning
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Intuitiv butikkadministrasjon
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Sanntidssporing av stempler
                </li>
              </ul>
            </motion.div>

            {/* Verdifull kundestatistikk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1E293B]/50 backdrop-blur-xl p-8 rounded-xl border border-gray-700/50 hover:border-[#38BDF8]/30 transition-colors"
            >
              <div className="bg-[#38BDF8]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FaChartLine className="text-[#38BDF8] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Verdifull kundestatistikk</h3>
              <p className="text-gray-400 mb-6">Få innsikt i kundeadferd og lojalitetsprogrammets effektivitet</p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Detaljerte rapporter
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Kundeengasjement-analyse
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Belønningseffektivitet
                </li>
                <li className="flex items-center">
                  <span className="text-[#38BDF8] mr-2">•</span>
                  Trendanalyse og prognoser
                </li>
              </ul>
            </motion.div>
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