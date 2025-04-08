import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations';

// Transform the translations object into the format i18next expects
const resources = {
  en: {
    translation: translations
  },
  no: {
    translation: translations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    returnObjects: true
  });

export default i18n; 