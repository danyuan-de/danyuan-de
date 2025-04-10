'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import type { Language } from '@/context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '@/context/ThemeContext'

// Define language option type
interface LanguageOption {
    code: Language;
    label: string;
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()
    const { theme } = useTheme()
    const languageDropdownRef = useRef<HTMLDivElement>(null)

    // Define available languages
    const languages: LanguageOption[] = [
        { code: 'en', label: 'English' },
        { code: 'de', label: 'Deutsch' },
        { code: 'zh-TW', label: '繁體中文' }
    ]

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
                setLanguageMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [languageDropdownRef]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle language change
    // This function is called when the user selects a new language from the dropdown
    // It updates the localStorage and the application state
    const handleLanguageChange = (langCode: Language) => {
        // Update the language in localStorage
        // This is important for persisting the user's choice across sessions
        // and for ensuring that the application loads with the correct language on refresh
        localStorage.setItem('language', langCode);

        // Update the language in the application state
        setLanguage(langCode);

        // Close the language menu after selection
        setLanguageMenuOpen(false);
        setMobileMenuOpen(false);
    }

    // Navigation items
    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' }
    ]

    // Get current language label
    const getCurrentLanguageLabel = () => {
        const currentLang = languages.find(lang => lang.code === language);
        return currentLang ? currentLang.label : 'English';
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'backdrop-blur-sm shadow-md ' + (theme === 'dark' ? 'bg-[#0f172a]/90' : 'bg-white/90')
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <Link href="#home" className={`text-xl font-bold hover:text-blue-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            Daniel Yuan
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="hidden md:flex space-x-6 items-center"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`hover:text-blue-400 transition-colors text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Language Dropdown - Desktop */}
                        <div className="relative ml-4" ref={languageDropdownRef}>
                            <button
                                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                                className={`flex items-center px-3 py-2 rounded-md text-sm ${theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                <span>{getCurrentLanguageLabel()}</span>
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Language Dropdown Menu */}
                            {languageMenuOpen && (
                                <div
                                    className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                                        } ring-1 ring-black ring-opacity-5`}
                                >
                                    {languages.map((item) => (
                                        <div
                                            key={item.code}
                                            className={`px-4 py-2 text-sm cursor-pointer ${theme === 'dark'
                                                ? 'text-gray-300 hover:bg-gray-700'
                                                : 'text-gray-700 hover:bg-gray-100'
                                                } ${language === item.code ? 'font-medium text-blue-500' : ''}`}
                                            onClick={() => handleLanguageChange(item.code)}
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.nav>

                    {/* Mobile menu button and theme toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            type="button"
                            className={`hover:text-white focus:outline-none ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div
                    className={`md:hidden backdrop-blur-sm ${theme === 'dark' ? 'bg-[#0f172a]/95' : 'bg-white/95'}`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setMobileMenuOpen(false)
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Language Dropdown - Mobile */}
                        <div className="px-3 py-2">
                            <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                                Language:
                            </div>
                            <div className="mt-1 space-y-2">
                                {languages.map((item) => (
                                    <div
                                        key={item.code}
                                        className={`block px-3 py-2 text-sm rounded cursor-pointer ${language === item.code
                                            ? theme === 'dark'
                                                ? 'bg-gray-700 text-blue-400'
                                                : 'bg-gray-200 text-blue-600'
                                            : theme === 'dark'
                                                ? 'text-gray-300 hover:bg-gray-700 active:bg-gray-700'
                                                : 'text-gray-700 hover:bg-gray-200 active:bg-gray-100'
                                            }`}
                                        onClick={() => handleLanguageChange(item.code)}
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}