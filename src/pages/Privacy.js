import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const Privacy = () => {
  const { language } = useLanguage();
  const t = translations.privacy;

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1E293B]/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/5"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold text-center mb-2 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.title[language]}
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.lastUpdated[language]}: {new Date().toLocaleDateString(language === 'no' ? 'nb-NO' : 'en-US')}
          </motion.p>

          <div className="space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.introduction.title[language]}
              </h2>
              <p className="text-gray-300">
                {t.introduction.content[language]}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.informationCollection.title[language]}
              </h2>
              <p className="text-gray-300 mb-4">
                {t.informationCollection.intro[language]}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t.informationCollection.personalInfo[language]}</li>
                <li>{t.informationCollection.usageData[language]}</li>
                <li>{t.informationCollection.deviceInfo[language]}</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.dataUsage.title[language]}
              </h2>
              <p className="text-gray-300 mb-4">
                {t.dataUsage.intro[language]}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {t.dataUsage.purposes[language].map((purpose, index) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.dataStorage.title[language]}
              </h2>
              <p className="text-gray-300">
                {t.dataStorage.content[language]}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.dataSharing.title[language]}
              </h2>
              <p className="text-gray-300 mb-4">
                {t.dataSharing.intro[language]}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {t.dataSharing.sharing[language].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.userRights.title[language]}
              </h2>
              <p className="text-gray-300 mb-4">
                {t.userRights.intro[language]}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {t.userRights.rights[language].map((right, index) => (
                  <li key={index}>{right}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.childrenPrivacy.title[language]}
              </h2>
              <p className="text-gray-300">
                {t.childrenPrivacy.content[language]}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.policyChanges.title[language]}
              </h2>
              <p className="text-gray-300">
                {t.policyChanges.content[language]}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                {t.contact.title[language]}
              </h2>
              <p className="text-gray-300 mb-4">
                {t.contact.intro[language]}
              </p>
              <p className="text-gray-300">
                {t.contact.email[language]}
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy; 