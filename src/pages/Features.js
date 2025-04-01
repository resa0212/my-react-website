import React from 'react';
import { motion } from 'framer-motion';
import { FaQrcode, FaChartLine, FaUsers, FaPalette, FaBell, FaShieldAlt, FaMobileAlt, FaRegCheckCircle, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Features = () => {
  const { language } = useLanguage();
  const t = translations.features;
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-[#38BDF8]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Funksjoner
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Alt du trenger for å administrere ditt lojalitetsprogram
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
      
      {/* Detailed Features Section */}
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
              <span className="gradient-text">{t.detailedFeatures[language]}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {language === 'no' 
                ? 'Vår plattform er pakket med funksjoner for å hjelpe bedriften din til å lykkes' 
                : 'Our platform is packed with features to help your business succeed'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {detailedFeatures.slice(0, 2).map((feature, index) => (
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
                    {index === 0 
                      ? t.forBusinesses[language] 
                      : t.forCustomers[language]}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {language === 'no' 
                    ? index === 0 
                      ? 'Alle funksjonene en bedrift trenger for å administrere et vellykket lojalitetsprogram.'
                      : 'Enkle og brukervennlige funksjoner som kundene vil elske.'
                    : feature.description}
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
                      <span className="text-[#38bdf8] mr-2 mt-0.5"><FaRegCheckCircle /></span>
                      <span>
                        {index === 0 
                          ? (bulletIndex === 0 
                            ? t.businessFeature1[language]
                            : bulletIndex === 1
                              ? t.businessFeature2[language]
                              : bulletIndex === 2
                                ? t.businessFeature3[language]
                                : bulletIndex === 3
                                  ? t.businessFeature4[language]
                                  : t.businessFeature5[language])
                          : (bulletIndex === 0 
                            ? t.customerFeature1[language]
                            : bulletIndex === 1
                              ? t.customerFeature2[language]
                              : bulletIndex === 2
                                ? t.customerFeature3[language]
                                : bulletIndex === 3
                                  ? t.customerFeature4[language]
                                  : t.customerFeature5[language])
                        }
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
            <h2 className="text-3xl font-bold mb-4 text-white">{t.getStartedCTA[language]}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
              {t.getStartedSubtitle[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/download"
                className="btn-primary px-8 py-4 rounded-lg text-white font-medium inline-flex items-center"
              >
                {t.downloadNow[language]}
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

const primaryFeatures = [
  {
    icon: <FaQrcode />,
    title: 'Digital Stamp Cards',
    description: 'Replace paper loyalty cards with digital versions that customers can\'t lose.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Cross-Platform App',
    description: 'Works seamlessly on iOS and Android devices for both businesses and customers.',
  },
  {
    icon: <FaChartLine />,
    title: 'Analytics & Reporting',
    description: 'Track customer engagement, redemption rates, and program performance.',
  },
];

const detailedFeatures = [
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
    icon: <FaBell />,
    title: 'Smart Notifications',
    description: 'Keep customers engaged with timely, relevant notifications.',
    bullets: [
      'Redemption reminders',
      'Special offer alerts',
      'Birthday rewards',
      'Location-based notifications'
    ]
  },
  {
    icon: <FaUsers />,
    title: 'Customer Management',
    description: 'Build stronger relationships with your loyal customers.',
    bullets: [
      'Customer profiles',
      'Purchase history',
      'Loyalty tiers',
      'VIP program options'
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security for your business and customer data.',
    bullets: [
      'End-to-end encryption',
      'Secure authentication',
      'Data backup',
      'GDPR compliant'
    ]
  }
];

export default Features; 