import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    ];

    const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    <span className="mr-1 text-base">{currentLanguage.flag}</span>
                    <span>{currentLanguage.code.toUpperCase()}</span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-surface border border-white/10 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical">
                            {languages.map((lng) => (
                                <button
                                    key={lng.code}
                                    onClick={() => changeLanguage(lng.code)}
                                    className={`${i18n.language === lng.code ? 'bg-primary/20 text-primary' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        } flex items-center space-x-2 w-full text-left px-4 py-2 text-sm transition-colors`}
                                    role="menuitem"
                                >
                                    <span className="text-base">{lng.flag}</span>
                                    <span>{lng.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
