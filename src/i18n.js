import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationDE from './locales/de/translation.json';
import translationSV from './locales/sv/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
    de: {
        translation: translationDE,
    },
    sv: {
        translation: translationSV,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,

        ns: ['translation'],
        defaultNS: 'translation',

        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

export default i18n;
