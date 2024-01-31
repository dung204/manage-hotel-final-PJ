import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationJapan from './locales/japan.json';
const resources = {
  jp: {
    translation: translationJapan,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'jp',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
